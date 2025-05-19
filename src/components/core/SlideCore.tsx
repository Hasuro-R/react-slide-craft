import { useEffect, useState, JSX } from "react"
import { isMobile } from "react-device-detect"
import { SlideButton } from "../button"
import "./index.css"

export type SlidCoreProps = {
  slides: (() => JSX.Element)[]
  defaultSlide?: () => JSX.Element
}

export const SlideCore = (props: SlidCoreProps) => {
  const {
 slides, defaultSlide = slides[0] 
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
    <div className="core-cn">
      <CurrentSlide />
      {isMobile && (
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
