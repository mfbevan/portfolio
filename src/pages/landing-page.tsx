import { Box } from '@mui/material'
import { AboutMe, LandingImage } from '../components'

export const LandingPage = () => {
  return (
    <>
      <Box sx={{}}>
        <LandingImage />
        <AboutMe />
      </Box>
    </>
  )
}

export default LandingPage
