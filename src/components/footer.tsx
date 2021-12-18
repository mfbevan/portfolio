import { Box } from '@mui/material'

export const Footer = () => {
  return (
    <Box>
      <Box
        sx={{
          p: 2,
          bgcolor: 'background.default',
          display: 'grid',
          gap: 2,
          textAlign: 'center',
          alignSelf: 'center',
          height: '20px'
        }}
      />
    </Box>
  )
}
