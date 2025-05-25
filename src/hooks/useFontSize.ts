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

export const useFontSize = () => {
  const [isWideScreen, setIsWideScreen] = useState(() => {
    if (typeof window !== 'undefined') {
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

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (variable: string) => {
    const fontSize =
      FONT_SIZE_MAP[variable as FontSizeVariant] ?? Number(variable) ?? 16
    const fontSizeRatio = fontSize / 16

    if (isWideScreen) {
      return `calc(${fontSizeRatio} * (100vh / 37))`
    } else {
      return `calc(${fontSizeRatio} * (150vw / 100))`
    }

  }
}
