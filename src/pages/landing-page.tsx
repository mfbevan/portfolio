import { Box } from '@mui/material'
import { AboutMe, Experience, LandingImage, Footer } from '../components'

export const LandingPage = () => {
  return (
    <>
      <Box sx={{ bgcolor: 'background.default' }}>
        <LandingImage />
        <AboutMe />
        <Experience />
        <Footer />
      </Box>
    </>
  )
}

export default LandingPage
