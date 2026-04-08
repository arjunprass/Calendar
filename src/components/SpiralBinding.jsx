import React from 'react'
import '../styles/spiral-binding.css'

function SpiralBinding() {
  return (
    <div className="spiral-binding">
      {[...Array(12)].map((_, i) => (
        <div key={i} className="spiral-hole"></div>
      ))}
    </div>
  )
}

export default SpiralBinding
