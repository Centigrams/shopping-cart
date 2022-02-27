import React from 'react';
import styles from '../../Styles/CartItem.module.css';
import BetronS2 from '../../Assets/Images/HeadphonesImages/betronS2.jpg';

// TODO: Remove hardcoded values
// TODO: Use SVG for plus and minus
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
            <h1>-</h1>
          </button>
          <input type="text" className={styles.numberOfItemsInputField} value="1" />
          <button type="button" className={styles.addAndSubtractButton}>
            <h1>+</h1>
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
