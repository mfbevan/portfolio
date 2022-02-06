import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Navbar } from './components'
import { LandingPage, NFTPage } from './pages'
import { ThemeProvider } from '@mui/system'
import { themeDark, themeLight } from './theme'
import { useState } from 'react'
import CssBaseline from '@mui/material/CssBaseline'

const App = () => {
  const initialState = !!JSON.parse(localStorage.getItem('darkMode') as string)

  const [darkMode, setDarkMode] = useState(initialState)

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
    localStorage.setItem('darkMode', `${!darkMode}`)
    console.log(darkMode)
  }

  return (
    <>
      <ThemeProvider theme={darkMode ? themeDark : themeLight}>
        <CssBaseline />
        <Navbar toggleDarkMode={() => toggleDarkMode()} darkMode={darkMode} />
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<LandingPage />} />
            <Route path='/nfts' element={<NFTPage />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </>
  )
}

export default App
