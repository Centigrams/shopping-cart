import cartReducer, { toggleCart } from './cartSlice';

describe('cartPanelIsOpen', () => {
  test('Return initial state', () => {
    expect(cartReducer(undefined, {})).toEqual({ cartPanelIsOpen: false });
  });

  test('cartPanelIsOpen becomes true when initially false', () => {
    const previousState = {
      cartPanelIsOpen: false,
    };
    expect(cartReducer(previousState, toggleCart())).toEqual({ cartPanelIsOpen: true });
  });

  test('cartPanelIsOpen becomes false when initially true', () => {
    const previousState = {
      cartPanelIsOpen: true,
    };
    expect(cartReducer(previousState, toggleCart())).toEqual({ cartPanelIsOpen: false });
  });
});
