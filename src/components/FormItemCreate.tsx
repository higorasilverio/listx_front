import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined'
import {
  FormControl,
  Grid,
  InputLabel,
  TextField,
  Select,
  MenuItem,
} from '@mui/material'
import { useFormikContext } from 'formik'
import { useCallback, useState } from 'react'
import { Item } from '../types/Item'
import { ItemUnit } from '../types/ItemUnit'
import IconButton from './IconButton'

const SELECT_OPTIONS = [
  '-',
  'Unit',
  'Kilogram',
  'Gram',
  'Package',
  'Liter',
  'Tablet',
]

const FormItemCreate = ({ listItems, setListItems }) => {
  const { values, handleChange, setFieldValue } = useFormikContext<any>()

  const addListItem = useCallback(() => {
    const { description, quantity: unitQuantity, unit: unitValue } = values

    const id = listItems.length
    const quantity = +unitQuantity
    const unit: ItemUnit =
      ItemUnit[unitValue.toUpperCase()] ?? ItemUnit['OTHER']
    const item: Item = { id, description, quantity, unit }

    setListItems(previousList => previousList.concat([item]))

    setFieldValue('description', '')
    setFieldValue('quantity', '')
    setFieldValue('unit', '')
  }, [listItems])

  return (
    <Grid container spacing={5} paddingTop={3}>
      <Grid item xs={7}>
        <TextField
          sx={{ marginTop: '3px' }}
          id="description"
          name="description"
          label="Item description"
          variant="standard"
          size="small"
          value={values.description}
          onChange={handleChange}
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
          value={values.quantity}
          onChange={handleChange}
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
            value={values.unit}
            onChange={handleChange}
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
  )
}

export default FormItemCreate
