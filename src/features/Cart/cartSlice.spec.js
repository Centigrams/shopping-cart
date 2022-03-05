import cartReducer, { toggleCart, addToCart } from './cartSlice';
import BetronS2 from '../../Assets/Images/HeadphonesImages/betronS2.jpg';
import SennheiserMomentumTW2
  from '../../Assets/Images/EarbudsImages/sennheiser-momentum-true-wireless-2-premium-in-ear.jpg';

describe('cartPanelIsOpen', () => {
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

describe('Add to cart', () => {
  test('Add a headphone to cart', () => {
    const previousState = {
      cart: [],
    };

    const productObject = {
      productName: 'S2',
      productId: 'betron-s2',
      category: 'headphones',
      price: 59,
      currency: 'USD',
      productPhoto: BetronS2,
    };

    expect(cartReducer(previousState, addToCart(productObject)))
      .toEqual({
        cart: [
          {
            productName: 'S2',
            productId: 'betron-s2',
            category: 'headphones',
            price: 59,
            currency: 'USD',
            productPhoto: BetronS2,
          },
        ],
      });
  });

  test('Add a different item in cart with one item in it', () => {
    const previousState = {
      cart: [
        {
          productName: 'S2',
          productId: 'betron-s2',
          category: 'headphones',
          price: 59,
          currency: 'USD',
          productPhoto: BetronS2,
        },
      ],
    };

    const differentProductObject = {
      productName: 'MOMENTUM TW2',
      productId: 'sennheiser-momentum-tw2',
      category: 'earbuds',
      price: 219,
      currency: 'USD',
      productPhoto: SennheiserMomentumTW2,
    };

    expect(cartReducer(previousState, addToCart(differentProductObject)))
      .toEqual({
        cart: [
          {
            productName: 'S2',
            productId: 'betron-s2',
            category: 'headphones',
            price: 59,
            currency: 'USD',
            productPhoto: BetronS2,
          },
          {
            productName: 'MOMENTUM TW2',
            productId: 'sennheiser-momentum-tw2',
            category: 'earbuds',
            price: 219,
            currency: 'USD',
            productPhoto: SennheiserMomentumTW2,
          },
        ],
      });
  });
});
