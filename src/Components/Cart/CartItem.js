import React from 'react';
import { IconButton } from '@mui/material';
import { RemoveCircle, AddCircle } from '@mui/icons-material';
import styles from '../../Styles/CartItem.module.css';
import BetronS2 from '../../Assets/Images/HeadphonesImages/betronS2.jpg';

// TODO: Remove hardcoded values
function CartItem() {
  return (
    <div className={styles.cartItem}>
      <div>
        <img
          src={BetronS2}
          alt="betrons2"
          className={styles.itemImage}
        />
      </div>
      <div className={styles.itemRightPanel}>
        <div className={styles.itemRightPanelTop}>
          <h3>Headphones</h3>
          <p>$199</p>
        </div>
        <div>
          <p>S2</p>
        </div>
        <div>
          <button type="button" className={styles.addAndSubtractButton}>
            <IconButton aria-label="subtract item">
              <RemoveCircle color="secondary" />
            </IconButton>
          </button>
          <input type="text" className={styles.numberOfItemsInputField} value="1" />
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
