import Header from './components/Header'
import { Outlet } from 'react-router-dom'
import { useState } from 'react'
import { ThemeContext } from './contexts/ThemeContext'


import './App.css'

const App = () => {
  const [isDark, setIsDark] = useState(JSON.parse(localStorage.getItem('isDarkMode')))

  return (
    <ThemeContext.Provider value={[isDark, setIsDark]}>
      <Header  />
      <Outlet  />
    </ThemeContext.Provider>
  )
}

export default App