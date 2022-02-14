import React from 'react';
import styles from '../../Styles/Contact.module.css';

function Contact() {
  return (
    <div>
      <div className={styles.contactContainer}>
        <div className={styles.messageContainer}>
          <div className={styles.messagePanel}>
            <div className={styles.infoContainer}>
              <h2 className={styles.infoHeader}>Opening Hours</h2>
              <p>Monday to Friday, 9am to 5pm</p>
            </div>
            <div className={styles.infoContainer}>
              <h2 className={styles.infoHeader}>Customer care inquiries</h2>
              <p>help@samplestore.com</p>
              <p>(555) 555-5555</p>
              <p>(555) 123-4567</p>
            </div>
            <div className={styles.infoContainer}>
              <h2 className={styles.infoHeader}>Press inquiries</h2>
              <p>press@samplestore.com</p>
            </div>
            <div className={styles.infoContainer}>
              <h2 className={styles.infoHeader}>Location</h2>
              <p>Sand Hill Road, Palo Alto, California</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
