import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined'
import EditOutlinedIcon from '@mui/icons-material/EditOutlined'
import { Grid, Paper, styled, Typography } from '@mui/material'
import IconButton from '../components/IconButton'

const Wrapper = styled(Paper)({
  margin: '0.4rem 0.4rem 0.2rem',
  padding: '0.25rem 0.75rem',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
})

const ListUnit = ({ listName }: { listName: string }) => {
  return (
    <Wrapper elevation={3}>
      <Typography variant="h6" component="div">
        {listName}
      </Typography>
      <Grid>
        <IconButton color="info" styleColor="#0288d1">
          <EditOutlinedIcon sx={{ color: '#fff' }} />
        </IconButton>
        <IconButton color="error" styleColor="#d32f2f">
          <DeleteOutlinedIcon sx={{ color: '#fff' }} />
        </IconButton>
      </Grid>
    </Wrapper>
  )
}

export default ListUnit
