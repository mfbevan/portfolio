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
  PlayStoreLogo,
  MUILogo,
  InvestmentLogo,
  SolanaLogo,
  EthereumLogo,
  BitcoinLogo,
  DockerLogo,
  CloudflareLogo,
  SolidityLogo
} from './logos'

type ExperienceType = {
  title: string
  subtitle: string
  desc: string
  icons: JSX.Element[]
}

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  textAlign: 'center',
  color: theme.palette.text.secondary,
  lineHeight: '20px',
  padding: '50px'
}))

const ExperienceCard = ({ title, subtitle, desc, icons }: ExperienceType) => {
  return (
    <Grid item>
      <Item elevation={4}>
        <Box
          sx={{
            textAlign: 'left',
            width: '100%'
          }}
        >
          <Typography
            variant='h5'
            sx={{ fontFamily: 'Lato', fontWeight: 'bolder' }}
          >
            {title}
          </Typography>
          <Box mt={2} />
          <Typography
            variant='subtitle1'
            sx={{
              fontStyle: 'italic',
              fontFamily: 'Lato',
              fontWeight: 'bolder'
            }}
          >
            -- {subtitle}
          </Typography>
          <Box mt={1} />
          {icons.map((icon) => (
            <> {icon} </>
          ))}
          <Box mt={1} />
          <Typography
            variant='body1'
            sx={{ fontFamily: 'Lato', fontWeight: 'bolder', fontSize: 18 }}
          >
            {desc}
          </Typography>
        </Box>
      </Item>{' '}
    </Grid>
  )
}

export const Experience = () => {
  return (
    <Box id='experience' >
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
          <Typography variant='h4'>Experience</Typography>
          <Typography
            variant='h5'
            align='left'
            sx={{ fontFamily: 'Lato', fontWeight: 'bolder' }}
          >
            Employment History
          </Typography>
          <Box mt={4} />
          <Grid container spacing={4} alignItems='stretch'>
            {[
              {
                title: 'Optizmo Technologies, LLC',
                subtitle: 'Full-Stack Developer (July 2021 - NOW)',
                desc: `Completing tasks across the Full Stack including Typescript React development on the Frontend, a Typescript Node.js backend,
                      Terraform infrastructure as code, and PostgreSQL databases where I also gained experience in CI/CD pipelines and Test-Driven Development and Behaviour-Driven Development. 
                      This job took place in an Agile environment with daily standups,
                      weekly task grooming sessions and fulfilling a number of rotating roles each sprint. This included many positions including Sprint Boss (Scrum Master), 
                      Tech Support (replying to client queries and concerns and raising bugs appropriately),
                      Alarms Monitoring (monitoring our deployed services) and Sprint Review (managing a bi-weekly sprint review to assess progress).`,
                icons: [
                  <ReactLogo />,
                  <TypescriptLogo />,
                  <TerraformLogo />,
                  <NodeLogo />,
                  <GitlabLogo />,
                  <JiraLogo />,
                  <PostgresLogo />,
                  <AWSLogo />,
                  <AzureLogo />,
                  <MUILogo />,
                  <DockerLogo />,
                  <CloudflareLogo />
                ]
              },
              {
                title: `Hogan's Wellington Point Hotel`,
                subtitle: 'Duty Manager (2018 - 2021)',
                desc: `Bar management, financial management, event planning, overseeing
              of daily operations, administration, security, customer service, excellent time management & communication, conflict resolution skills`,
                icons: []
              }
            ].map((e) => (
              <ExperienceCard {...e} />
            ))}
          </Grid>
          <Box m={4} id='projects' />
          <Typography
            variant='h5'
            align='left'
            sx={{ fontFamily: 'Lato', fontWeight: 'bolder' }}
          >
            Projects
          </Typography>
          <Box mt={4} />
          <Grid container spacing={4} alignItems='stretch'>
            {[
              {
                title: 'Foundation Society',
                subtitle:
                  'Full-Stack Development - University Capstone Project for a Non-For-Profit (March 2021 - November 2021)',
                desc: `For my final year Capstone Project, myself and a 3 like-minded developers set out to create a Competition Portal for the Australian Space Design Competition (ASDC),
                a competition for secondary school students with a passion for space. The portal that we developed allowed students
                to sign up to the competition, for teachers to manager their teams, and for the competition staff to manage student and team data, including generating reports for accomodation, team submissions, 
                and contact information. We also developed a submissions portal using AWS S3 where competition staff could create a new deliverable, to which individual students or teams could make submissions
                such as sign-up forms, and their final reports for the competition. The technologies I was exposed to in this project included a React Frontend, MariaDB database and AWS SAM Serverless API
                written in Python, where we used AWS Lambda to create a scalable serverless infrastructure that was low cost for the ASDC.`,
                icons: [
                  <ReactLogo />,
                  <NodeLogo />,
                  <GithubLogo />,
                  <JiraLogo />,
                  <PythonLogo />,
                  <AWSLogo />,
                  <MariaDbLogo />,
                  <MUILogo />
                ]
              },
              {
                title: 'Crypto',
                subtitle: `Ongoing Investment and Learning`,
                desc: `I have recently begun researching market techincal analysis to inform day trading of cryptocurrencies on the Binance exchange. Recent
                endeavours have proven successful in an effort to provide myself with an additional income stream and I hope to continue this going forward.
                This is backed by a huge interest in the crypto sector as a whole with the general goal being to find a permanent position in a crypto-related project.
                To further this, I am currently learning Solidity and Web3.js in spare time.`,
                icons: [
                  <InvestmentLogo />,
                  <SolanaLogo />,
                  <BitcoinLogo />,
                  <EthereumLogo />,
                  <SolidityLogo />
                ]
              },
              {
                title: 'Portfolio',
                subtitle: `What you're seeing right now!`,
                desc: `This site was created using Typescript and React. A combination of Material UI and custom components have been used. 
                The site is stored in a Github Repo and served up using CloudFlare Pages on a custom domain, with an automatic deploy pipeline when a push to master is made.
                Try out Dark Mode in the Navbar!
                The icons on this page are from Icons8.com`,
                icons: [<ReactLogo />, <GithubLogo />, <MUILogo />]
              },
              {
                title: 'Infinity Qube',
                subtitle: 'Full-Stack Game Project (Dec 2021 - NOW)',
                desc: `My current personal project, Infinity Qube is a game currently still in early development. The game itself is developed in Unity using C#, 
                and served up to the web using WebGL on a React Typescript site hosted on Cloudflare Pages. To interface between the game and website, a Node Express API backend has been
                created with a PostgreSQL database for storage hosted on AWS`,
                icons: [
                  <UnityLogo />,
                  <GithubLogo />,
                  <NodeLogo />,
                  <PostgresLogo />,
                  <AWSLogo />,
                  <CSharpLogo />,
                  <DockerLogo />,
                  <CloudflareLogo />
                ]
              },
              {
                title: 'Bit Jump',
                subtitle: 'Personal Game Project (May 2020)',
                desc: `A personal project to get a feel for the process of developing a game, right through to releasing it on the Google Play Store. Whilst the plan was never to create a hit game
                for mobile, this project gave me a lot of experience in developing for Android devices, optimizing the mobile experience, and the specifics of deploying an application to a mobile environment.
                Click the Play Store icon above to view the game`,
                icons: [
                  <UnityLogo />,
                  <AndroidLogo />,
                  <CSharpLogo />,
                  <a
                    href='https://play.google.com/store/apps/details?id=com.RationalBitStudios.BitJump'
                    target='_blank'
                  >
                    <PlayStoreLogo />
                  </a>
                ]
              }
            ].map((e) => (
              <ExperienceCard {...e} />
            ))}
          </Grid>
          <Box mt={4} id='education' />
          <Typography
            variant='h5'
            align='left'
            sx={{ fontFamily: 'Lato', fontWeight: 'bolder' }}
          >
            Education
          </Typography>
          <Box mt={4} />
          <Grid container spacing={4} alignItems='stretch'>
            {[
              {
                title: 'Bachelor Information Technology - Computer Science',
                subtitle:
                  'Queensland University Technology (2018-2021) GPA 6.81',
                desc: `Building IT Systems, Database Management, Impact of IT, Computer Technology Fundamentals, Programming Principles,
                IT Systems Design, Information Security, Networks, Discrete Structures, Software Development, Cloud Computing,
                IT Project Management, Algorithms and Complexity, Cryptography, Systems Programming,
                Energy in Engineering, Sustainability and Professional Practice, Engineering Computation, Microprocessors and Digital Systems,
                Engineering Design, Engineering Mechanics, Electrical Engineering Foundations, Signals Analysis, Linear Algebra, Dynamics, Control and
                Dynamic Systems, Dynamics of Machines, Mechatronics Design`,
                icons: []
              }
              // {
              //   title: 'Bachelor Engineering - Mechatronics',
              //   subtitle:
              //     'Queensland University Technology (2018-NOW) GPA 6.81',
              //   desc: `Energy in Engineering, Sustainability and Professional Practice, Engineering Computation, Microprocessors and Digital Systems,
              //   Engineering Design, Engineering Mechanics, Electrical Engineering Foundations, Signals Analysis, Linear Algebra, Dynamics, Control and
              //   Dynamic Systems, Dynamics of Machines, Mechatronics Design`,
              //   icons: []
              // }
            ].map((e) => (
              <ExperienceCard {...e} />
            ))}
          </Grid>
        </Item>
      </Box>
    </Box>
  )
}
