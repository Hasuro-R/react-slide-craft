"use client"

import React, { useEffect, useState, JSX } from "react"
import { isMobile } from "react-device-detect"
import { SlideButton } from "../button"
import { SlideFrame } from "./SlideFrame"
import { SlideBase, SlideBaseCoreProps } from "./SlideBase"
import "./index.css"
import { isJSXElementFunction, renderSlideComponent } from "../../utils/slideObject"

export type SlidCoreProps = {
  // Array of slides to display
  slides: Slide[]

  // Default slide to show when no slides are available
  defaultSlide?: () => JSX.Element

  // Base Slide Frame
  // Set the SlideFrame on which your customized slides will be based
  baseSlideStyle?: SlideBaseCoreProps | undefined

  // Background color for the slide container
  backgroundColor?: string

  // show slide button in pc
  isShowSlideButtonAlways?: boolean

  isShowSlideButtonIndex?: boolean
}

export type Slide = (() => JSX.Element) | SlideObject

export type SlideObject = {
  render: () => JSX.Element
  options?: SlideObjectOptions
}

export type SlideObjectOptions = {
  isBaseStyle?: boolean
}

export const SlideCore = (props: SlidCoreProps) => {
  const {
    slides = [],
    defaultSlide = slides[0],
    baseSlideStyle,
    backgroundColor = "var(--rsc-color-black)",
    isShowSlideButtonAlways = false,
    isShowSlideButtonIndex = true,
  } = props

  const [currentSlideIndex, setCurrentSlideIndex] = useState(0)

  const CurrentSlide = renderSlideComponent(slides[currentSlideIndex]) || defaultSlide
  const RootSlideBase = ({ children } : { children: React.ReactNode }) => {
    const slide = slides[currentSlideIndex]
    if (slide) {
      if (isJSXElementFunction(slide) || (slides[currentSlideIndex] as SlideObject).options?.isBaseStyle) {
        return (
          <SlideBase
            {...baseSlideStyle}
            textColor={baseSlideStyle?.textColor ?? "var(--rsc-color-black)"}
            backgroundColor={baseSlideStyle?.backgroundColor ?? "var(--rsc-color-white)"}
          >
            {children}
          </SlideBase>
        )
      } else {
        return <SlideBase>{children}</SlideBase>
      }
    }
    return <SlideBase>{children}</SlideBase>
  }

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
        <RootSlideBase>
          <CurrentSlide />
        </RootSlideBase>
      </SlideFrame>
      {(isMobile || isShowSlideButtonAlways) && (
        <div className="core-slide-btn-cn">
          <SlideButton
            currentNumber={currentSlideIndex + 1}
            totalCount={slides.length}
            isShowIndex={isShowSlideButtonIndex}
            handleBack={handleBack}
            handleNext={handleNext}
          />
        </div>
      )}
    </div>
  )
}
