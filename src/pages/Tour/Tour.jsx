import React from 'react';
import StickyBar from '../../component/stickybar/Stickybar';
import Detailnavbar from '../../component/detailnavbar/Detailnavbar';
import HeroAbt from './HeroAbt/HeroAbt';
import Packagehome from '../../component/PackageHome/PackageHome';
import Footer from '../../component/Footer/Footer';

export default function Tour() {
  return (
    <div>
      <StickyBar />
      <Detailnavbar />
      <HeroAbt />
      <Packagehome />
      <Footer />
    </div>
  );
}
