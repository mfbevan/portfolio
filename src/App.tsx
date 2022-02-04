import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Navbar } from './components'
import { LandingPage } from './pages'
import { ThemeProvider } from '@mui/system'
import { themeDark, themeLight } from './theme'
import { useState } from 'react'

const App = () => {
  const [darkMode, setDarkMode] = useState(false)

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
    console.log(darkMode)
  }

  return (
    <>
      <ThemeProvider theme={darkMode ? themeDark : themeLight}>
        <Navbar toggleDarkMode={() => toggleDarkMode()} darkMode={darkMode} />
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<LandingPage />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </>
  )
}

export default App
