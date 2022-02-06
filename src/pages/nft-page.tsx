import { Box, Paper, styled, Typography, TextField, Grid, Button, CircularProgress } from '@mui/material'
import { useEffect, useState } from 'react'

const defaultWallet =
  'erd13hut86p4hv6ht0zwd9fs8m3pe0uazgfn9eflfg55zqt8t2t254rq0fqdpa'

interface NFTMedia {
  url: string
  fileSize: number
  fileType: string
  originalUrl: string
  thumbnailUrl: string
}

interface ElrondNFT {
  identifier: string
  collection: string
  attributes: string
  nonce: number
  type: string
  name: string
  creator: string
  royalties: number
  uris: string[]
  url: string
  media: NFTMedia[]
  isWhiteListedStorage: boolean
  metadata: {}
  ticker: string
}

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  textAlign: 'center',
  color: theme.palette.text.secondary,
  lineHeight: '20px',
  padding: '50px',
  paddingTop: ''
}))

const NFTContainer = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  textAlign: 'center',
  color: theme.palette.text.secondary,
  padding: '10px',
  paddingTop: '',
  maxWidth: '20vw',
  margin: '10px'
}))

const NFTComponent = ({ nft }: { nft: ElrondNFT }) => (
  <NFTContainer>
    <img src={nft.url} alt={nft.name} width='100%' />
    <Typography
      variant='h1'
      sx={{
        fontFamily: 'Lato',
        fontWeight: 'bolder',
        fontSize: 24
      }}
    >
      {nft.name}
    </Typography>
  </NFTContainer>
)

export const NFTPage = () => {
  const [wallet, setWallet] = useState(defaultWallet)
  const [loaded, setLoaded] = useState(false)
  const [nftData, setNftData] = useState<ElrondNFT[]>([])

  useEffect(() => {
    const fetchData = async () => {
      await fetch(`https://api.elrond.com/accounts/${wallet}/nfts`).then(
        async (response) => {
          const json = await response.json()
          setNftData(json as ElrondNFT[])
          setLoaded(true)
        }
      )
    }
    fetchData()
  }, [])

  return (
    <>
      <Box sx={{ bgcolor: 'background.default' }}>
        <Box mt={8} />
        <Box
          sx={{
            p: 4,
            margin: 'auto',
            maxWidth: '1400px'
          }}
        >
          <Item elevation={18}>
            <Typography variant='h4'>Elrond NFTS</Typography>
            <Typography
              variant='body1'
              sx={{
                fontFamily: 'Lato',
                fontWeight: 'bolder',
                fontSize: 18
              }}
            >
              Retrieved using the Elrond API at api.elrond.com
            </Typography>
            <Box mt={4} />
            <TextField
              id='outlined-search'
              label='Elrond Wallet'
              type='search'
              disabled
              defaultValue={defaultWallet}
              size='small'
              sx={{
                width: '35vw'
              }}
            /> <Button></Button>
            <Box mt={4} />

            {loaded ? (
              <Grid container>
                {nftData.map((nft) => (
                  <Grid item key={nft.identifier}>
                    <NFTComponent nft={nft} />
                  </Grid>
                ))}
              </Grid>
            ) : (
              <CircularProgress color='secondary'/>
            )}
          </Item>
        </Box>
      </Box>
    </>
  )
}
