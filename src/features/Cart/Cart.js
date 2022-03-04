import React from 'react';
import { Button } from '@mui/material';
import CartItem from './CartItem';
import cartStyles from '../../Styles/Cart.module.css';

// TODO: Cart should show a shopping cart icon in the middle if empty.
function Cart() {
  return (
    <div className={cartStyles.cartBackground}>
      <div className={cartStyles.cartPanel}>
        <div className={cartStyles.mainCart}>
          <h1>Your Cart</h1>
          <div className={cartStyles.cartItemHolder}>
            <CartItem />
            <CartItem />
            <CartItem />
          </div>
          <div className={cartStyles.totalPriceContainer}>
            <p>Total: $597</p>
          </div>
          <div className={cartStyles.actionButtonsContainer}>
            <Button
              variant="contained"
              color="secondary"
              style={{
                width: '16rem',
                height: '3.5rem',
                fontSize: '1.3rem',
                marginBottom: '1rem',
              }}
            >
              CHECKOUT
            </Button>
            <Button
              variant="outlined"
              color="secondary"
              style={{
                width: '16rem',
                height: '3.5rem',
                fontSize: '1.3rem',
              }}
            >
              BROWSE PRODUCTS
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
