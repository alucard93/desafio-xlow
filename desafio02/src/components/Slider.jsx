import { useState, useEffect } from 'react'
import styles from './slider.module.css'

const images = [
  {
    url: 'https://via.placeholder.com/800x400?text=Image+1',
    alt: 'Image 1',
    link: '#',
  },
  {
    url: 'https://via.placeholder.com/800x400?text=Image+2',
    alt: 'Image 2',
    link: '#',
  },
  {
    url: 'https://via.placeholder.com/800x400?text=Image+3',
    alt: 'Image 3',
    link: '#',
  },
  {
    url: 'https://via.placeholder.com/800x400?text=Image+4',
    alt: 'Image 4',
    link: '#',
  },
]

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext()
    }, 5000)
    return () => clearInterval(interval)
  }, [currentIndex])

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length)
  }

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  const setCurrentSlide = (index) => {
    setCurrentIndex(index)
  }

  return (
    <div className={styles.slider}>
      <div
        className={styles.sliderWrapper}
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <a
            key={index}
            href={image.link}
            className={`${styles.slide} ${
              index === currentIndex ? styles.active : ''
            }`}
            style={{ backgroundImage: `url(${image.url})` }}
            alt={image.alt}
          />
        ))}
      </div>
      <button
        className={`${styles.arrow} ${styles.leftArrow}`}
        onClick={handlePrevious}
      >
        &lt;
      </button>
      <button
        className={`${styles.arrow} ${styles.rightArrow}`}
        onClick={handleNext}
      >
        &gt;
      </button>
      <div className={styles.dots}>
        {images.map((_, index) => (
          <button
            key={index}
            className={`${styles.dot} ${
              index === currentIndex ? styles.active : ''
            }`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </div>
  )
}

export default Slider
