import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined'
import EditOutlinedIcon from '@mui/icons-material/EditOutlined'
import LocalGroceryStoreOutlinedIcon from '@mui/icons-material/LocalGroceryStoreOutlined'
import { Badge, Box, Grid, Paper, styled, Typography } from '@mui/material'
import { keyframes } from '@mui/system'
import Link from 'next/link'
import IconButton from '../components/IconButton'

const highlight = keyframes`
  from {
    margin: 0.35rem 0.4rem 0.15rem;
  }
  to {
    margin: 0.35rem 0.15rem 0.15rem;
  }
`

const fade = keyframes`
  from {
    margin: 0.35rem 0.15rem 0.15rem;
  }
  to {
    margin: 0.35rem 0.4rem 0.15rem;
  }
`

const Wrapper = styled(Paper)({
  padding: '0.2rem 0.75rem',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  animation: `${fade} 0.25s ease`,
  animationFillMode: 'forwards',
  cursor: 'pointer',
  '&:hover': {
    animation: `${highlight} 0.5s ease`,
    animationFillMode: 'forwards',
  },
})

const InfoWrapper = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
})

const ListUnit = ({
  listName,
  itemCount,
}: {
  listName: string
  itemCount: number
}) => {
  return (
    <Link href="/" passHref>
      <Wrapper elevation={3}>
        <InfoWrapper>
          <Box sx={{ minWidth: '5rem' }}>
            <Badge badgeContent={itemCount} color="warning">
              <LocalGroceryStoreOutlinedIcon />
            </Badge>
          </Box>
          <Typography variant="h6">{listName}</Typography>
        </InfoWrapper>
        <Grid>
          <IconButton color="info" styleColor="#0288d1">
            <EditOutlinedIcon sx={{ color: '#fff' }} />
          </IconButton>
          <IconButton color="error" styleColor="#d32f2f">
            <DeleteOutlinedIcon sx={{ color: '#fff' }} />
          </IconButton>
        </Grid>
      </Wrapper>
    </Link>
  )
}

export default ListUnit
