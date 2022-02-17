import React from 'react';
import styles from '../Styles/SectionPhotoHeader.module.css';

function SectionPhotoHeader({ headerPhoto, textHeader }) {
  return (
    <section
      style={{
        background: `url(${headerPhoto})`,
      }}
      className={styles.sectionBackground}
    >
      <h1 style={{ color: '#0da9ff' }} className={styles.photoSectionTextHeader}>
        {textHeader}
      </h1>
    </section>
  );
}

export default SectionPhotoHeader;
