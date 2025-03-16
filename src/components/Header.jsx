import React, { useState } from 'react'

const Header = () => {
  const [isDark, setIsDark] = useState(JSON.parse(localStorage.getItem('isDarkMode')))

  if(isDark){
    document.body.classList.add('dark')
  }else{
    document.body.classList.remove('dark')
  }
  return (
    <div><header className="header-container">
    <div className="header-content">
      <h2 className="title">
        <a href="/">Where in the world?</a>
      </h2>
      <p className="theme-changer" onClick={()=>{
        setIsDark(!isDark)
        localStorage.setItem("isDarkMode",!isDark)
      }}>
        <i className={`fa-solid fa-${isDark ?`sun`:`moon`}`} />
        &nbsp;&nbsp;{isDark?`Light`:`Dark`} Mode
      </p>
    </div>
  </header>
  </div>
  )
}

export default Header
