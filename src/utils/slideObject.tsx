import React, { JSX } from "react"
import { Slide, SlideObject, SlideObjectOptions } from "../components"

export const isJSXElementFunction = (fn: any): fn is () => JSX.Element => {
  if (typeof fn !== 'function') return false;

  try {
    const result = fn();
    return React.isValidElement(result);
  } catch {
    return false;
  }
}

export const renderSlideComponent = (slide: Slide): (() => JSX.Element) => {
  if (isJSXElementFunction(slide)) {
    return slide
  } else {
    if (typeof slide === 'object' && 'render' in slide) {
      return (slide as SlideObject).render;
    }
    return (): JSX.Element => <React.Fragment />
  }
}

export const genSlideObject = (
  component: () => JSX.Element,
  options?: SlideObjectOptions,
) => {
  return {
    render: component,
    options: {...options, isBaseStyle: options?.isBaseStyle ?? false}
  } as SlideObject
}
