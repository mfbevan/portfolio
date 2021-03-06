import { Box, Typography } from '@mui/material'
import Typed from 'react-typed'
import { useState } from 'react'

const startDelay = 200
const typeSpeed = 45
const backSpeed = 20
const strings = ['Frontend', 'Backend', 'Full Stack Developer']
const name = 'Matthew Bevan'

const developerTextDelay = 1100

export const DeveloperTyped = () => {
  const [displaySecondLineCursor, setDisplaySecondLineCursor] = useState(false)
  return (
    <Box sx={{ alignItems: 'center' }}>
      <Typography variant={'h1'} sx={{
        fontSize:'5vw'
      }}>
        <Typed
          strings={[name]}
          startDelay={startDelay}
          typeSpeed={typeSpeed}
          backSpeed={backSpeed}
          onComplete={(instance: { cursor: { remove: () => void } }) => {
            instance.cursor.remove()
            setDisplaySecondLineCursor(true)
          }}
        />
      </Typography>
      <Typography variant={'h3'} sx= {{
        fontSize: '2.5vw'
      }}>
        <Typed
          strings={strings}
          startDelay={developerTextDelay}
          typeSpeed={typeSpeed}
          backSpeed={backSpeed}
          showCursor={displaySecondLineCursor}
        />
      </Typography>
    </Box>
  )
}
