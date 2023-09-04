'use client'
import { Button } from '@mui/material'
import { useDispatch } from 'react-redux'
import { switchTheme } from '../app/store/reducers/theme'

export const ThemeSwitcher = () => {
  const dispatch = useDispatch()

  const handleClick = () => {
    dispatch(switchTheme())
  }

  return (
    <Button size="small" sx={{ color: '#fff' }} onClick={handleClick}>
      Switch theme
    </Button>
  )
}
