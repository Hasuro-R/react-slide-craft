"use client"

import { useFontSize } from "../../hooks/useFontSize"
import { SlideBase, SlideBaseCoreProps } from "../core"
import { HeadlineText } from "../text"
import { SubTitleText } from "../text/SubTitleText"
import "./index.css"

export type CoverSlideTemplateProps = {
  title: string
  subTitle?: string
  color?: string | undefined
  subTitleColor?: string | undefined
  align?: SlideAlign | undefined
  slideStyle?: SlideBaseCoreProps
}

export type SlideAlign = "left" | "center" | "right"

export const CoverSlideTemplate = (props: CoverSlideTemplateProps) => {
  const {
    title,
    subTitle,
    color = "",
    subTitleColor = "",
    align = "left",
    slideStyle,
  } = props

  const fs = useFontSize()

  const displayAlign = () => {
    switch (align) {
      case "left":
        return "flex-start"
      case "center":
        return "center"
      case "right":
        return "flex-end"
      default:
        return "flex-start"
    }
  }

  return (
    <SlideBase {...slideStyle}>
      <div
        className="rsc-cover-cn"
        style={{
          alignItems: displayAlign(),
          gap: fs("5"),
        }}
      >
        <HeadlineText
          text={title}
          color={color}
          style={{ textAlign: align }}
        />
        {subTitle && (
          <SubTitleText
            text={subTitle}
            style={{ textAlign: align }}
            color={subTitleColor}
          />
        )}
      </div>
    </SlideBase>
  )
}
