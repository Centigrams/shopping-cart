import cartReducer, {
  toggleCart,
  addToCart,
  decreaseQuantity,
  increaseQuantity,
} from './cartSlice';
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
      quantity: 1,
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
            quantity: 1,
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
          quantity: 1,
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
      quantity: 1,
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
            quantity: 1,
          },
          {
            productName: 'MOMENTUM TW2',
            productId: 'sennheiser-momentum-tw2',
            category: 'earbuds',
            price: 219,
            currency: 'USD',
            productPhoto: SennheiserMomentumTW2,
            quantity: 1,
          },
        ],
      });
  });

  test('Add same product to cart without creating another object', () => {
    const previousState = {
      cart: [
        {
          productName: 'S2',
          productId: 'betron-s2',
          category: 'headphones',
          price: 59,
          currency: 'USD',
          productPhoto: BetronS2,
          quantity: 1,
        },
      ],
    };

    const productObject = {
      productName: 'S2',
      productId: 'betron-s2',
      category: 'headphones',
      price: 59,
      currency: 'USD',
      productPhoto: BetronS2,
      quantity: 1,
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
            quantity: 2,
          },
        ],
      });
  });
});

describe('Item quantity change', () => {
  test('Item is removed from cart if quantity is 0', () => {
    const previousState = {
      cart: [
        {
          productName: 'S2',
          productId: 'betron-s2',
          category: 'headphones',
          price: 59,
          currency: 'USD',
          productPhoto: BetronS2,
          quantity: 1,
        },
      ],
    };

    expect(cartReducer(previousState, decreaseQuantity('betron-s2'))).toEqual({
      cart: [],
    });
  });

  test('Item quantity can be increased', () => {
    const previousState = {
      cart: [
        {
          productName: 'S2',
          productId: 'betron-s2',
          category: 'headphones',
          price: 59,
          currency: 'USD',
          productPhoto: BetronS2,
          quantity: 1,
        },
      ],
    };
    expect(cartReducer(previousState, increaseQuantity('betron-s2'))).toEqual({
      cart: [
        {
          productName: 'S2',
          productId: 'betron-s2',
          category: 'headphones',
          price: 59,
          currency: 'USD',
          productPhoto: BetronS2,
          quantity: 2,
        },
      ],
    });
  });
});
