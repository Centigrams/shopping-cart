import React from 'react';
import styles from '../../Styles/SectionProductSelection.module.css';
import ProductPreview from './ProductPreview';

// Accept product array as prop depending on the link clicked.
// Create ProductPreview cards for every item in the product array.
function SectionProductSelection({ inventoryData }) {
  return (
    <section className={styles.sectionProductSelectionContainer}>
      <div className={styles.pageHeaderContainer}>
        <h1 className={styles.pageHeader}>PRODUCTS</h1>
        <h4>
          Free 2-day shipping for orders of $80 or more
          | Free return shipping
          | 90-day risk-free trial
          | Free support
        </h4>
      </div>
      <div className={styles.productSelectionContainer}>
        <div className={styles.productSelection}>
          {inventoryData.map((headphone) => (
            <ProductPreview
              key={headphone.productId}
              productName={headphone.productName}
              productPhoto={headphone.productPhoto}
              price={headphone.price}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default SectionProductSelection;
