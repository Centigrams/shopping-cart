import React from 'react';
import cartStyles from '../../Styles/Cart.module.css';

/**
 * Once the cart page is active, the site loses the ability to click on
 * other parts of the website. Maybe use an event listener which closes
 * cart when the dark panel is clicked.
 * */
// Cart should show a shopping cart icon in the middle if empty.
// Cart panel must show Checkout and Browse Products at the bottom.
// Cart panel must hide scrollbar
function Cart() {
  return (
    <div className={cartStyles.cartBackground}>
      <div className={cartStyles.cartPanel}>
        <div className={cartStyles.mainCart}>
          <h1>Your Cart</h1>
        </div>
      </div>
    </div>
  );
}

export default Cart;
