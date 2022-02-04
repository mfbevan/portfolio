import { Box, AppBar, Toolbar, Button } from '@mui/material'
import ModeNightIcon from '@mui/icons-material/ModeNight'
import Brightness5OutlinedIcon from '@mui/icons-material/Brightness5Outlined'

export const Navbar = ({
  toggleDarkMode,
  darkMode
}: {
  toggleDarkMode(): void
  darkMode: boolean
}) => {
  const buttonMargin = 6
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='fixed' sx={{ alignItems: 'center' }}>
        <Toolbar>
          <Button color='inherit' href='#home'>Home</Button>
          <Box ml={buttonMargin} />
          <Button color='inherit' href='#about-me'>About Me</Button>
          <Box ml={buttonMargin} />
          <Button color='inherit' href='#experience'>Experience</Button>
          <Box ml={buttonMargin} />
          <Button color='inherit' href='#projects'>Projects</Button>
          <Box ml={buttonMargin} />
          <Button color='inherit' href='#education'>Education</Button>
          <Box ml={buttonMargin} />

          <Button color='inherit' onClick={toggleDarkMode}>
            {darkMode ? (
              <>
                <ModeNightIcon sx={{ marginRight: '8px' }} /> Dark Mode
              </>
            ) : (
              <>
                <Brightness5OutlinedIcon sx={{ marginRight: '8px' }} /> Light
                Mode
              </>
            )}
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Navbar
