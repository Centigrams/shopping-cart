import React from 'react';
import { Link } from 'react-router-dom';
import { IconButton } from '@mui/material';
import CustomShoppingCartIcon from '../Styles/CustomComponents/CustomShoppingCartIcon';
import styles from '../Styles/HeaderLinks.module.css';

function HeaderLinks() {
  return (
    <div className={styles.headerLinksContainer}>
      <Link className={styles.links} to="/">HOME</Link>
      <Link className={styles.links} to="/products">PRODUCTS</Link>
      <Link className={styles.links} to="/contact">CONTACT</Link>
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
