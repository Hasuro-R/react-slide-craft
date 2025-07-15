"use client"

import { useFontSize } from "../../hooks/useFontSize"
import "./index.css"

export type ImageProps = {
  src: string
  alt: string
  width?: string
  height?: string
}

export const Image = (props: ImageProps) => {
  const {
    src,
    alt,
    width,
    height,
  } = props

  const fs = useFontSize()

  return (
    <img
      src={src}
      alt={alt}
      className="rsc-img"
      style={{
        width: width ? fs(width) : "auto",
        height: height ? fs(height) : "auto",
      }}
    />
  )
}
