import React from 'react';
import {
  CardActionArea,
  CardContent,
  Typography,
  CardMedia,
} from '@mui/material';
import { Link } from 'react-router-dom';
import styles from '../../Styles/Products.module.css';
import CustomProductCard from '../../Styles/CustomComponents/CustomProductCard';
import HeadphonePhoto from '../../Assets/Images/small-eran-menashri.jpg';
import EarbudPhoto from '../../Assets/Images/small-kal-visuals-unsplash.jpg';
import SpeakersPhoto from '../../Assets/Images/small-john-fornander-yvs7ZH3AZNM-unsplash.jpg';

// TODO: Router for products.
// TODO: Product Images.
// TODO: Product Data array.
// TODO: Product Cards.
function Products() {
  return (
    <div className={styles.productsContainer}>
      <section className={styles.photoSection}>
        <h1 className={styles.photoSectionTextHeader}>{'Let\'s get started.'}</h1>
      </section>
      <section className={styles.productGroup}>

        <Link to="/products/headphones" style={{ textDecoration: 'none' }}>
          <CustomProductCard raised>
            <CardActionArea>
              <CardMedia
                component="img"
                image={HeadphonePhoto}
              />
              <CardContent>
                <Typography
                  variant="h5"
                  component="div"
                >
                  HEADPHONES
                </Typography>
              </CardContent>
            </CardActionArea>
          </CustomProductCard>
        </Link>

        <Link to="/products/earbuds" style={{ textDecoration: 'none' }}>
          <CustomProductCard raised>
            <CardActionArea>
              <CardMedia
                component="img"
                image={EarbudPhoto}
              />
              <CardContent>
                <Typography
                  variant="h5"
                  component="div"
                >
                  EARBUDS
                </Typography>
              </CardContent>
            </CardActionArea>
          </CustomProductCard>
        </Link>

        <Link to="/products/speakers" style={{ textDecoration: 'none' }}>
          <CustomProductCard raised>
            <CardActionArea>
              <CardMedia
                component="img"
                image={SpeakersPhoto}
              />
              <CardContent>
                <Typography
                  variant="h5"
                  component="div"
                >
                  SPEAKERS
                </Typography>
              </CardContent>
            </CardActionArea>
          </CustomProductCard>
        </Link>
      </section>
    </div>
  );
}

export default Products;
