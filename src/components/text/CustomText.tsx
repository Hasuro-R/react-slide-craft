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
  // Set the font size of highlight to 1.5x if you pass it in a format like *1.5
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

  const fs = useFontSize()

  const parseMagnification = (str: string): number | undefined => {
    const match = str.match(/^\*(\d+(\.\d+)?)/);
    if (match) {
      return parseFloat(match[1]);
    }
    return undefined;
  }

  const magnification = parseMagnification(highlightFontSize ?? "")
  const fontSize = fs(size ?? "base")
  const spanFontSize = magnification ? `calc(${fontSize} * ${magnification})` : fs(highlightFontSize ?? size ?? "base")

  return (
    <p
      className={className}
      style={{
        ...style,
        color: color,
        fontWeight: weight,
        fontSize: fontSize,
      }}
    >
      <ParseText
        text={text}
        spanClassName={highlightClassName}
        spanStyle={{
          ...highlightStyle,
          color: highlightColor,
          fontSize: spanFontSize,
          fontWeight: highlightFontWeight,
          textAlign: align,
          fontFamily: fontFamily,
        }}
      />
    </p>
  )
}
