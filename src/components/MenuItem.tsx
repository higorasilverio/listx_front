import { styled } from '@mui/system'
import { memo, MouseEventHandler, ReactNode } from 'react'

type MenuItemProps = {
  text: string
  icon: ReactNode
  onClick: MouseEventHandler<HTMLDivElement>
}

const Item = styled('div')({
  width: '100%',
  height: '10vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  '&:hover': {
    background: '#3e3e3e',
  },
  '& > span': {
    marginLeft: '5px',
  },
})

const MenuItem = memo(({ text, icon, onClick }: MenuItemProps) => {
  return (
    <Item onClick={onClick}>
      <>{icon}</>
      <span>{text}</span>
    </Item>
  )
})

export default MenuItem
