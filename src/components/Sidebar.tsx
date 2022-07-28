import ListAltOutlinedIcon from '@mui/icons-material/ListAltOutlined'
import PostAddOutlinedIcon from '@mui/icons-material/PostAddOutlined'
import { Box, Grid } from '@mui/material'
import Logo from './Logo'
import MenuItem from './MenuItem'

const Sidebar = () => (
  <Box sx={{ height: '100vh', bgcolor: '#444' }}>
    <Grid xs={12}>
      <Logo />
    </Grid>
    <Grid xs={12}>
      <MenuItem text="Lists" icon={<ListAltOutlinedIcon />} href="/" />
      <MenuItem text="New" icon={<PostAddOutlinedIcon />} href="/new" />
    </Grid>
  </Box>
)

export default Sidebar
