import React from 'react';
import CustomAppBar from '../Styles/CustomComponents/CustomAppBar';
import styles from '../Styles/AppHeader.module.css';
import HeaderLinks from './HeaderLinks';

function AppHeader() {
  return (
    <CustomAppBar>
      <div>
        <h1 className={styles.appName}>SampleStore</h1>
      </div>
      <HeaderLinks />
    </CustomAppBar>
  );
}

export default AppHeader;
