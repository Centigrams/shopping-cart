import React from 'react';
import styles from '../../Styles/SectionProductSelection.module.css';
import ProductPreview from './ProductPreview';

// TODO: Reusable product selection page for product preview.
// Accept product array as prop.
// Map product array and create product preview cards.

function SectionProductSelection() {
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
          <ProductPreview />
        </div>
      </div>
    </section>
  );
}

export default SectionProductSelection;
