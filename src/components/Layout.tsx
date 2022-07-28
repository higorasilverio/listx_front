import { Box, Grid } from '@mui/material'
import Header from './Header'
import Sidebar from './Sidebar'

const Layout = ({ children }) => (
  <Box sx={{ minHeight: '100vh' }}>
    <Grid container>
      <Grid item xs={3} sm={2}>
        <Sidebar />
      </Grid>
      <Grid item xs={9} sm={10}>
        <Grid item xs={12}>
          <Header />
        </Grid>
        <Grid item xs={12}>
          {children}
        </Grid>
      </Grid>
    </Grid>
  </Box>
)

export default Layout
