import { createSlice } from '@reduxjs/toolkit';

const cartIsOpenInitialValue = false;
const cartInitialValue = [];

// TODO: Create changeQuantity reducer and do all cart filtering logic in addToCart.
export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cartPanelIsOpen: cartIsOpenInitialValue,
    cart: cartInitialValue,
  },
  reducers: {
    toggleCart: (state) => {
      const appState = state;
      const { cartPanelIsOpen } = state;
      appState.cartPanelIsOpen = !cartPanelIsOpen;
    },
    /**
     * If product object is already present, only increase the quantity.
     * Else add the new product object to the cart array.
     * */
    addToCart: (state, action) => {
      const sameProducts = state.cart.filter(
        (sameProduct) => (sameProduct.productId === action.payload.productId),
      );
      if (sameProducts.length === 1) {
        state.cart.forEach((product) => {
          if (product.productId !== sameProducts[0].productId) return;
          product.quantity += 1;
        });
      } else {
        state.cart.push(action.payload);
      }
    },
  },
});

export const { toggleCart, addToCart } = cartSlice.actions;

export default cartSlice.reducer;
