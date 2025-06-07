import React from "react"
import { useFontSize } from "../../hooks/useFontSize"
import { getPaddings } from "../../utils/getPaddings"

export type ContainerProps = ContainerBaseProps & {
  direction?: "row" | "column"
}

export type ContainerBaseProps = {
  align?: Align
  crossAlign?: Align
  gap?: string
  padding?: string
  textColor?: string
  backgroundColor?: string
  width?: string
  height?: string
  minWidth?: string
  minHeight?: string
  cornerRadius?: number
  border?: BorderOptions | undefined
  containerStyle?: React.CSSProperties | undefined
  children?: React.ReactNode
}

export type Align = "start" | "center" | "end" | "between" | "around"

export type BorderOptions = {
  color?: string
  width?: number
  style?: React.CSSProperties["borderStyle"] | undefined
}

export const Container = (props: ContainerProps) => {
  const {
    direction = "row",
    align = "center",
    gap = "0",
    crossAlign = "center",
    padding = "0",
    cornerRadius = 0,
    textColor = "",
    backgroundColor = "",
    width = "100%",
    height = "100%",
    minWidth = "",
    minHeight = "",
    border,
    children,
    containerStyle = {},
  } = props

  const fs = useFontSize()

  const [paddingTop, paddingRight, paddingBottom, paddingLeft] = getPaddings(padding)

  const parseAlign = (align: Align): string => {
    switch (align) {
      case "start":
        return "flex-start"
      case "center":
        return "center"
      case "end":
        return "flex-end"
      case "between":
        return "space-between"
      case "around":
        return "space-around"
      default:
        return "flex-start"
    }
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: direction,
        alignItems: parseAlign(align),
        justifyContent: parseAlign(crossAlign),
        gap: fs(gap),
        paddingTop: fs(paddingTop),
        paddingRight: fs(paddingRight),
        paddingBottom: fs(paddingBottom),
        paddingLeft: fs(paddingLeft),
        width: fs(width),
        height: fs(height),
        minWidth: minWidth,
        minHeight: minHeight,
        color: textColor,
        backgroundColor: backgroundColor,
        border: `${fs(border?.width?.toString() || "0")} ${border?.style || "solid"} ${border?.color || "transparent"}`,
        borderRadius: fs(`${cornerRadius}`),
        ...containerStyle,
      }}
    >
      {children}
    </div>
  )
}
