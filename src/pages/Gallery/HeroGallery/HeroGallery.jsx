import React from 'react';
import styles from './heroGallery.module.css';

function HeroGallery() {
  return (
    <div className={styles.heroabt}>
      <div className={styles.heroabt__textContainer}>
        <h1>Gallery</h1>
        <div className={styles.heroabt__pcont}>
          <span>
            Home <i className="fa-solid fa-caret-right" />
          </span>
          <p>Gallery</p>
        </div>
      </div>
    </div>
  );
}

export default HeroGallery;
