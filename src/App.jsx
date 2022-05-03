import React from 'react'
import Header from './components/Header/Header'
import Rocker from './components/Rocker/Rocker'
import Portfolio from './components/Portfolio/Portfolio'
import Skills from './components/Skills/Skills'

function App() {
  const [isDarkMode, setIsDarkMode] = React.useState(false)
  const [showSkills, setShowSkills] = React.useState(false)
  
  function toggleDarkMode() {
    setIsDarkMode(prevIsDarkMode => !prevIsDarkMode)
  }

  function toggleRocker() {
    // true: Show Portfolio
    // false: Show Skills
    setShowSkills(prevShowSkills => !prevShowSkills)
  }

  return (
    <main className={isDarkMode ? 'dark-theme' : ''}>
      <Header
        isDarkMode={isDarkMode}
        onClick={toggleDarkMode}
      />
      
      <Rocker
        isDarkMode={isDarkMode}
        showSkills={showSkills}
        onClick={toggleRocker}
      />
      
      {showSkills ? <Skills /> : <Portfolio />}
    </main>
  )
}

export default App
