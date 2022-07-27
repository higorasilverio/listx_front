import ListAltOutlinedIcon from '@mui/icons-material/ListAltOutlined'
import PostAddOutlinedIcon from '@mui/icons-material/PostAddOutlined'
import { Box, Grid } from '@mui/material'
import { useRouter } from 'next/router'
import { useCallback } from 'react'
import Logo from './Logo'
import MenuItem from './MenuItem'

const Sidebar = () => {
  const router = useRouter()

  const goHome = useCallback(() => router.push('/'), [router])

  return (
    <Box sx={{ height: '100vh', bgcolor: '#444' }}>
      <Grid xs={12}>
        <Logo />
      </Grid>
      <Grid xs={12}>
        <MenuItem
          text="Lists"
          icon={<ListAltOutlinedIcon />}
          onClick={goHome}
        />
        <MenuItem
          text="New"
          icon={<PostAddOutlinedIcon />}
          onClick={() => console.log('New')}
        />
      </Grid>
    </Box>
  )
}

export default Sidebar
