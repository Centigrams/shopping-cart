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
import HeadphonePhoto from '../../Assets/Images/TAPH805BK_00-IMS-en_PH.jpeg';
import EarbudPhoto from '../../Assets/Images/TAT1215BK_97-APP-global-001.jpeg';
import SoundbarPhoto from '../../Assets/Images/TAB5105_37-IMS-en_PH.jpeg';

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

        <Link to="/" style={{ textDecoration: 'none' }}>
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

        <Link to="/" style={{ textDecoration: 'none' }}>
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

        <Link to="/" style={{ textDecoration: 'none' }}>
          <CustomProductCard raised>
            <CardActionArea>
              <CardMedia
                component="img"
                image={SoundbarPhoto}
              />
              <CardContent>
                <Typography
                  variant="h5"
                  component="div"
                >
                  SOUNDBARS
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
