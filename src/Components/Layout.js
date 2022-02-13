import React from 'react';
import { Outlet } from 'react-router-dom';
import { ThemeProvider } from '@mui/material';
import AppHeader from './AppHeader';
import AppTheme from '../Styles/Apptheme';

function Layout() {
  return (
    <ThemeProvider theme={AppTheme}>
      <div>
        <AppHeader />
        <Outlet />
      </div>
    </ThemeProvider>
  );
}

export default Layout;
