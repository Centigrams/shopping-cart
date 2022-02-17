import React from 'react';
import styles from '../Styles/SectionPhotoHeader.module.css';

/**
 * textColorObject uses CSS inline styling.
 * Recommended headerPhoto size is 1920x1080.
 * TextHeader will be displayed in the middle of the section.
 * */
function SectionPhotoHeader({ headerPhoto, textHeader, textColorObject }) {
  return (
    <section
      style={{
        background: `url(${headerPhoto})`,
      }}
      className={styles.sectionBackground}
    >
      <h1 style={textColorObject} className={styles.photoSectionTextHeader}>
        {textHeader}
      </h1>
    </section>
  );
}

export default SectionPhotoHeader;
