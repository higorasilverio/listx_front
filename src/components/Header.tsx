import { Typography } from '@mui/material'
import { styled } from '@mui/system'

const Wrapper = styled('div')({
  height: '10vh',
  backgroundColor: '#444',
  padding: '2vh 25px',
})

const Header = () => {
  return (
    <Wrapper>
      <Typography variant="h4" component="div">
        Listx
      </Typography>
    </Wrapper>
  )
}

export default Header
