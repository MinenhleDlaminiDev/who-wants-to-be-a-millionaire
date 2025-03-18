# Who Wants to Be a Insight Consultant Millionaire - Quiz Game

A React-based interactive quiz game inspired by the popular TV show "Who Wants to Be a Millionaire" & Insight Consulting. Built with modern web technologies and featuring real-time interactions, animations, and dynamic content.

## 🎮 Game Features

### Dynamic Quiz Content
- Questions are fetched from a custom Supabase backend endpoint
- Real-time data loading and state management
- Seamless question transitions

### Interactive Timer
- 30-second countdown for each question
- Visual countdown display
- Automatic game over when time runs out

### Money Pyramid
- Dynamic prize ladder showing potential winnings
- Real-time updates as players progress
- Highlights current question level
- Prize values range from R 100 to R 250,000

### Animations & Sound Effects
- Question selection animations
- Correct/incorrect answer animations using CSS keyframes
- Sound effects for:
  - Game start
  - Correct answers
  - Wrong answers

### Responsive Design
- Mobile-friendly interface
- Adaptive layout for different screen sizes
- Optimized viewing experience on both desktop and mobile devices

## 🚀 Technical Implementation

### Core Technologies
- React 19
- Vite
- Supabase for backend
- CSS3 for animations
- use-sound for audio effects

### Key Components

#### Quiz Component
The main game logic handler that:
- Manages question states
- Handles answer validation
- Controls game progression

#### Timer Component
A countdown mechanism that:
- Maintains 30-second limit per question
- Automatically ends game on timeout
- Resets with each new question

#### Start Component
The game entry point featuring:
- Player name input
- Game initialization
- Welcome screen

## 🎨 Styling

The game features a rich, dark theme with:
- Gradient backgrounds
- Dynamic color transitions
- Responsive grid layouts
- Custom animations for user interactions

### Animation Examples
- Answer selection effects
- Correct/incorrect answer indicators
- Money pyramid highlighting

## 📱 Responsive Features
- Adaptive layouts for mobile devices
- Flexible component sizing
- Touch-friendly interface
- Optimized text and button sizes for mobile

## 🔧 Setup and Installation

1. Clone the repository
2. Install dependencies: npm install
3. Start the development server: npm run dev

## 🌐 Environment Requirements
- Node.js 16+
- Modern web browser
- Internet connection for API access