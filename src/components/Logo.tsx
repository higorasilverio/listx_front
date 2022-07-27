import LocalGroceryStoreOutlinedIcon from '@mui/icons-material/LocalGroceryStoreOutlined'
import { Avatar } from '@mui/material'
import { styled } from '@mui/system'

const Wrapper = styled('div')({
  height: '10vh',
  backgroundColor: '#474747',
  display: 'grid',
  placeItems: 'center',
})

const Logo = () => {
  return (
    <Wrapper>
      <Avatar>
        <LocalGroceryStoreOutlinedIcon sx={{ color: '#454545' }} />
      </Avatar>
    </Wrapper>
  )
}

export default Logo
