import React, { useState, useEffect } from 'react'
import DateGrid from './DateGrid'
import HeroImage from './HeroImage'
import NotesPanel from './NotesPanel'
import MonthHeader from './MonthHeader'
import SpiralBinding from './SpiralBinding'
import '../styles/calendar.css'

function Calendar() {
  const today = new Date()
  const [currentMonth, setCurrentMonth] = useState(today.getMonth())
  const [currentYear, setCurrentYear] = useState(today.getFullYear())
  const [startDate, setStartDate] = useState(null)
  const [endDate, setEndDate] = useState(null)
  const [notes, setNotes] = useState({})
  const [currentNoteText, setCurrentNoteText] = useState('')
  const [themeColor, setThemeColor] = useState('indigo')
  const [isDarkMode, setIsDarkMode] = useState(false)

  // Generate a seasonal hero image based on current month
  const heroImageUrl = generateHeroImage(currentMonth)

  function generateHeroImage(month) {
    // Simple, reliable seasonal images for each month
    const monthImages = [
      'https://picsum.photos/800/300?random=1', // January
      'https://picsum.photos/800/300?random=2', // February
      'https://picsum.photos/800/300?random=3', // March
      'https://picsum.photos/800/300?random=4', // April
      'https://picsum.photos/800/300?random=5', // May
      'https://picsum.photos/800/300?random=6', // June
      'https://picsum.photos/800/300?random=7', // July
      'https://picsum.photos/800/300?random=8', // August
      'https://picsum.photos/800/300?random=9', // September
      'https://picsum.photos/800/300?random=10', // October
      'https://picsum.photos/800/300?random=11', // November
      'https://picsum.photos/800/300?random=12'  // December
    ]
    return monthImages[month]
  }

  function handlePrevMonth() {
    if (currentMonth === 0) {
      setCurrentMonth(11)
      setCurrentYear(prev => prev - 1)
    } else {
      setCurrentMonth(prev => prev - 1)
    }
  }

  function handleNextMonth() {
    if (currentMonth === 11) {
      setCurrentMonth(0)
      setCurrentYear(prev => prev + 1)
    } else {
      setCurrentMonth(prev => prev + 1)
    }
  }

  function handleDateSelect(day) {
    if (startDate === null || (endDate !== null)) {
      setStartDate(new Date(currentYear, currentMonth, day))
      setEndDate(null)
    } else {
      const selectedDate = new Date(currentYear, currentMonth, day)
      if (selectedDate < startDate) {
        setEndDate(startDate)
        setStartDate(selectedDate)
      } else {
        setEndDate(selectedDate)
      }
    }
  }

  function handleClearSelection() {
    setStartDate(null)
    setEndDate(null)
  }

  function handleNoteChange(note) {
    // This only updates the current note being typed, doesn't save to collection
    setCurrentNoteText(note)
  }

  function handleSaveNote() {
    // This saves the current note text to the notes collection and clears the textarea
    if (currentNoteText.trim()) {
      const dateKey = getDateRangeKey()
      const timestamp = new Date().toISOString()
      const savedNoteKey = `${dateKey}_${timestamp}`
      setNotes({
        ...notes,
        [savedNoteKey]: currentNoteText.trim()
      })
      setCurrentNoteText('') // Clear the textarea
    }
  }

  function handleDeleteNote(dateKey) {
    const newNotes = { ...notes }
    delete newNotes[dateKey]
    setNotes(newNotes)
  }

  function getDateRangeKey() {
    if (!startDate) return 'no-selection'
    if (endDate) {
      return `${startDate.toLocaleDateString('en-CA')} - ${endDate.toLocaleDateString('en-CA')}`
    }
    return startDate.toLocaleDateString('en-CA')
  }

  function getNoteForRange() {
    // Return the current note being typed, not from saved notes
    return currentNoteText
  }

  function toggleTheme() {
    const themes = ['indigo', 'violet', 'cyan', 'rose', 'amber', 'emerald']
    const currentIndex = themes.indexOf(themeColor)
    setThemeColor(themes[(currentIndex + 1) % themes.length])
  }

  return (
    <div className={`calendar-container ${isDarkMode ? 'dark' : 'light'} theme-${themeColor}`}>
      <div className="calendar-controls">
        <button 
          className="control-btn theme-toggle" 
          onClick={toggleTheme}
          title="Switch theme"
        >
          🎨
        </button>
        <button 
          className="control-btn dark-toggle" 
          onClick={() => setIsDarkMode(!isDarkMode)}
          title={isDarkMode ? 'Light mode' : 'Dark mode'}
        >
          {isDarkMode ? '☀️' : '🌙'}
        </button>
      </div>

      <SpiralBinding />

      <div className="calendar-wrapper">
        <div className="calendar-main">
          <HeroImage 
            imageUrl={heroImageUrl}
            month={currentMonth}
            year={currentYear}
          />
          
          <MonthHeader 
            currentMonth={currentMonth}
            currentYear={currentYear}
            onPrevMonth={handlePrevMonth}
            onNextMonth={handleNextMonth}
            onToday={() => {
              setCurrentMonth(today.getMonth())
              setCurrentYear(today.getFullYear())
            }}
          />

          <DateGrid
            currentMonth={currentMonth}
            currentYear={currentYear}
            startDate={startDate}
            endDate={endDate}
            onDateSelect={handleDateSelect}
          />

          {startDate && (
            <div className="selection-info">
              <div className="selection-details">
                <span className="selection-label">
                  {startDate ? startDate.toLocaleDateString('en-US', { 
                    month: 'short', 
                    day: 'numeric', 
                    year: 'numeric'
                  }) : 'No selection'}
                  {endDate && ` - ${endDate.toLocaleDateString('en-US', { 
                    month: 'short', 
                    day: 'numeric', 
                    year: 'numeric'
                  })}`}
                </span>
                {endDate && (
                  <span className="duration">
                    ({Math.floor((endDate - startDate) / (1000 * 60 * 60 * 24)) + 1} days)
                  </span>
                )}
              </div>
              <button className="clear-btn" onClick={handleClearSelection}>
                Clear Selection
              </button>
            </div>
          )}
        </div>

        <NotesPanel
          notes={getNoteForRange()}
          onNoteChange={handleNoteChange}
          dateRange={startDate ? `${startDate.toLocaleDateString()} ${endDate ? `- ${endDate.toLocaleDateString()}` : ''}` : 'Select dates to add notes'}
          allNotes={notes}
          onDeleteNote={handleDeleteNote}
          onSaveNote={handleSaveNote}
        />
      </div>
    </div>
  )
}

export default Calendar
