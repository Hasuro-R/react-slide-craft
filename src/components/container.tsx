import { useEffect, useState } from 'react';
import styles from '../styles/container.module.scss';
import { ContainerProps } from '../types';

export function SlidesContainer(props: ContainerProps) {
  const { slides } = props;

  const [currentIndex, setCurrentIndex] = useState(0);
  const CurrentSlide = slides[currentIndex];

  type KeyDownEvent = {
    code: string;
  }

  const handleKeyDown = (e: KeyDownEvent) => {
    const key = e.code;
    if (key === 'ArrowRight') {
      if (currentIndex !== slides.length - 1) {
        setCurrentIndex(currentIndex + 1);
      }
    }
    if (key === 'ArrowLeft') {
      if (currentIndex !== 0) {
        setCurrentIndex(currentIndex - 1);
      }
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  });

  return (
    <div className={styles.cn}>
      {CurrentSlide ? (
        <CurrentSlide />
      ) : (
        <div />
      )}
    </div>
  );
}
