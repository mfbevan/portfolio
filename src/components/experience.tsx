import { Box, Paper, Grid, styled, Typography } from '@mui/material'

type ExperienceType = {
  title: string
  subtitle: string
  desc: string
}

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  textAlign: 'center',
  color: theme.palette.text.secondary,
  lineHeight: '20px',
  padding: '50px'
}))

const ExperienceCard = ({ title, subtitle, desc }: ExperienceType) => {
  return (
    <Grid item>
      <Item elevation={24}>
        <Box
          sx={{
            textAlign: 'left',
            width: '100%'
          }}
        >
          <Typography variant='h5'>{title}</Typography>
          <Typography variant='subtitle1' sx={{ fontStyle: 'italic' }}>
            -- {subtitle}
          </Typography>
          <Typography variant='body1'>{desc}</Typography>
        </Box>
      </Item>{' '}
    </Grid>
  )
}

export const Experience = () => {
  const aboutText1 = `My name is Matthew Bevan. I am a software developer with a passion for programming and problem solving.
  Since graduating a Bachelor of Computer Science from Queensland University of Technology and working as a full-time
  developer I have gained experience to many useful and current technologies as well as exposure to best practices
  across the full-stack.`

  return (
    <Box>
      <Box
        sx={{
          p: 4,
          bgcolor: 'background.default',
          display: 'grid',
          gap: 4,
          textAlign: 'center',
          alignSelf: 'center',
          paddingLeft: '250px',
          paddingRight: '250px',
          paddingTop: 0
        }}
      >
        <Item elevation={18}>
          <Typography variant='h4'>Experience</Typography>
          <Box mt={4} />
          <Grid container spacing={4} alignItems='stretch'>
            {[
              {
                title: 'Optizmo Technologies, LLC',
                subtitle: 'Full-Stack Developer (July 2021 - NOW)',
                desc: 'this was a job where I do things'
              },
              {
                title: `Hogan's Wellington Point Hotel`,
                subtitle: 'Duty Manager (2018 - 2021)',
                desc: `Bar management, financial management, event planning, overseeing
              of daily operations, administration, security, customer service, excel‐
              lent time management & communication, conflict resolution skills`
              }
            ].map((e) => (
              <ExperienceCard {...e} />
            ))}
          </Grid>
        </Item>
      </Box>
    </Box>
  )
}
