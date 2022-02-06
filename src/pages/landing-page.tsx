/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import { Box, CircularProgress } from '@mui/material'
import { useState } from 'react'
import {
  AboutMe,
  Experience,
  LandingImage,
  Footer,
  Skills
} from '../components'

export const LandingPage = () => {
  const [loaded, setLoaded] = useState(false)

  return (
    <>
      <Box sx={{ bgcolor: 'background.default' }}>
        <a id='home' />
        <LandingImage setLoaded={setLoaded} />
        {loaded ? (
          <>
            <AboutMe />
            <Skills />
            <Experience />
            <Footer />
          </>
        ) : (
          <Box
            sx={{
              display: 'flex',
              margin: 'auto',
              padding: '20vh',
              justifyContent: 'center'
            }}
          >
            <CircularProgress color='secondary'/>
          </Box>
        )}
      </Box>
    </>
  )
}

export default LandingPage
