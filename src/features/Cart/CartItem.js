import React from 'react';
import { IconButton } from '@mui/material';
import { RemoveCircle, AddCircle } from '@mui/icons-material';
import { useDispatch } from 'react-redux';
import styles from '../../Styles/CartItem.module.css';
import { increaseQuantity, decreaseQuantity } from './cartSlice';

function CartItem({
  category,
  price,
  productName,
  productPhoto,
  quantity,
  productId,
}) {
  const dispatch = useDispatch();
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
          <IconButton
            aria-label="subtract item"
            onClick={() => dispatch(decreaseQuantity(productId))}
          >
            <RemoveCircle color="secondary" />
          </IconButton>
          <p>{quantity}</p>
          <IconButton
            aria-label="add item"
            onClick={() => dispatch(increaseQuantity(productId))}
          >
            <AddCircle color="secondary" />
          </IconButton>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
