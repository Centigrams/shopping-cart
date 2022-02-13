import React from 'react';
import { Link } from 'react-router-dom';
import { IconButton } from '@mui/material';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import styles from '../Styles/HeaderLinks.module.css';

// TODO: Checkout button customization
// TODO: Setup themes with MUI
function HeaderLinks() {
  return (
    <div className={styles.headerLinksContainer}>
      <Link className={styles.links} to="/">HOME</Link>
      <Link className={styles.links} to="/products">PRODUCTS</Link>
      <Link className={styles.links} to="/contact">CONTACT</Link>
      <IconButton>
        <ShoppingBagIcon />
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
