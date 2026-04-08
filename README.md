# 📅 Wall Calendar Component

A polished, interactive React component inspired by physical wall calendars, featuring advanced date range selection, integrated notes, and beautiful responsive design.

## ✨ Features

### Core Features
- **Wall Calendar Aesthetic**: Beautiful hero image paired with month/year display and date grid
- **Day Range Selector**: Intuitive selection of start and end dates with visual feedback
- **Integrated Notes Panel**: Dedicated section for notes tied to selected date ranges
- **Fully Responsive Design**: Seamlessly adapts from desktop (side-by-side layout) to mobile (stacked layout)
- **Theme Switching**: 6 beautiful color themes (Indigo, Violet, Cyan, Rose, Amber, Emerald)
- **Dark Mode**: Full dark mode support with smooth transitions

### Extra Features (Creative Liberty)
- 🎨 **Dynamic Theme Switching**: Cycle through 6 vibrant color themes
- 🌙 **Dark Mode Toggle**: Complete dark mode implementation for comfortable viewing
- 🖼️ **Smart Hero Images**: Month-specific hero images that scale smoothly on hover
- 📊 **Range Visualization**: Clear visual indicators for date range selection
- ✨ **Smooth Animations**: Polished transitions and micro-interactions
- 📱 **Touch-Friendly**: Optimized interactions for mobile devices
- 🎯 **Today Indicator**: Prominent display of current date with special styling
- 📝 **Character Counter**: Real-time character count in notes section
- 🔄 **Month Navigation**: Smooth month navigation with today button

## 🛠️ Component Architecture

### Component Structure
```
Calendar (Main Container)
├── HeroImage (Month imagery)
├── MonthHeader (Month/year navigation)
├── DateGrid (Interactive calendar grid)
├── SelectionInfo (Selected date range display)
└── NotesPanel (Notes input area)
```

### State Management
- **currentMonth/currentYear**: Current displayed month
- **startDate/endDate**: Selected date range
- **notes**: Note content indexed by month/range
- **themeColor**: Current theme selection
- **isDarkMode**: Dark mode state

## 🚀 Getting Started

### Installation
```bash
npm install
```

### Development
```bash
npm run dev
```
The app will automatically open in your browser at `http://localhost:3000`

### Build
```bash
npm run build
npm run preview
```

## 🎨 Design Highlights

### Visual States
- **Today**: Highlighted with accent color and border
- **Start Date**: Filled with primary color, pulsing animation
- **End Date**: Filled with lighter primary color
- **In Range**: Gradient background connecting start and end dates
- **Hover**: Subtle lift effect and accent highlight

### Responsive Breakpoints
- **Desktop (> 768px)**: Side-by-side layout (calendar + notes panel)
- **Tablet (480px - 768px)**: Stacked layout with adjusted spacing
- **Mobile (< 480px)**: Optimized touch targets and compact spacing

## 💻 Technical Implementation

### Code Quality
- Clean, modular component structure
- Proper separation of concerns
- Reusable styling with CSS custom properties
- Semantic HTML and accessibility considerations
- Performance optimized with useMemo for calendar calculations

### CSS Architecture
- CSS Custom Properties for theming
- Mobile-first responsive design
- Smooth transitions and animations
- Dark mode support with automatic detection option
- Grid and flexbox for layouts

### Key Features Implementation
- **Date Range Logic**: Automatic correct ordering of start/end dates
- **Calendar Grid**: Proper handling of first day of week and days before/after month
- **Theme System**: 6 color palettes with coordinated lighter/darker variants
- **Local State**: All data persisted during session (extensible to localStorage)

## 🎯 Usage

### Selecting Dates
1. Click a date to set the start date (highlighted in primary color)
2. Click another date to set the end date (dates auto-sort)
3. Dates between start and end are highlighted in gradient
4. Click "Clear Selection" to reset

### Adding Notes
- Notes are tied to the current selected date range
- Text updates in real-time
- Character count displayed at bottom
- Notes persist during the session

### Theme Switching
- Click the 🎨 button to cycle through themes
- Click the 🌙 button to toggle dark mode
- All UI elements update smoothly

## 📱 Responsive Behavior

### Desktop
- 2-column layout: Calendar on left, notes panel on right
- Full-size hero image with hover scaling
- Spacious date cells with hover effects

### Tablet
- Stacked layout
- Adjusted font sizes
- Condensed spacing

### Mobile
- Single column layout
- Touch-optimized date cells
- Simplified hero image
- Full-width controls and buttons





```



## 🎓 Learning Outcomes

This component demonstrates:
- React hooks for state management (useState, useMemo)
- Component composition and reusability
- Advanced CSS techniques (Grid, Flexbox, custom properties)
- Responsive design patterns
- Accessibility considerations
- Date manipulation in JavaScript
- Performance optimization
- Theme system implementation
- Animation and micro-interactions


---

**Built with React + Vite + CSS3**
