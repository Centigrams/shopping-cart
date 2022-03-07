import { createSlice } from '@reduxjs/toolkit';

const cartIsOpenInitialValue = false;
const cartInitialValue = [];

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
    increaseQuantity: (state, action) => {
      const increasedProduct = state.cart.find((product) => product.productId === action.payload);
      increasedProduct.quantity += 1;
    },
    decreaseQuantity: (state, action) => {
      const decreasedProduct = state.cart.find((product) => product.productId === action.payload);
      if (decreasedProduct.quantity <= 1) {
        state.cart = state.cart.filter(
          (product) => product.productId !== decreasedProduct.productId,
        );
      } else {
        decreasedProduct.quantity -= 1;
      }
    },
    checkoutItems: (state) => {
      state.cart = [];
    },
  },
});

export const {
  toggleCart,
  addToCart,
  increaseQuantity,
  decreaseQuantity,
  checkoutItems,
} = cartSlice.actions;

export default cartSlice.reducer;
