import React from 'react';
import HeroGallery from './HeroGallery/HeroGallery';
import Sticky from '../../component/stickybar/Stickybar';
import Detail from '../../component/detailnavbar/Detailnavbar';
import Gallerys from '../../component/gallerys/Gallerys';
import Styles from './Gallery.module.css';

function Gallery() {
  return (
    <div className={Styles.gall}>
      <Sticky />
      <Detail />
      <HeroGallery />
      <Gallerys />
    </div>
  );
}

export default Gallery;
