/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import { Box } from '@mui/material'
import { AboutMe, Experience, LandingImage, Footer, Skills } from '../components'

export const LandingPage = () => {
  return (
    <>
      <Box sx={{ bgcolor: 'background.default' }}>
        <a id='home' />
        <LandingImage />
        <AboutMe />
        <Skills />
        <Experience />
        <Footer />
      </Box>
    </>
  )
}

export default LandingPage
