import React from 'react';
import { Outlet } from 'react-router-dom';
import { ThemeProvider } from '@mui/material';
import AppHeader from './AppHeader';
import AppTheme from '../Styles/Apptheme';
import styles from '../Styles/Layout.module.css';

function Layout() {
  return (
    <ThemeProvider theme={AppTheme}>
      <div className={styles.layoutContainer}>
        <AppHeader />
        <Outlet />
      </div>
    </ThemeProvider>
  );
}

export default Layout;
