'use client';

import { ThemeProvider } from '@mui/material'
import { ILayout } from '@nx-next-js-micro/components'
import React from 'react'
import { MuiTheme } from '../components/theme/MuiTheme'

const Providers: React.FC<ILayout> = ({children }) => {
  return (
    <ThemeProvider theme={MuiTheme}>{children}</ThemeProvider>
  )
}

export default Providers