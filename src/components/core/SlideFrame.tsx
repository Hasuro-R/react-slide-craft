import React from "react"
import "./index.css"

export type SlideFrameProps = {
  children: React.ReactNode
}

export const SlideFrame = (props: SlideFrameProps) => {
  const { children } = props

  return <div className="frame-cn">{children}</div>
}
