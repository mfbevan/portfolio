/* eslint-disable react/jsx-no-target-blank */
import { Box, Paper, Grid, styled, Typography } from '@mui/material'
import {
  ReactLogo,
  TypescriptLogo,
  TerraformLogo,
  NodeLogo,
  GitlabLogo,
  JiraLogo,
  GithubLogo,
  PostgresLogo,
  AWSLogo,
  AzureLogo,
  PythonLogo,
  MariaDbLogo,
  UnityLogo,
  AndroidLogo,
  CSharpLogo,
  MUILogo,
  DockerLogo,
  CloudflareLogo,
  WindowsLogo,
  MacOSLogo,
  LinuxLogo,
  HTMLLogo,
  CSSLogo,
  JavascriptLogo,
  ConfluenceLogo,
  MatlabLogo
} from './logos'

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  textAlign: 'center',
  color: theme.palette.text.secondary,
  lineHeight: '20px',
  padding: '50px'
}))

const SkillBox = styled(Paper)(({ theme }) => ({
  ...theme.typography.h4,
  textAlign: 'left',
  color: theme.palette.text.secondary,
  lineHeight: '20px',
  padding: '20px'
}))

export const Skills = () => {
  return (
    <Box id='skills'>
      <Box
        sx={{
          p: 4,
          bgcolor: 'background.default',
          display: 'grid',
          gap: 4,
          textAlign: 'center',
          alignSelf: 'center',
          margin: 'auto',
          maxWidth: '1400px',
          paddingTop: 0
        }}
      >
        <Item elevation={18}>
          <Typography variant='h4'>Skills</Typography>
          <Box mt={4} />
          <Grid container spacing={4}>
            <Grid item>
              <Box
                sx={{
                  bgcolor: 'background.default',
                  display: 'grid',
                  gridTemplateColumns: { md: '1fr 1fr' },
                  gap: 4,
                  width: '100%'
                }}
              >
                <Item elevation={4}>
                  <Typography
                    variant='h5'
                    align='left'
                    sx={{ fontFamily: 'Lato', fontWeight: 'bolder' }}
                  >
                    Languages
                  </Typography>
                  <Box mt={2} />
                  <SkillBox elevation={4}>
                    <Box
                      sx={{
                        textAlign: 'left',
                        width: '100%'
                      }}
                    >
                      <ReactLogo />
                      <HTMLLogo />
                      <CSSLogo />
                      <JavascriptLogo />
                      <TypescriptLogo />
                      <TerraformLogo />
                      <NodeLogo />
                      <PythonLogo />
                      <CSharpLogo />
                      <MatlabLogo />
                    </Box>
                  </SkillBox>
                  <Box mt={2} />
                  <Typography
                    variant='h5'
                    align='left'
                    sx={{ fontFamily: 'Lato', fontWeight: 'bolder' }}
                  >
                    Tools & Services
                  </Typography>
                  <Box mt={2} />
                  <SkillBox elevation={4}>
                    <Box
                      sx={{
                        textAlign: 'left',
                        width: '100%'
                      }}
                    >
                      <GitlabLogo />
                      <JiraLogo />
                      <ConfluenceLogo />
                      <GithubLogo />
                      <PostgresLogo />
                      <AWSLogo />
                      <AzureLogo />
                      <MariaDbLogo />
                      <UnityLogo />
                      <AndroidLogo />
                      <MUILogo />
                      <DockerLogo />
                      <CloudflareLogo />
                    </Box>
                  </SkillBox>
                  <Box mt={2} />
                  <Typography
                    variant='h5'
                    align='left'
                    sx={{ fontFamily: 'Lato', fontWeight: 'bolder' }}
                  >
                    Operating Systems
                  </Typography>
                  <Box mt={2} />
                  <SkillBox elevation={4}>
                    <Box
                      sx={{
                        textAlign: 'left',
                        width: '100%'
                      }}
                    >
                      <WindowsLogo />
                      <MacOSLogo />
                      <LinuxLogo />
                    </Box>
                  </SkillBox>{' '}
                </Item>
                <Item elevation={4}>
                  <Typography
                    variant='h5'
                    align='left'
                    sx={{ fontFamily: 'Lato', fontWeight: 'bolder' }}
                  >
                    Soft Skills
                  </Typography>
                  <Typography
                    variant='body1'
                    sx={{
                      fontFamily: 'Lato',
                      fontWeight: 'bolder',
                      textAlign: 'left',
                      fontSize: 18
                    }}
                  >
                    <ul>
                      <li>Management experience</li>
                      <li>Great written and verbal communication skills</li>
                      <li>Highly motivated with a positive attitude</li>
                      <li>Attention to detail</li>
                      <li>Highly reliable with a great work ethic</li>
                      <li>High personal standards</li>
                    </ul>
                  </Typography>
                  <Box mt={2} />

                  <Typography
                    variant='h5'
                    align='left'
                    sx={{ fontFamily: 'Lato', fontWeight: 'bolder' }}
                  >
                    Hard Skills
                  </Typography>
                  <Box mt={2} />
                  <Typography
                    variant='body1'
                    sx={{
                      fontFamily: 'Lato',
                      fontWeight: 'bolder',
                      textAlign: 'left',
                      fontSize: 18
                    }}
                  >
                  Highly proficient in Node & Typescript/Javascript for creating front and backend services and deploying them to the cloud through AWS.
                  I have particular experience in RESTful API development with AWS ECS workers for fast, scalable infrastructure.
                  Currently learning Solidity and Web3.js
                  </Typography>
                </Item>
              </Box>
            </Grid>
          </Grid>
          <Box mt={4} />
        </Item>
      </Box>
    </Box>
  )
}
