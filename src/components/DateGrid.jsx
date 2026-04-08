import React, { useMemo } from 'react'
import '../styles/date-grid.css'
import { holidays } from '../data/holidays'

function DateGrid({ currentMonth, currentYear, startDate, endDate, onDateSelect }) {
  const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
  const today = new Date()

  const calendarDays = useMemo(() => {
    const firstDay = new Date(currentYear, currentMonth, 1)
    const lastDay = new Date(currentYear, currentMonth + 1, 0)
    const daysInMonth = lastDay.getDate()
    const startingDayOfWeek = firstDay.getDay()

    const days = []

    // Add empty cells for days before month starts
    for (let i = 0; i < startingDayOfWeek; i++) {
      days.push(null)
    }

    // Add all days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      days.push(day)
    }

    return days
  }, [currentMonth, currentYear])

  function isDateInRange(day) {
    if (!day || !startDate) return false

    const checkDate = new Date(currentYear, currentMonth, day)
    const start = new Date(startDate.getFullYear(), startDate.getMonth(), startDate.getDate())
    const end = endDate ? new Date(endDate.getFullYear(), endDate.getMonth(), endDate.getDate()) : start

    return checkDate >= start && checkDate <= end
  }

  function isStartDate(day) {
    if (!day || !startDate) return false
    return (
      day === startDate.getDate() &&
      currentMonth === startDate.getMonth() &&
      currentYear === startDate.getFullYear()
    )
  }

  function isEndDate(day) {
    if (!day || !endDate) return false
    return (
      day === endDate.getDate() &&
      currentMonth === endDate.getMonth() &&
      currentYear === endDate.getFullYear()
    )
  }

  function isToday(day) {
    if (!day) return false
    return (
      day === today.getDate() &&
      currentMonth === today.getMonth() &&
      currentYear === today.getFullYear()
    )
  }

  function isWeekend(day) {
    if (!day) return false
    const date = new Date(currentYear, currentMonth, day)
    const dayOfWeek = date.getDay()
    return dayOfWeek === 0 || dayOfWeek === 6 // Sunday or Saturday
  }

  function isHoliday(day) {
    if (!day) return false
    return holidays.some(h => h.month === currentMonth && h.day === day)
  }

  function getHolidayName(day) {
    if (!day) return null
    const holiday = holidays.find(h => h.month === currentMonth && h.day === day)
    return holiday ? holiday.name : null
  }

  return (
    <div className="date-grid-container">
      <div className="day-names">
        {dayNames.map((day) => (
          <div key={day} className="day-name">
            {day}
          </div>
        ))}
      </div>
      <div className="date-grid">
        {calendarDays.map((day, index) => (
          <div
            key={index}
            className={`date-cell ${day ? 'active' : 'empty'} ${isToday(day) ? 'today' : ''} ${isStartDate(day) ? 'start-date' : ''} ${isEndDate(day) ? 'end-date' : ''} ${isDateInRange(day) && !isStartDate(day) && !isEndDate(day) ? 'in-range' : ''} ${isWeekend(day) ? 'weekend' : ''} ${isHoliday(day) ? 'holiday' : ''}`}
            onClick={() => day && onDateSelect(day)}
          >
            <div className="date-number">{day}</div>
            {getHolidayName(day) && (
              <div className="holiday-name">{getHolidayName(day)}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default DateGrid
