import { Grid, TextField } from '@mui/material'
import { useFormikContext, Form } from 'formik'

const FormListName = () => {
  const { values, handleChange, touched, errors } = useFormikContext<any>()

  return (
    <Grid container spacing={5}>
      <Grid item xs={5}>
        <TextField
          id="name"
          name="name"
          label="List name"
          variant="standard"
          size="small"
          value={values.name}
          onChange={handleChange}
          fullWidth
          error={touched.name && Boolean(errors.name)}
        />
      </Grid>
    </Grid>
  )
}

export default FormListName
