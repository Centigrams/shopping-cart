import React from 'react';
import { Link } from 'react-router-dom';
import CustomAppBar from '../Styles/CustomComponents/CustomAppBar';
import styles from '../Styles/AppHeader.module.css';
import linkStyles from '../Styles/HeaderLinks.module.css';
import HeaderLinks from './HeaderLinks';

function AppHeader() {
  return (
    <CustomAppBar>
      <div>
        <Link to="/" className={linkStyles.links}>
          <h1 className={styles.appName}>SampleStore</h1>
        </Link>
      </div>
      <HeaderLinks />
    </CustomAppBar>
  );
}

export default AppHeader;
