import React from 'react';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import styles from '../../Styles/Home.module.css';

function Home() {
  return (
    <div>
      <div className={styles.homeContainer}>
        <div className={styles.homeContent}>
          <h1 className={styles.productName}>Betron S2</h1>
          <h2 className={styles.productDescription}>Superb sound quality.</h2>
          <Button color="secondary" variant="contained">
            <Link to="/products" className={styles.buttonLink}>
              SHOP NOW
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Home;
