import React from "react"
import { SlideBase, SlideBaseCoreProps } from "../core"
import { TitleText } from "../text"
import "./index.css"

export type TitleWithBgAndBodySlideTemplateProps = {
  title: string
  titleColor?: string | undefined
  titleBgColor?: string | undefined
  slideStyle?: SlideBaseCoreProps | undefined
  children?: React.ReactNode
}

export const TitleWithBgAndBodySlideTemplate = (props: TitleWithBgAndBodySlideTemplateProps) => {
  const {
    title,
    titleColor = "",
    titleBgColor = "",
    slideStyle,
    children,
  } = props

  return (
    <SlideBase {...slideStyle}>
      <div className="rsc-t-bg-a-b-cn">
        <div
          className="rsc-t-bg-a-b-title-cn"
          style={{ backgroundColor: titleBgColor }}
        >
          <TitleText
            text={title}
            color={titleColor}
          />
        </div>
        <div className="rsc-t-bg-a-b-body-cn">
          {children}
        </div>
      </div>
    </SlideBase>
  )
}
