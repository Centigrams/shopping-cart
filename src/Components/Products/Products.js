import React from 'react';
import styles from '../../Styles/Products.module.css';

// TODO: Website layout (refer to Bose's website).
// TODO: Product Images.
// TODO: Product Data array.
// TODO: Product Cards.
// TODO: Configure Product Filter
function Products() {
  return (
    <div className={styles.productsContainer}>
      <section className={styles.photoSection}>
        Placeholder
      </section>
      <section className={styles.productGroup}>
        <div className={styles.product}>
          over ear headphones
        </div>
        <div className={styles.product}>
          on ear headphones
        </div>
        <div className={styles.product}>
          earbuds
        </div>
      </section>
    </div>
  );
}

export default Products;
