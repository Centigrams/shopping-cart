import React from 'react';
import { Link } from 'react-router-dom';
import { Typography } from '@mui/material';
import CustomAppBar from '../Styles/CustomComponents/CustomAppBar';
import linkStyles from '../Styles/HeaderLinks.module.css';
import HeaderLinks from './HeaderLinks';

function AppHeader() {
  return (
    <CustomAppBar>
      <div>
        <Link to="/" className={linkStyles.links}>
          <Typography
            style={{
              marginLeft: '1.5rem',
              fontFamily: 'MontserratRegular, sans-serif',
            }}
            variant="h4"
          >
            SampleStore
          </Typography>
        </Link>
      </div>
      <HeaderLinks />
    </CustomAppBar>
  );
}

export default AppHeader;
