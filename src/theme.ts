import { createTheme } from '@mui/material'

export const themeDark = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#eeeeee'
    },
    secondary: {
      main: '#EEE8DC'
    },
    text: {
      primary: '#EEE8DC'
    },
    background: {
      default: '#808080'
    },
    divider: '#dcedc8'
  },
  typography: {
    allVariants: {
      fontFamily: 'Fira Code'
    }
  }
})

export const themeLight = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#eeeeee'
    },
    secondary: {
      main: '#808080'
    },
    text: {
      primary: '#EEE8DC'
    },
    background: {
      default: '#ffffff'
    },
    divider: '#dcedc8'
  },
  typography: {
    allVariants: {
      fontFamily: 'Fira Code'
    }
  }
})
