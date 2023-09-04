'use client'
import { createTheme } from '@mui/material'
import { Theme } from '../reducers/theme'
import { useAppSelector } from './useAppSelector'

export const useTheme = () => {
  const theme = useAppSelector(state => state.theme)
  return createTheme({
    palette: {
      mode: theme === Theme.DARK ? 'dark' : 'light'
    }
  })
}
