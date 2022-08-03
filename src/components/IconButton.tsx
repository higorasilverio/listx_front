import { IconButton as MUIconButton, styled } from '@mui/material'
import { MouseEventHandler, ReactNode } from 'react'

type IconButtonProps = {
  color:
    | 'inherit'
    | 'default'
    | 'error'
    | 'primary'
    | 'secondary'
    | 'info'
    | 'success'
    | 'warning'
    | undefined
  styleColor: string
  children: ReactNode
  onClick: MouseEventHandler<HTMLButtonElement>
}

const IconButton = ({
  color,
  styleColor,
  children,
  onClick,
}: IconButtonProps) => {
  const Wrapper = styled(MUIconButton)({
    border: `1px solid ${styleColor}`,
    backgroundColor: styleColor,
    width: '2.5rem',
    height: '2.5rem',
    borderRadius: '50%',
    marginLeft: '0.75rem',
    '&:hover': {
      svg: { fill: styleColor },
    },
  })

  return (
    <Wrapper onClick={onClick} color={color}>
      {children}
    </Wrapper>
  )
}

export default IconButton
