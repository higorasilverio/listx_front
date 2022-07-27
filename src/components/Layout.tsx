import { Box, Grid } from '@mui/material'
import Header from './Header'
import Sidebar from './Sidebar'

const Layout = ({ children }) => (
  <Box sx={{ minHeight: '100vh' }}>
    <Grid container>
      <Grid xs={3} sm={2}>
        <Sidebar />
      </Grid>
      <Grid xs={9} sm={10}>
        <Grid xs={12}>
          <Header />
        </Grid>
        <Grid xs={12}>{children}</Grid>
      </Grid>
    </Grid>
  </Box>
)

export default Layout
