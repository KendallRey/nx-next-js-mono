'use client';

import { ThemeProvider } from '@mui/material';
import { ILayout } from '@nx-next-js-micro/components';
import React from 'react';
import { MuiTheme } from '../components/theme/MuiTheme';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { Provider as ReduxProvider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from '../redux/services/store';

const Providers: React.FC<ILayout> = ({ children }) => {
  return (
    <ReduxProvider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <ThemeProvider theme={MuiTheme}>{children}</ThemeProvider>
        </LocalizationProvider>
      </PersistGate>
    </ReduxProvider>
  );
};

export default Providers;
