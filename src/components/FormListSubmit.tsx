import { Button, Grid } from '@mui/material'

const FormListSubmit = () => {
  return (
    <Grid container spacing={5} paddingTop={3}>
      <Grid item xs={2}>
        <Button color="primary" variant="contained" type="submit">
          Create
        </Button>
      </Grid>
    </Grid>
  )
}

export default FormListSubmit
