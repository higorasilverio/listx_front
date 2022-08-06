import { Paper, styled } from '@mui/material'
import { Form, Formik } from 'formik'
import { useCallback, useState } from 'react'
import * as yup from 'yup'
import { Item } from '../types/Item'
import FormListName from './FormListName'
import FormItemCreate from './FormItemCreate'
import FormListSubmit from './FormListSubmit'
import FormListItems from './FormListItems'

const Wrapper = styled(Paper)({
  padding: '1rem 0.75rem',
  margin: '0.35rem 0.15rem',
  display: 'flex',
})

const FormWrapper = styled(Form)({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  width: '100%',
})

const schema = yup.object({
  name: yup.string().required('List name is required'),
  description: yup.string(),
  quantity: yup.string(),
  unit: yup.string(),
})

const initial = { name: '', description: '', unit: '', quantiy: '' }

const onSubmit = values => {
  alert(JSON.stringify(values))
}

const ListForm = () => {
  const [listItems, setListItems] = useState<Item[]>([])

  return (
    <Wrapper>
      <Formik
        initialValues={initial}
        onSubmit={values => onSubmit(values)}
        validationSchema={schema}
      >
        <FormWrapper>
          <FormListName />
          <FormItemCreate listItems={listItems} setListItems={setListItems} />
          <FormListItems listItems={listItems} />
          <FormListSubmit />
        </FormWrapper>
      </Formik>
    </Wrapper>
  )
}

export default ListForm
