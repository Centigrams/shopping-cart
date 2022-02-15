import React from 'react';
import { NavLink } from 'react-router-dom';
import { IconButton } from '@mui/material';
import CustomShoppingCartIcon from '../Styles/CustomComponents/CustomShoppingCartIcon';
import styles from '../Styles/HeaderLinks.module.css';
import AppTheme from '../Styles/Apptheme';

function HeaderLinks() {
  const setAsActiveLink = (status) => ({
    color: status ? AppTheme.palette.secondary.main : AppTheme.palette.secondary.contrastText,
  });

  return (
    <div className={styles.headerLinksContainer}>
      <NavLink
        className={styles.links}
        to="/"
        style={({ isActive }) => setAsActiveLink(isActive)}
      >
        HOME
      </NavLink>
      <NavLink
        className={styles.links}
        to="/products"
        style={({ isActive }) => setAsActiveLink(isActive)}
      >
        PRODUCTS
      </NavLink>
      <NavLink
        className={styles.links}
        to="/contact"
        style={({ isActive }) => setAsActiveLink(isActive)}
      >
        CONTACT
      </NavLink>
      <IconButton size="large">
        <CustomShoppingCartIcon />
        <span className={[
          styles.badge,
          styles.lblCartCount,
        ].join(' ')}
        >
          5
        </span>
      </IconButton>
    </div>
  );
}

export default HeaderLinks;
