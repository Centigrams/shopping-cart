import React from 'react';
import { Button } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { checkoutItems, toggleCart } from './cartSlice';
import CartItem from './CartItem';
import cartStyles from '../../Styles/Cart.module.css';

// TODO: Cart should show a shopping cart icon in the middle if empty.
// TODO: Cart must go to products page when browse products is clicked.
function Cart() {
  const dispatch = useDispatch();

  const cartArray = useSelector((state) => state.cart.cart);

  const cartItems = cartArray.map((item) => (
    <CartItem
      key={item.productId}
      category={item.category}
      price={item.price}
      productName={item.productName}
      productPhoto={item.productPhoto}
      quantity={item.quantity}
      productId={item.productId}
    />
  ));

  const totalPrice = cartArray.reduce((total, product) => {
    const totalPerItem = product.quantity * product.price;
    return total + totalPerItem;
  }, 0);

  return (
    <div className={cartStyles.cartBackground}>
      <div className={cartStyles.cartPanel}>
        <div className={cartStyles.mainCart}>
          <h1>Your Cart</h1>
          <div className={cartStyles.cartItemHolder}>
            {cartItems}
          </div>
          <div className={cartStyles.totalPriceContainer}>
            <p>
              Total: $
              {totalPrice}
            </p>
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
              onClick={() => dispatch(checkoutItems())}
            >
              CHECKOUT
            </Button>
            <Link to="/products" style={{ textDecoration: 'none' }} onClick={() => dispatch(toggleCart())}>
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
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
