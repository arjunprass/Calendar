import React from 'react'
import '../styles/hero-image.css'

const months = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
]

function HeroImage({ imageUrl, month, year }) {
  const handleImageError = (e) => {
    // Fallback to a gradient background if image fails to load
    e.target.style.display = 'none'
    e.target.parentElement.style.background = 'linear-gradient(135deg, var(--primary-color), var(--primary-lighter))'
    // Ensure the text is still visible
    const textElement = e.target.parentElement.querySelector('.hero-text')
    if (textElement) {
      textElement.style.display = 'block'
    }
  }

  const handleImageLoad = (e) => {
    // Ensure image is visible when it loads
    e.target.style.display = 'block'
  }

  return (
    <div className="hero-section">
      <div className="hero-image-wrapper">
        <img 
          src={imageUrl} 
          alt={`${months[month]} ${year}`}
          className="hero-image"
          onError={handleImageError}
          onLoad={handleImageLoad}
          style={{ display: 'block' }} // Ensure image is visible by default
        />
        <div className="hero-overlay"></div>
        <div className="hero-text">
          <h1 className="hero-title">{months[month]}</h1>
          <p className="hero-year">{year}</p>
        </div>
      </div>
    </div>
  )
}

export default HeroImage
