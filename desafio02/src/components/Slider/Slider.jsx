import { useEffect, useState } from 'react'
import styles from '../slider.module.css'
import Arrow from '../Arrow/Arrow'



const Slider = ({ images }) => {
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
          >
            <img src={image.url} alt={image.alt} className={styles.image} />
          </a>
        ))}
      </div>
      <button
        className={`${styles.arrow} ${styles.leftArrow}`}
        onClick={handlePrevious}
      >
        <Arrow />
      </button>
      <button
        className={`${styles.arrow} ${styles.rightArrow}`}
        onClick={handleNext}
      >
        <Arrow className={styles.arrowIcon} />
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
