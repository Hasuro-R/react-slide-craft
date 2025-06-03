import { JSX } from "react"
import { Align, Column } from "../container"
import "./index.css"
import { countLeadingSlashes } from "../../utils/countLeadingSlashes"
import { CustomText, HighlightTextProps, TextProps } from "../text"
import { useFontSize } from "../../hooks/useFontSize"

export type ListProps = {
  items: ListItem[]

  gap?: string

  textStyle?: ListTextStyle

  highlightTextStyle?: HighlightTextProps

  align?: Align | undefined

  crossAlign?: Align | undefined

  marker?: ListMarkerKind

  markerColor?: string
}

type ListItem = JSX.Element | string

type ListTextStyle = TextProps & {
  size?: string
}

export type ListMarkerKind = "dot" | "number" | "none"

export const List = (props: ListProps) => {
  const {
    items,
    gap = "base",
    textStyle,
    highlightTextStyle,
    align = "start",
    crossAlign = "start",
    marker = "dot",
    markerColor,
  } = props

  const fs = useFontSize()

  const fontSize = fs(textStyle?.size || "xl")
  const textColor = textStyle?.color || ""

  const leadItemIndexArray = items.map((item, index) => ({ item, index }))
                                  .filter(({ item }) => (typeof item === "string" && !item.startsWith("/")))
                                  .map(({ index }) => index)

  return (
    <Column
      align={align}
      crossAlign={crossAlign}
      width="auto"
      height="auto"
      gap={gap}
    >
      {items.map((item, index) => (
        <div
          className="rsc-li"
          style={{ wordWrap: 'break-word' }}
          key={index}
        >
          {typeof item === "string" ? (
            <>
            {marker !== "none" && (
              <ListMarker
                fontSize={fontSize}
                color={markerColor || textColor}
                tabCount={countLeadingSlashes(item)}
                kind={marker}
                leadItemIndex={
                  leadItemIndexArray.includes(index) ? leadItemIndexArray.indexOf(index) + 1 : null
                }
              />
            )}
            <CustomText
              text={item.replace(/^\/+/, '')}
              {...textStyle}
              {...highlightTextStyle}
            />
            </>
          ) : (
            item
          )}
        </div>
      ))}
    </Column>
  )
}

const ListMarker = ({
  fontSize,
  color,
  tabCount,
  kind,
  leadItemIndex,
} : {
  fontSize: string,
  color: string,
  tabCount: number,
  kind: ListMarkerKind,
  leadItemIndex?: number | null,
}) => {
  if (kind === "none") return

  const tabNum = tabCount % 3 + 1

  return (
    <div
      className="rsc-li-marker"
      style={{
        paddingRight: `calc(${fontSize} / 2)`,
        marginLeft: `calc(${fontSize} * ${tabCount})`,
      }}
    >
      {tabCount > 0 ? (
        <ListDotMarker
          tabNum={tabNum}
          fontSize={fontSize}
          color={color}
        />
      ) : (
        <>
        {kind === "dot" && (
          <ListDotMarker
            tabNum={tabNum}
            fontSize={fontSize}
            color={color}
          />
        )}
        {kind === "number" && (
          <p
            className="rsc-li-num"
            style={{
              fontSize: fontSize,
              color: color,
            }}
          >
            {leadItemIndex}.
          </p>
        )}
        </>
      )}
    </div>
  )
}

const ListDotMarker = ({
  tabNum,
  fontSize,
  color,
} : {
  tabNum: number,
  fontSize: string,
  color: string,
}) => {
  return (
    <div
      className={`rsc-li-dot-${tabNum}`}
      style={{
        width: `calc(${fontSize} / 3)`,
        backgroundColor: tabNum !== 3 ? color : "",
        borderColor: color,
      }}
    />
  )
}
