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
      goToNext()
    }, 3000) // Change image every 3 seconds
    return () => clearInterval(interval)
  }, [currentIndex])

  const goToPrevious = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    )
  }

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
  }

  const goToSlide = (index) => {
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
        onClick={goToPrevious}
      >
        &lt;
      </button>
      <button
        className={`${styles.arrow} ${styles.rightArrow}`}
        onClick={goToNext}
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
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </div>
  )
}

export default Slider
