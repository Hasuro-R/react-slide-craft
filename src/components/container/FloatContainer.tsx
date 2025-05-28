import React from "react"
import { Container, ContainerBaseProps } from "./Container"
import { checkPercentage } from "../../utils/checkPercentage"
import { useFontSize } from "../../hooks/useFontSize"

export type FloatContainerProps = ContainerBaseProps & {
  top?: string
  bottom?: string
  right?: string
  left?: string
  zIndex?: number
  children: React.ReactNode
}

export const FloatContainer = (props: FloatContainerProps) => {
  const {
    top = "",
    bottom = "",
    right = "",
    left = "",
    children,
  } = props

  const fs = useFontSize()

  const positionVal = (val: string | undefined): string => {
    if (val) {
      return checkPercentage(val) ? val : fs(val)
    }
    return ""
  }

  return (
    <Container
      width="auto"
      height="auto"
      {...props}
      containerStyle={{
        ...props.containerStyle,
        position: "absolute",
        top: positionVal(top),
        bottom: positionVal(bottom),
        right: positionVal(right),
        left: positionVal(left),
      }}
    >
      {children}
    </Container>
  )
}
