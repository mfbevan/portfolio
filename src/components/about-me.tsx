/* eslint-disable react/jsx-no-target-blank */
import { Box, Paper, Grid, styled, Typography } from '@mui/material'
import portrait from '../images/matthew_bevan_square.jpg'
import { LinkedInLogo } from './logos'

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
  Since completing a Bachelor of Computer Science from Queensland University of Technology and working as a full-time
  developer I have gained experience in many useful and current technologies as well as exposure to best practices
  across the full-stack.`

  const aboutText2 = `My hobbies and passions outside of work include playing and making video games (see some of my projects below), crypto, photography, robotics projects and graphic design. 
  I love keeping busy and constantly pick up new technologies and applications to try my hand at (currently Solidity and Web3.js), with previous experience across the Adobe Create Cloud suite
  (Photoshop, Illustrator, Lightroom), Unity3D Game Development, Autodesk Inventor and Fusion 360. Below you will see an outline of my experience across multiple projects including those through university,
  personal projects and full time work.`
  const aboutText3 = `Feel free to contact me on LinkedIn.`

  return (
    <Box id='about-me'>
      <Box
        sx={{
          p: 4,
          margin: 'auto',
          maxWidth: '1400px'
        }}
      >
        <Grid container>
          <Grid item>
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: { md: '2fr 1fr' },
                gap: 4,
                textAlign: 'center',
                alignSelf: 'center'
              }}
            >
              <Item elevation={18}>
                <Typography variant='h4'>About me</Typography>
                <Box mt={4} />
                <Typography
                  variant='body1'
                  sx={{
                    fontFamily: 'Lato',
                    fontWeight: 'bolder',
                    fontSize: 18
                  }}
                >
                  {aboutText1}
                </Typography>{' '}
                <Box mt={4} />
                <Typography
                  variant='body1'
                  sx={{
                    fontFamily: 'Lato',
                    fontWeight: 'bolder',
                    fontSize: 18
                  }}
                >
                  {aboutText2}
                </Typography>{' '}
                <Box mt={4} />
                <Typography
                  variant='body1'
                  sx={{
                    fontFamily: 'Lato',
                    fontWeight: 'bolder',
                    fontSize: 18
                  }}
                >
                  {aboutText3}
                </Typography>
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
                <Box mt={4} />
                <a href='https://www.linkedin.com/in/mfbevan/' target='_blank'>
                  <LinkedInLogo />
                </a>
                {/* <Box sx={{display: 'inline', marginRight: 4}} />
              <a href='https://github.com/rationalbitstudios' target='_blank'>
                <GithubLogo64 />
              </a>
              <Box sx={{display: 'inline', marginRight: 4}} />
              <a href='https://github.com/matthewbevan00' target='_blank'>
                <GithubLogo64 />
              </a> */}
              </Item>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  )
}
