// noinspection ES6CheckImport

import React from 'react';
import { Outlet } from 'react-router-dom';
import { ThemeProvider } from '@mui/material';
import AppHeader from './AppHeader';
import Cart from './Cart/Cart';
import AppTheme from '../Styles/AppTheme';
import styles from '../Styles/Layout.module.css';

function Layout() {
  return (
    <ThemeProvider theme={AppTheme}>
      <div className={styles.layoutContainer}>
        <AppHeader />
        <Outlet />
        <Cart />
      </div>
    </ThemeProvider>
  );
}

export default Layout;
