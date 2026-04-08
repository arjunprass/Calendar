import React from 'react'
import '../styles/month-header.css'

function MonthHeader({ currentMonth, currentYear, onPrevMonth, onNextMonth, onToday }) {
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ]

  const today = new Date()
  const isCurrentMonth = currentMonth === today.getMonth() && currentYear === today.getFullYear()

  return (
    <div className="month-header">
      <div className="month-navigation">
        <button className="nav-btn" onClick={onPrevMonth} title="Previous month">
          ← Previous
        </button>
        <div className="month-display">
          <span>{months[currentMonth]}</span>
          <span className="year">{currentYear}</span>
        </div>
        <button className="nav-btn" onClick={onNextMonth} title="Next month">
          Next →
        </button>
      </div>
      {!isCurrentMonth && (
        <button className="today-btn" onClick={onToday} title="Go to today">
          Today
        </button>
      )}
    </div>
  )
}

export default MonthHeader
