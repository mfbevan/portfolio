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
      <AppBar position='static' sx={{ alignItems: 'center' }}>
        <Toolbar>
          <Button color='inherit'>About Me</Button>
          <Box ml={buttonMargin} />
          <Button color='inherit'>Experience</Button>
          <Box ml={buttonMargin} />
          <Button color='inherit'>Skills</Button>
          <Box ml={buttonMargin} />
          <Button color='inherit'>Contact</Button>
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
