import React from "react"
import { useFontSize } from "../../hooks/useFontSize"
import { ParseText } from "./ParseText"
import "./index.css"

export type BaseTextProps = {
  // text
  text: string

  // text class name
  className?: string | undefined

  // text custom style
  style?: React.CSSProperties | undefined

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
    size,
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
      style={{ ...style, fontSize: fontSize(size ?? "base") }}
    >
      <ParseText
        text={text}
        spanClassName={highlightClassName}
        spanStyle={{
          ...highlightStyle,
          color: highlightColor,
          fontSize: fontSize(highlightFontSize ?? size ?? "base"),
          fontWeight: highlightFontWeight
        }}
      />
    </p>
  )
}
