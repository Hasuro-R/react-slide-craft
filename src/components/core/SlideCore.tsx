import { useEffect, useState, JSX } from "react";
import "./index.css";

export type SlidCoreProps = {
  slides: (() => JSX.Element)[];
  defaultSlide?: () => JSX.Element;
}

export const SlideCore = (props: SlidCoreProps) => {
  const {
    slides,
    defaultSlide = slides[0],
  } = props;

  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const CurrentSlide = slides[currentSlideIndex] || defaultSlide;

  const handleKeyDown = (e: { code: any; }) => {
    const key = e.code;
    if (key === 'ArrowRight') {
      if (currentSlideIndex !== slides.length - 1) {
        setCurrentSlideIndex(currentSlideIndex + 1);
      }
    }
    if (key === 'ArrowLeft') {
      if (currentSlideIndex !== 0) {
        setCurrentSlideIndex(currentSlideIndex - 1);
      }
    }
  }

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    }
  });

  return (
    <div className="core-cn">
      <CurrentSlide />
    </div>
  );
}
