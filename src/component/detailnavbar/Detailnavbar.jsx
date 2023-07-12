import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Detailnavbar.module.css';
import maplogo from '../../assets/images/maplogo.jpg';
import Button from '../Button/Button';

function Detailnavbar() {
  return (
    <div className={styles.secondnavbar}>
      <div className={styles.secondnavbar__menulink}>
        <div className={styles.content__holder_image}>
          <img src={maplogo} alt="maplogo" />
        </div>
        <Link to="/">
          <p className={styles.main__link}>Home</p>
        </Link>
        <Link to="/about">
          <a href="#About">About</a>
        </Link>
        <Link to="/tour">
          <a href="#Tour Package">Tour Package</a>
        </Link>
        <Link to="/gallery">
          <a href="#Gallery">Gallery</a>
        </Link>
        <Link to="/contact">
          <a href="#Contact us">Contact Us</a>
        </Link>
        <a href="#Blog">Blog</a>
      </div>

      <div className={styles.secondnavbar__holderbtn}>
        <Button text="sign up" />
      </div>
    </div>
  );
}

export default Detailnavbar;
