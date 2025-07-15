"use client"
import { useEffect, useState } from "react"

type FontSizeVariant =
  | "xs"
  | "sm"
  | "base"
  | "lg"
  | "xl"
  | "2xl"
  | "3xl"
  | "4xl"
  | "5xl"
  | "6xl"
  | "7xl"
  | "8xl"
  | "9xl"

const FONT_SIZE_MAP: Record<FontSizeVariant, number> = {
  xs: 12,
  sm: 14,
  base: 16,
  lg: 18,
  xl: 20,
  "2xl": 24,
  "3xl": 30,
  "4xl": 36,
  "5xl": 48,
  "6xl": 60,
  "7xl": 72,
  "8xl": 96,
  "9xl": 128
}

const returnFontSizeRatio = (fontSize: string): number => {
  if (fontSize.endsWith("px")) {
    const parseFontSize = parseFloat(fontSize.replace("px", ""))
    const floatFontSize = Number.isNaN(parseFontSize) ? 16 : parseFontSize
    return floatFontSize / 16
  } else if (fontSize.endsWith("rem") || fontSize.endsWith("em")) {
    const parseFontSize = parseFloat(fontSize.replace(/rem|em/, ""))
    const floatFontSize = Number.isNaN(parseFontSize) ? 1 : parseFontSize
    return floatFontSize
  } else {
    const parseFontSize =
      FONT_SIZE_MAP[fontSize as FontSizeVariant] ?? Number(fontSize) ?? 16
    return parseFontSize / 16
  }
}

export const useFontSize = () => {
  const [isWideScreen, setIsWideScreen] = useState(() => {
    if (typeof window !== "undefined") {
      const ratio = window.innerWidth / window.innerHeight
      return ratio >= 16 / 9
    }
    return false
  })

  useEffect(() => {
    const handleResize = () => {
      const ratio = window.innerWidth / window.innerHeight
      setIsWideScreen(ratio >= 16 / 9)
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (variable: string) => {
    const trimVariable = variable.trim()
    if (trimVariable.endsWith("%") || trimVariable === "auto") {
      return trimVariable
    }
    const fontSizeRatio = returnFontSizeRatio(trimVariable)

    if (isWideScreen) {
      return `calc(${fontSizeRatio} * (100vh / 37))`
    } else {
      return `calc(${fontSizeRatio} * (150vw / 100))`
    }
  }
}
