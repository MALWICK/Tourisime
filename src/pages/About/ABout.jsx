import React from 'react';
import './about.css';
import Sticky from '../../component/stickybar/Stickybar';
import Detail from '../../component/detailnavbar/Detailnavbar';
import AboutHero from '../../component/AboutHero/AboutHero';
import AbtBooking from '../../component/abtBooking/AbtBooking';
import AboutAfri from '../../component/AboutAfri/AboutAfri';
import Footer from '../../component/Footer/Footer';

function ABout() {
  return (
    <div className="about">
      <Sticky />
      <Detail />
      <AboutHero />
      <AbtBooking />
      <AboutAfri />
      <Footer />
    </div>
  );
}

export default ABout;
