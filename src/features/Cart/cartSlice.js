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
    addToCart: (state, action) => {
      state.cart.push(action.payload);
    },
  },
});

export const { toggleCart, addToCart } = cartSlice.actions;

export default cartSlice.reducer;
