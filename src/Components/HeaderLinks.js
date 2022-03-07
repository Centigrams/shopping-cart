import React from 'react';
import { NavLink } from 'react-router-dom';
import { IconButton } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { toggleCart } from '../features/Cart/cartSlice';
import CustomShoppingCartIcon from '../Styles/CustomComponents/CustomShoppingCartIcon';
import styles from '../Styles/HeaderLinks.module.css';
import AppTheme from '../Styles/AppTheme';

// TODO: Cart must display total amount of items in cart.
function HeaderLinks() {
  const dispatch = useDispatch();
  const cartArray = useSelector((state) => state.cart.cart);
  const totalItemsInCart = cartArray.reduce((total, items) => total + items.quantity, 0);

  const setAsActiveLink = (status) => ({
    color: status ? AppTheme.palette.secondary.main : AppTheme.palette.primary.contrastText,
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
      <IconButton
        size="large"
        onClick={() => dispatch(toggleCart())}
      >
        <CustomShoppingCartIcon />
        { totalItemsInCart > 0
          ? (
            <span className={[
              styles.badge,
              styles.lblCartCount,
            ].join(' ')}
            >
              {totalItemsInCart}
            </span>
          ) : null }
      </IconButton>
    </div>
  );
}

export default HeaderLinks;
