import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined'
import {
  Button,
  Grid,
  Paper,
  styled,
  TextField,
  Typography,
} from '@mui/material'
import { useFormik } from 'formik'
import type { NextPage } from 'next'
import { useCallback, useState } from 'react'
import * as yup from 'yup'
import IconButton from '../../components/IconButton'
import { Item } from '../../types/Item'
import { ItemUnit } from '../../types/ItemUnit'

const Wrapper = styled(Paper)({
  padding: '1rem 0.75rem',
  margin: '0.35rem 0.15rem',
  display: 'flex',
})

const FormWrapper = styled('form')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  width: '100%',
})

const validationSchema = yup.object({
  name: yup.string().required('List name is required'),
  description: yup.string().required('List name is required'),
  quantity: yup.number(),
  unit: yup.string(),
})

const New: NextPage = () => {
  const [listItems, setListItems] = useState<Item[]>([])

  const formik = useFormik({
    initialValues: {
      name: '',
      description: '',
      quantity: 0,
      unit: '-',
    },
    validationSchema: validationSchema,
    onSubmit: values => {
      console.log(JSON.stringify(values))
    },
  })

  const addListItem = useCallback(() => {
    const { description, quantity, unit: unitValue } = formik.values

    const id = listItems.length
    const unit: ItemUnit =
      ItemUnit[unitValue.toUpperCase()] ?? ItemUnit['OTHER']
    const item: Item = { id, description, quantity, unit }

    setListItems(previousList => previousList.concat([item]))

    formik.setFieldValue('description', '')
    formik.setFieldValue('quantity', 0)
    formik.setFieldValue('unit', '-')
  }, [formik.values, listItems, setListItems])

  return (
    <Wrapper elevation={3}>
      <FormWrapper onSubmit={formik.handleSubmit}>
        <Grid container spacing={1}>
          <Grid item xs={7}>
            <TextField
              id="name"
              name="name"
              label="List Name"
              value={formik.values.name}
              onChange={formik.handleChange}
              fullWidth
              error={formik.touched.name && Boolean(formik.errors.name)}
              helperText={formik.touched.name && formik.errors.name}
            />
          </Grid>
        </Grid>
        <Typography variant="h6">Add Items:</Typography>
        <Grid container spacing={1}>
          <Grid item xs={7}>
            <TextField
              id="description"
              name="description"
              label="Description"
              value={formik.values.description}
              onChange={formik.handleChange}
              fullWidth
              error={
                formik.touched.description && Boolean(formik.errors.description)
              }
              helperText={
                formik.touched.description && formik.errors.description
              }
            />
          </Grid>
          <Grid item xs={2}>
            <TextField
              id="quantity"
              name="quantity"
              label="Quantity"
              type="number"
              value={formik.values.quantity}
              onChange={formik.handleChange}
              fullWidth
              error={formik.touched.quantity && Boolean(formik.errors.quantity)}
              helperText={formik.touched.quantity && formik.errors.quantity}
            />
          </Grid>
          <Grid item xs={2}>
            <TextField
              id="unit"
              name="unit"
              label="Unit"
              value={formik.values.unit}
              onChange={formik.handleChange}
              fullWidth
              error={formik.touched.unit && Boolean(formik.errors.unit)}
              helperText={formik.touched.unit && formik.errors.unit}
            />
          </Grid>
          <Grid
            item
            xs={1}
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <IconButton
              color="success"
              styleColor="#2e7d32"
              onClick={() => addListItem()}
            >
              <CheckOutlinedIcon sx={{ color: '#fff' }} />
            </IconButton>
          </Grid>
        </Grid>
        <Typography variant="h6">Items:</Typography>
        {listItems.length ? (
          <div>
            {listItems.map(item => (
              <div key={item.id}>
                <span>{item.description}</span>
                <span>{item.quantity}</span>
                <span>{item.unit}</span>
              </div>
            ))}
          </div>
        ) : null}
        <Button color="primary" variant="contained" type="submit">
          Create
        </Button>
      </FormWrapper>
    </Wrapper>
  )
}

export default New
