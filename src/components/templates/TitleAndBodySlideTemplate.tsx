"use client"

import React from "react"
import { SlideBase, SlideBaseCoreProps } from "../core"
import { TitleText } from "../text"
import { useFontSize } from "../../hooks/useFontSize"
import "./index.css"

type TitleAndBodySlideTemplateProps = {
  title: string
  titleColor?: string | undefined
  slideStyle?: SlideBaseCoreProps
  children?: React.ReactNode
}

export const TitleAndBodySlideTemplate = (props: TitleAndBodySlideTemplateProps) => {
  const {
    title,
    titleColor = "",
    slideStyle,
    children,
  } = props

  const fs = useFontSize()

  return (
    <SlideBase {...slideStyle}>
      <div
        className="rsc-t-a-b-cn"
        style={{ gap: fs("20") }}
      >
        <TitleText
          text={title}
          color={titleColor}
        />
        <div className="rsc-t-a-b-body-cn">
          {children}
        </div>
      </div>
    </SlideBase>
  )
}
