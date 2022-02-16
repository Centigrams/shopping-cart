import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../Styles/NotFound.module.css';

function NotFound() {
  return (
    <div className={styles.notFoundContainer}>
      <div className={styles.messageContainer}>
        <h1>{'The page you\'re looking'}</h1>
        <h1>{'for can\'t be found.'}</h1>
        <Link style={{ marginTop: '0.5rem' }} to="/">Return to home page</Link>
      </div>
    </div>
  );
}

export default NotFound;
