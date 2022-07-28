import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined'
import EditOutlinedIcon from '@mui/icons-material/EditOutlined'
import PostAddOutlinedIcon from '@mui/icons-material/PostAddOutlined'
import { Button, IconButton, Stack, Typography } from '@mui/material'
import type { NextPage } from 'next'
import Link from 'next/link'
import { useState } from 'react'

const Home: NextPage = () => {
  const [render] = useState<boolean>(true)

  const NoListComponent = (
    <div
      style={{
        width: '100%',
        height: '90vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '10px',
      }}
    >
      <Typography variant="h5" gutterBottom component="div">
        No lists found...
      </Typography>
      <div>
        <Link href="/new" passHref>
          <Button
            size="large"
            variant="contained"
            endIcon={<PostAddOutlinedIcon />}
            sx={{ minWidth: '10rem' }}
          >
            New
          </Button>
        </Link>
      </div>
    </div>
  )

  const ListUnit = (
    <Stack direction="row" spacing={2}>
      <span>name</span>
      <div>
        <IconButton
          color="info"
          sx={{
            border: '1px solid #0288d1',
            backgroundColor: '#0288d1',
            width: '3rem',
            borderRadius: '1.5rem',
            marginX: '0.5rem',
          }}
        >
          <EditOutlinedIcon sx={{ color: '#fff' }} />
        </IconButton>
        <IconButton
          color="error"
          sx={{
            border: '1px solid #d32f2f',
            backgroundColor: '#d32f2f',
            width: '3rem',
            borderRadius: '1.5rem',
            marginX: '0.5rem',
          }}
        >
          <DeleteOutlinedIcon sx={{ color: '#fff' }} />
        </IconButton>
      </div>
    </Stack>
  )

  return render ? ListUnit : NoListComponent
}

export default Home
