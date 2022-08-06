import { Box, Chip, Divider, Grid } from '@mui/material'
import { isEmpty } from 'lodash'
import { useCallback, useEffect, useRef } from 'react'
import IconButton from './IconButton'
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined'

const FormListItems = ({ listItems }) => {
  const myRef = useRef()

  useEffect(() => {
    if (myRef && listItems.length >= 5)
      (myRef.current as any).scrollIntoView({ behavior: 'smooth' })
  }, [listItems])

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
          maxHeight: '50vh',
          overflow: 'auto',
        }}
      >
        {listItems.map(item => {
          const { id, quantity, unit, description } = item

          return (
            <Box ref={myRef}>
              <Box
                key={id}
                sx={{
                  width: '100%',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '0.2rem 0.75rem',
                }}
              >
                <Box
                  sx={{ width: '100%', display: 'flex', alignItems: 'center' }}
                >
                  <Box sx={{ margin: '0 0.75rem 0 0.25rem' }}>
                    <Chip
                      label={`${quantity} x ${unit === 'OTHER' ? '' : unit} `}
                      color="warning"
                      variant="outlined"
                      sx={{ width: '8rem' }}
                    />
                  </Box>
                  <span>{description}</span>
                </Box>
                <IconButton
                  color="error"
                  styleColor="#d32f2f"
                  onClick={() => {}}
                >
                  <DeleteOutlinedIcon sx={{ color: '#fff' }} />
                </IconButton>
              </Box>
              <Divider />
            </Box>
          )
        })}
      </Box>
    )
  }, [listItems])

  return (
    <Grid container spacing={5} paddingTop={3}>
      <Grid item xs={12}>
        {renderListAdded()}
      </Grid>
    </Grid>
  )
}

export default FormListItems
