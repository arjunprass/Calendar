import React from 'react'
import { holidays } from '../data/holidays'
import '../styles/holidays-footer.css'

function HolidaysFooter() {
  const monthNames = [
    'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
  ]

  // Sort holidays by month and day
  const sortedHolidays = [...holidays].sort((a, b) => {
    if (a.month !== b.month) return a.month - b.month
    return a.day - b.day
  })

  return (
    <div className="holidays-footer">
      <h3 className="holidays-title">📅 Holidays</h3>
      <div className="holidays-list">
        {sortedHolidays.map((holiday, index) => (
          <div key={index} className="holiday-item">
            <span className="holiday-date">{monthNames[holiday.month]} {holiday.day}</span>
            <span className="holiday-name">{holiday.name}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default HolidaysFooter
