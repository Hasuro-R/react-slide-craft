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

  function isPercentage(val: string) {
    return /^-?\d+(\.\d+)?%$/.test(val.trim());
  }

  return (
    <img
      src={src}
      alt={alt}
      className="rsc-img"
      style={{
        width: width ? (isPercentage(width) ? width : fs(width)) : "auto",
        height: height ? (isPercentage(height) ? height : fs(height)) : "auto",
      }}
    />
  )
}
