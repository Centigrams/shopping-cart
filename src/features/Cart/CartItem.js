import React from 'react';
import { IconButton } from '@mui/material';
import { RemoveCircle, AddCircle } from '@mui/icons-material';
import styles from '../../Styles/CartItem.module.css';

// TODO: Cart item must be able to increment number of same products.
function CartItem({
  category,
  price,
  productName,
  productPhoto,
  quantity,
}) {
  return (
    <div className={styles.cartItem}>
      <div>
        <img
          src={productPhoto}
          alt={productName}
          className={styles.itemImage}
        />
      </div>
      <div className={styles.itemRightPanel}>
        <div className={styles.itemRightPanelTop}>
          <h3>{category}</h3>
          <p>
            $
            {price}
          </p>
        </div>
        <div>
          <p>{productName}</p>
        </div>
        <div>
          <button type="button" className={styles.addAndSubtractButton}>
            <IconButton aria-label="subtract item">
              <RemoveCircle color="secondary" />
            </IconButton>
          </button>
          <input
            type="text"
            className={styles.numberOfItemsInputField}
            value={quantity}
          />
          <button type="button" className={styles.addAndSubtractButton}>
            <IconButton aria-label="add item">
              <AddCircle color="secondary" />
            </IconButton>
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
