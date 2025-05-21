import React from "react"
import { BaseSlideFrameProps, SlideFrame } from "../components"

export function generateBaseSlideFrame(props: BaseSlideFrameProps): React.FC<{ children: React.ReactNode }> {
  return ({ children }) => (
    <SlideFrame
      {...props}
    >
      {children}
    </SlideFrame>
  )
}
