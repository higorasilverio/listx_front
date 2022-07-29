import PostAddOutlinedIcon from '@mui/icons-material/PostAddOutlined'
import { Box, Button, styled, Typography } from '@mui/material'
import Link from 'next/link'

const Wrapper = styled(Box)({
  width: '100%',
  height: '90vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '10px',
})

const EmptyList = () => {
  return (
    <Wrapper>
      <Typography variant="h6" gutterBottom component="div">
        No lists found...
      </Typography>
      <Link href="/new" passHref>
        <Button
          size="large"
          variant="contained"
          endIcon={<PostAddOutlinedIcon />}
          sx={{ minWidth: '10rem' }}
        >
          New
        </Button>
      </Link>
    </Wrapper>
  )
}

export default EmptyList
