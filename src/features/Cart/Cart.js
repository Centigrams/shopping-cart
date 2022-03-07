import React from 'react';
import { Button } from '@mui/material';
import { useSelector } from 'react-redux';
import CartItem from './CartItem';
import cartStyles from '../../Styles/Cart.module.css';

// TODO: Cart should show a shopping cart icon in the middle if empty.
// TODO: Cart must compute total price.
// TODO: Cart must go to products page when browse products is clicked.
// TODO: Cart must empty when checkout is clicked.
// TODO: Cart must be able to display number of same products in input.
// TODO: Cart must not repeat displayed item.
function Cart() {
  const cartArray = useSelector((state) => state.cart.cart);
  /**
   * One possible solution is to first filter out all items that would repeat.
   * Count how many times a product is repeated in the array and use that value
   * in CartItem's input field.
   * */
  const cartItems = cartArray.map((item) => (
    <CartItem
      key={item.productId}
      category={item.category}
      price={item.price}
      productName={item.productName}
      productPhoto={item.productPhoto}
      quantity={item.quantity}
    />
  ));

  return (
    <div className={cartStyles.cartBackground}>
      <div className={cartStyles.cartPanel}>
        <div className={cartStyles.mainCart}>
          <h1>Your Cart</h1>
          <div className={cartStyles.cartItemHolder}>
            {/* If Cart is empty, return shopping cart icon, else return CartItem */}
            {cartItems}
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
