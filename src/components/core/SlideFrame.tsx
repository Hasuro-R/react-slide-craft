import React from "react"
import { useFontSize } from "../../hooks/useFontSize"
import { getPaddings } from "../../utils/getPaddings"
import "./index.css"

export type SlideFrameProps = BaseSlideFrameProps & {
  children: React.ReactNode
}

export type BaseSlideFrameProps = {
  // Slide Text Color
  textColor?: string | undefined

  // Slide Background Color
  backgroundColor?: string | undefined

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

export const SlideFrame = (props: SlideFrameProps) => {
  const {
    children,
    textColor = "var(--rsc-text-color)",
    backgroundColor = "var(--rsc-color-white)",
    padding = "",
    cornerRadius = 0,
    backgroundClassName = "",
    backgroundStyle,
  } = props

  const fontSize = useFontSize()

  const [paddingT, paddingR, paddingB, paddingL] = getPaddings(padding)

  return (
    <div
      className={`frame-cn ${backgroundClassName}`}
      style={{
        ...backgroundStyle,
        color: textColor,
        backgroundColor: backgroundColor,
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
