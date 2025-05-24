import { useEffect, useState, JSX } from "react"
import { isMobile } from "react-device-detect"
import { SlideButton } from "../button"
import { SlideFrame } from "./SlideFrame"
import { SlideBase, SlideBaseCoreProps } from "./SlideBase"
import "./index.css"

export type SlidCoreProps = {
  // Array of slides to display
  slides: (() => JSX.Element)[]

  // Default slide to show when no slides are available
  defaultSlide?: () => JSX.Element

  // Base Slide Frame
  // Set the SlideFrame on which your customized slides will be based
  baseSlideFrameStyle?: SlideBaseCoreProps | undefined

  // Background color for the slide container
  backgroundColor?: string

  // show slide button in pc
  isShowSlideButtonAlways?: boolean
}

export const SlideCore = (props: SlidCoreProps) => {
  const {
    slides,
    defaultSlide = slides[0],
    baseSlideFrameStyle,
    backgroundColor = "var(--rsc-color-black)",
    isShowSlideButtonAlways = false,
  } = props

  const [currentSlideIndex, setCurrentSlideIndex] = useState(0)
  const CurrentSlide = slides[currentSlideIndex] || defaultSlide

  const handleBack = () => {
    if (currentSlideIndex !== 0) {
      setCurrentSlideIndex(currentSlideIndex - 1)
    }
  }

  const handleNext = () => {
    if (currentSlideIndex !== slides.length - 1) {
      setCurrentSlideIndex(currentSlideIndex + 1)
    }
  }

  const handleKeyDown = (e: { code: any }) => {
    const key = e.code
    if (key === "ArrowRight") {
      if (currentSlideIndex !== slides.length - 1) {
        setCurrentSlideIndex(currentSlideIndex + 1)
      }
    }
    if (key === "ArrowLeft") {
      if (currentSlideIndex !== 0) {
        setCurrentSlideIndex(currentSlideIndex - 1)
      }
    }
  }

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown)

    return () => {
      window.removeEventListener("keydown", handleKeyDown)
    }
  })

  return (
    <div
      className="core-cn"
      style={{ backgroundColor: backgroundColor }}
    >
      <SlideFrame>
        <SlideBase
          {...baseSlideFrameStyle}
          textColor={baseSlideFrameStyle?.textColor ?? "var(--rsc-color-black)"}
          backgroundColor={baseSlideFrameStyle?.backgroundColor ?? "var(--rsc-color-white)"}
        >
          <CurrentSlide />
        </SlideBase>
      </SlideFrame>
      {(isMobile || isShowSlideButtonAlways) && (
        <div className="core-slide-btn-cn">
          <SlideButton
            currentNumber={currentSlideIndex + 1}
            totalCount={slides.length}
            isShowIndex
            handleBack={handleBack}
            handleNext={handleNext}
          />
        </div>
      )}
    </div>
  )
}
