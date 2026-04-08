import React, { useState } from 'react'
import '../styles/notes-panel.css'

function NotesPanel({ notes, onNoteChange, dateRange, allNotes, onDeleteNote, onSaveNote }) {
  const [expanded, setExpanded] = useState(false)

  const hasNotes = allNotes && Object.keys(allNotes).length > 0

  // Function to format note keys for display (remove timestamp)
  const formatNoteKey = (key) => {
    // Remove timestamp part if it exists (everything after the last underscore)
    const lastUnderscoreIndex = key.lastIndexOf('_')
    if (lastUnderscoreIndex > 0) {
      return key.substring(0, lastUnderscoreIndex)
    }
    return key
  }

  return (
    <div className="notes-panel">
      <div className="notes-header">
        <div className="notes-title-row">
          <h2>📝 Notes</h2>
          {hasNotes && (
            <span className="notes-badge">{Object.keys(allNotes).length}</span>
          )}
        </div>
        <p className="notes-subtitle">{dateRange}</p>
      </div>

      <textarea
        className="notes-input"
        placeholder="Add your notes here... Track events, reminders, or important dates for this period."
        value={notes}
        onChange={(e) => onNoteChange(e.target.value)}
      />

      <div className="notes-actions">
        <button
          className="add-note-btn"
          onClick={onSaveNote}
          disabled={!notes.trim()}
          title="Save this note for the selected date range"
        >
          📝 Add Note
        </button>
      </div>

      <div className="notes-footer">
        <span className="char-count">{notes.length} characters</span>
      </div>

      {hasNotes && (
        <div className="notes-list-container">
          <button
            className="notes-expand-btn"
            onClick={() => setExpanded(!expanded)}
            title={expanded ? 'Collapse saved notes' : 'Expand saved notes'}
          >
            <span className="expand-icon">{expanded ? '▼' : '▶'}</span>
            <span>Saved Notes ({Object.keys(allNotes).length})</span>
          </button>

          {expanded && (
            <div className="notes-list">
              {Object.entries(allNotes).map(([key, noteText]) => (
                <div key={key} className="note-item">
                  <div className="note-item-header">
                    <span className="note-date">{formatNoteKey(key)}</span>
                    <button
                      className="delete-note-btn"
                      onClick={() => onDeleteNote(key)}
                      title="Delete this note"
                      aria-label={`Delete note for ${formatNoteKey(key)}`}
                    >
                      ✕
                    </button>
                  </div>
                  <p className="note-preview">{noteText.substring(0, 100)}{noteText.length > 100 ? '...' : ''}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export default NotesPanel
