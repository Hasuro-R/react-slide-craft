import React from "react"
import { useFontSize } from "../../hooks/useFontSize"
import { getPaddings } from "../../utils/getPaddings"

export type ContainerProps = ContainerBaseProps & {
  direction: "row" | "column"
}

export type ContainerBaseProps = {
  align?: Align
  crossAlign?: Align
  gap?: string
  padding?: string
  textColor?: string
  backgroundColor?: string
  width?: string
  height?: string
  minWidth?: string
  minHeight?: string
  cornerRadius?: number
  children?: React.ReactNode
}

export type Align = "start" | "center" | "end"

export const Container = (props: ContainerProps) => {
  const {
    direction,
    align = "start",
    gap = "0",
    crossAlign = "start",
    padding = "0",
    cornerRadius = 0,
    textColor = "",
    backgroundColor = "",
    width = "100%",
    height = "100%",
    minWidth = "",
    minHeight = "",
    children,
  } = props

  const fs = useFontSize()

  const [paddingTop, paddingRight, paddingBottom, paddingLeft] = getPaddings(padding)

  const parseAlign = (align: Align): string => {
    switch (align) {
      case "start":
        return "flex-start"
      case "center":
        return "center"
      case "end":
        return "flex-end"
      default:
        return "flex-start"
    }
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: direction,
        alignItems: parseAlign(align),
        justifyContent: parseAlign(crossAlign),
        gap: fs(gap),
        paddingTop: fs(paddingTop),
        paddingRight: fs(paddingRight),
        paddingBottom: fs(paddingBottom),
        paddingLeft: fs(paddingLeft),
        width: width,
        height: height,
        minWidth: minWidth,
        minHeight: minHeight,
        color: textColor,
        backgroundColor: backgroundColor,
        borderRadius: fs(`${cornerRadius}`),
      }}
    >
      {children}
    </div>
  )
}
