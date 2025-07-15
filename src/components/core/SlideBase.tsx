"use client"

import React from "react"
import { useFontSize } from "../../hooks/useFontSize"
import { getPaddings } from "../../utils/getPaddings"
import "./index.css"

export type SlideBaseProps = SlideBaseCoreProps & {
  children: React.ReactNode
}

export type SlideBaseCoreProps = {
  // Slide Text Color
  textColor?: string | undefined

  // Slide text font
  fontFamily?: string | undefined

  // Slide Background Color
  backgroundColor?: string | undefined

  // Slide Background Image
  backgroundImage?: string | undefined

  // Slide Padding
  // ex) "10" or "10 20" or "10 20 30 40"
  padding?: string | undefined

  // Slide CornerRadius
  cornerRadius?: number | undefined

  // Slide Background ClassName
  backgroundClassName?: string | undefined

  // Slide Background Style
  backgroundStyle?: React.CSSProperties | undefined
}

export const SlideBase = (props: SlideBaseProps) => {
  const {
    children,
    textColor = "",
    fontFamily,
    backgroundColor = "",
    backgroundImage,
    padding = "",
    cornerRadius = 0,
    backgroundClassName = "",
    backgroundStyle,
  } = props

  const fontSize = useFontSize()

  const [paddingT, paddingR, paddingB, paddingL] = getPaddings(padding)

  return (
    <div
      className={`base-slide-cn ${backgroundClassName}`}
      style={{
        ...backgroundStyle,
        color: textColor,
        fontFamily: fontFamily,
        backgroundColor: backgroundColor,
        backgroundImage: backgroundImage,
        paddingTop: fontSize(paddingT),
        paddingRight: fontSize(paddingR),
        paddingBottom: fontSize(paddingB),
        paddingLeft: fontSize(paddingL),
        borderRadius: fontSize(`${cornerRadius}`),
      }}
    >
      {children}
    </div>
  )
}
