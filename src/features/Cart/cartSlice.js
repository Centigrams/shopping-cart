import { createSlice } from '@reduxjs/toolkit';

const cartIsOpenInitialValue = false;

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cartPanelIsOpen: cartIsOpenInitialValue,
  },
  reducers: {
    toggleCart: (state) => {
      const appState = state;
      const { cartPanelIsOpen } = state;
      appState.cartPanelIsOpen = !cartPanelIsOpen;
    },
  },
});

export const { toggleCart } = cartSlice.actions;

export default cartSlice.reducer;
