import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../../Styles/Home.module.css';
import ShopNowButton from '../../Styles/CustomComponents/ShopNowButton';

function Home() {
  return (
    <div>
      <div className={styles.homeContainer}>
        <div className={styles.homeContent}>
          <h1 className={styles.productName}>Betron S2</h1>
          <h2 className={styles.productDescription}>Superb sound quality.</h2>
          <Link to="/products" style={{ textDecoration: 'none' }}>
            <ShopNowButton color="secondary" variant="contained">
              SHOP NOW
            </ShopNowButton>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
