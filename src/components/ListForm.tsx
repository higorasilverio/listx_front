import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined'
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined'
import {
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  styled,
  TextField,
} from '@mui/material'
import { useFormik } from 'formik'
import { useCallback, useState } from 'react'
import * as yup from 'yup'
import IconButton from './IconButton'
import { Item } from '../types/Item'
import { ItemUnit } from '../types/ItemUnit'
import { Box } from '@mui/system'
import { isEmpty } from 'lodash'

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
  description: yup.string(),
  quantity: yup.string(),
  unit: yup.string(),
})

const SELECT_OPTIONS = [
  '-',
  'Unit',
  'Kilogram',
  'Gram',
  'Package',
  'Liter',
  'Tablet',
]

const ListForm = () => {
  const [listItems, setListItems] = useState<Item[]>([])

  const formik = useFormik({
    initialValues: {
      name: '',
      description: '',
      quantity: '',
      unit: '',
    },
    validationSchema: validationSchema,
    onSubmit: values => {
      alert(JSON.stringify(values))
    },
  })

  const addListItem = useCallback(() => {
    const {
      description,
      quantity: unitQuantity,
      unit: unitValue,
    } = formik.values

    const id = listItems.length
    const quantity = +unitQuantity
    const unit: ItemUnit =
      ItemUnit[unitValue.toUpperCase()] ?? ItemUnit['OTHER']
    const item: Item = { id, description, quantity, unit }

    setListItems(previousList => previousList.concat([item]))

    formik.setFieldValue('description', '')
    formik.setFieldValue('quantity', '')
    formik.setFieldValue('unit', '')
    alert(JSON.stringify(item))
  }, [formik.values, listItems, setListItems])

  const renderListAdded = useCallback(() => {
    if (isEmpty(listItems)) return <></>

    return (
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column-reverse',
          boxShadow: '5px 5px 10px #aaa',
          borderRadius: '0.5rem',
        }}
      >
        {listItems.map(item => (
          <Box
            key={item.id}
            sx={{
              width: '100%',
              display: 'flex',
              justifyContent: 'space-around',
              alignItems: 'center',
              padding: '0.2rem 0.75rem',
            }}
          >
            <span>{item.quantity} x</span>
            <span>{item.unit}</span>
            <span>{item.description}</span>
            <IconButton color="error" styleColor="#d32f2f" onClick={() => {}}>
              <DeleteOutlinedIcon sx={{ color: '#fff' }} />
            </IconButton>
          </Box>
        ))}
      </Box>
    )
  }, [listItems])

  return (
    <Wrapper>
      <FormWrapper onSubmit={formik.handleSubmit}>
        <Grid container spacing={5}>
          <Grid item xs={5}>
            <TextField
              id="name"
              name="name"
              label="List name"
              variant="standard"
              size="small"
              value={formik.values.name}
              onChange={formik.handleChange}
              fullWidth
              error={formik.touched.name && Boolean(formik.errors.name)}
            />
          </Grid>
        </Grid>
        <Grid container spacing={5} paddingTop={3}>
          <Grid item xs={7}>
            <TextField
              sx={{ marginTop: '3px' }}
              id="description"
              name="description"
              label="Item description"
              variant="standard"
              size="small"
              value={formik.values.description}
              onChange={formik.handleChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={2}>
            <TextField
              sx={{ marginTop: '3px' }}
              id="quantity"
              name="quantity"
              label="Item quantity"
              type="number"
              variant="standard"
              size="small"
              value={formik.values.quantity}
              onChange={formik.handleChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={2}>
            <FormControl variant="standard" sx={{ width: '100%' }}>
              <InputLabel id="demo-simple-select-standard-label">
                Item unit
              </InputLabel>
              <Select
                labelId="demo-simple-select-standard-label"
                id="unit"
                name="unit"
                value={formik.values.unit}
                onChange={formik.handleChange}
                label="Age"
              >
                {SELECT_OPTIONS.map(option => (
                  <MenuItem value={option}>{option}</MenuItem>
                ))}
              </Select>
            </FormControl>
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

        <Grid container spacing={5} paddingTop={3}>
          <Grid item xs={12}>
            {renderListAdded()}
          </Grid>
        </Grid>

        <Grid container spacing={5} paddingTop={3}>
          <Grid item xs={2}>
            <Button color="primary" variant="contained" type="submit">
              Create
            </Button>
          </Grid>
        </Grid>
      </FormWrapper>
    </Wrapper>
  )
}

export default ListForm
