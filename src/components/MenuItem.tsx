import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined'
import { styled } from '@mui/system'
import Link from 'next/link'
import { NextRouter, useRouter } from 'next/router'
import { memo, ReactNode } from 'react'

type MenuItemProps = {
  text: string
  icon: ReactNode
  href: string
}

const Item = styled('div')({
  width: '100%',
  height: '10vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  '&:hover': {
    backgroundColor: '#353535 !important',
  },
})

const Wrapper = styled('div')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  '& > span': {
    marginLeft: '15px',
  },
})

const MenuItem = memo(({ text, icon, href }: MenuItemProps) => {
  const router: NextRouter = useRouter()

  const active: boolean = router.pathname === href

  return (
    <Link href={href} passHref>
      <Item sx={{ bgcolor: active ? '#3a3a3a' : '#444' }}>
        <Wrapper style={{ width: '80%' }}>
          {icon}
          <span>{text}</span>
        </Wrapper>
        <Wrapper style={{ width: '20%' }}>
          {active && (
            <ArrowForwardIosOutlinedIcon sx={{ fontSize: '0.75rem' }} />
          )}
        </Wrapper>
      </Item>
    </Link>
  )
})

export default MenuItem
