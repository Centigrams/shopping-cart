import React from 'react';
import { Outlet } from 'react-router-dom';
import { ThemeProvider } from '@mui/material';
import { useSelector } from 'react-redux';
import AppHeader from './AppHeader';
import Cart from '../features/Cart/Cart';
import AppTheme from '../Styles/AppTheme';
import styles from '../Styles/Layout.module.css';

function Layout() {
  const cartPanelIsOpen = useSelector((state) => state.cart.cartPanelIsOpen);

  return (
    <ThemeProvider theme={AppTheme}>
      <div className={styles.layoutContainer}>
        <AppHeader />
        <Outlet />
        { cartPanelIsOpen ? <Cart /> : null }
      </div>
    </ThemeProvider>
  );
}

export default Layout;
