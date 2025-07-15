"use client"

import { useFontSize } from "../../hooks/useFontSize"

export type SpacerProps = {
  width?: string
  height?: string
}

export const Spacer = (props: SpacerProps) => {
  const {
    width,
    height,
  } = props

  const fs = useFontSize()

  const spacerWidth = width ? fs(width) : (height ? "" : "100%")
  const spacerHeight = height ? fs(height) : (width ? "" : "100%")

  return (
    <div
      style={{
        width: spacerWidth,
        height: spacerHeight,
      }}
    />
  )
}
