'use client'
import { AppBar, Button, Link, Typography } from '@mui/material'
import { ThemeSwitcher } from './ThemeSwitcher'
import { useRouter } from 'next/navigation'

export const Header = () => {
  const router = useRouter()
  return (
    <AppBar
      position="static"
      sx={{ p: 2, display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}
    >
      <Button onClick={() => router.push('/')}>
        <Typography variant="h5" sx={{ color: '#fff' }}>
          Movie Search
        </Typography>
      </Button>
      <Button onClick={() => router.push('/favourites')}>
        <Typography variant="h6" sx={{ color: '#fff' }}>
          Favourites Movies
        </Typography>
      </Button>
      <ThemeSwitcher />
    </AppBar>
  )
}
