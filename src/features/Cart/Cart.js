import React from 'react';
import { Button } from '@mui/material';
import CartItem from './CartItem';
import cartStyles from '../../Styles/Cart.module.css';

/**
 * Once the cart page is active, the site loses the ability to click on
 * other parts of the website. Maybe use an event listener which closes
 * cart when the dark panel is clicked.
 * */
// TODO: Cart and cart item specs.
// Cart should show a shopping cart icon in the middle if empty.
// Cart panel must show Checkout and Browse Products at the bottom.
// Cart panel must display total bill directly below the last product in cart.
// Cart panel must hide scrollbar.
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
