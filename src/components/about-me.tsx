import { Box, Paper, Grid, styled, Typography, Link } from '@mui/material'
import portrait from '../images/matthew_bevan_square.jpg'
import { LinkedIn, GitHub } from '@mui/icons-material'

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  textAlign: 'center',
  color: theme.palette.text.secondary,
  lineHeight: '20px',
  padding: '50px',
  paddingTop: ''
}))

export const AboutMe = () => {
  const aboutText1 = `My name is Matthew Bevan. I am a software developer with a passion for programming and problem solving.
  Since graduating a Bachelor of Computer Science from Queensland University of Technology and working as a full-time
  developer I have gained experience to many useful and current technologies as well as exposure to best practices
  across the full-stack.`

  const aboutText2 = `Outside of work I enjoy playing and making video games (see some of my projects below), photography, robotics projects, graphic design, reading and films.
  I love keeping busy and constantly pick up new technologies and applications to try my hand at, with previous experience across the Adobe Create Cloud suite
  (Photoshop, Illustrator, Lightroom), Unity3D Game Development, Autodesk Inventor and Fusion 360. Below you will see an outline of my experience across multiple projects including those through university,
  personal projects and full time work.`
  const aboutText3 = ``

  return (
    <Box>
      <Grid container spacing={4}>
        <Grid item>
          <Box
            sx={{
              p: 4,
              bgcolor: 'background.default',
              display: 'grid',
              gridTemplateColumns: { md: '2fr 1fr' },
              gap: 4,
              textAlign: 'center',
              alignSelf: 'center',
              paddingLeft: '250px',
              paddingRight: '250px'
            }}
          >
            <Item elevation={18}>
              <Typography variant='h4'>About me</Typography>
              <Box mt={4} />
              {aboutText1} <Box mt={4} />
              {aboutText2} <Box mt={4} />
              {aboutText3}
            </Item>
            <Item elevation={18}>
              <img
                style={{
                  height: 'auto',
                  width: '100%',
                  display: 'block',
                  textAlign: 'center'
                }}
                src={portrait}
                alt='Portrait'
              />
            </Item>
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}
