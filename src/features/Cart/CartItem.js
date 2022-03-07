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
  const categoryCapitalized = category.charAt(0).toUpperCase() + category.slice(1);
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
          <h3>{categoryCapitalized}</h3>
          <p>
            $
            {price}
          </p>
        </div>
        <div>
          <p>{productName}</p>
        </div>
        <div className={styles.quantityContainer}>
          <IconButton aria-label="subtract item">
            <RemoveCircle color="secondary" />
          </IconButton>
          <p>{quantity}</p>
          <IconButton aria-label="add item">
            <AddCircle color="secondary" />
          </IconButton>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
