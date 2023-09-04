'use client'
import { Box, CssBaseline } from '@mui/material'
import React, { ReactNode, useEffect } from 'react'
import { ThemeProvider } from 'styled-components'
import { Header } from './Header'
import { useTheme } from '../app/store/hooks/useTheme'

export function PageLayout({ children }: { children: ReactNode }) {
  const theme = useTheme()

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <Box sx={{ p: 2 }}>{children}</Box>
    </ThemeProvider>
  )
}
