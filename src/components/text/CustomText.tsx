import React from "react"
import { useFontSize } from "../../hooks/useFontSize"
import { ParseText } from "./ParseText"
import "./index.css"

export type BaseTextProps = HighlightTextProps & {
  // text
  text: string

  // text color
  color?: string | undefined

  // text font weight
  weight?: string | undefined

  // text align
  align?: React.CSSProperties["textAlign"] | undefined

  // text font
  fontFamily?: string | undefined

  // text class name
  className?: string | undefined

  // text custom style
  style?: React.CSSProperties | undefined
}

export type HighlightTextProps = {
  // highlight text color
  highlightColor?: string | undefined

  // highlight text font size
  highlightFontSize?: string | undefined

  // highlight text font weight
  highlightFontWeight?: string | undefined

  // highlight text custom class name
  highlightClassName?: string | undefined

  // highlight text custom style
  highlightStyle?: React.CSSProperties | undefined
}

export type CustomTextProps = BaseTextProps & {
  size?: string | undefined
}

export const CustomText = (props: CustomTextProps) => {
  const {
    text,
    color,
    size,
    weight,
    align = "left",
    fontFamily,
    className = "",
    style,
    highlightColor = "",
    highlightFontSize,
    highlightFontWeight = "bold",
    highlightClassName = "",
    highlightStyle
  } = props

  const fontSize = useFontSize()

  return (
    <p
      className={className}
      style={{
        ...style,
        color: color,
        fontWeight: weight,
        fontSize: fontSize(size ?? "base")
      }}
    >
      <ParseText
        text={text}
        spanClassName={highlightClassName}
        spanStyle={{
          ...highlightStyle,
          color: highlightColor,
          fontSize: fontSize(highlightFontSize ?? size ?? "base"),
          fontWeight: highlightFontWeight,
          textAlign: align,
          fontFamily: fontFamily,
        }}
      />
    </p>
  )
}
