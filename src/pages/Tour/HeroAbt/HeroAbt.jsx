import React from 'react';
import styles from './heroabt.module.css';

function HeroAbt() {
  return (
    <div className={styles.heroabt}>
      <div className={styles.heroabt__textContainer}>
        <h1>Tour Package</h1>
        <div className={styles.heroabt__pcont}>
          <span>Home</span>
          <i className="fa-solid fa-caret-right" />
          <p>Tour Package</p>
        </div>
      </div>
    </div>
  );
}

export default HeroAbt;
