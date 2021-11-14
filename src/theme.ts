import { createTheme } from '@mui/material'

export const themeDark = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#eeeeee'
    },
    secondary: {
      main: '#9ccc65'
    },
    text: {
      primary: '#EEE8DC'
    },
    background: {
      default: '#343239'
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
      main: '#9ccc65'
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
