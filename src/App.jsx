import Header from './components/Header'
import { Outlet } from 'react-router-dom'
import { useState } from 'react'
import { ThemeProvider } from './contexts/ThemeContext'


import './App.css'

const App = () => {

  return (
    <ThemeProvider>
      <Header />
      <Outlet />
    </ThemeProvider>
  )
}

export default App