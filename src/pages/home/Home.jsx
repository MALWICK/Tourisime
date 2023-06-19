import React from 'react';
import Detailnavbar from '../../component/detailnavbar/Detailnavbar';
import Hero from './Hero/Hero';
import Booking from './booking/Booking';
import Packagehome from '../../component/PackageHome/PackageHome';
import Destination from './Distation/Destination';
import Choice from './Whyus/Choice';
import Traveller from './Traveller/Traveller';
import Footer from '../../component/Footer/Footer';
import StickyBar from '../../component/stickybar/Stickybar';

export default function Home() {
  return (
    <div className="main__home">
      <StickyBar />
      <Detailnavbar />
      <Hero />
      <Booking />
      <Packagehome />
      <Destination />
      <Choice />
      <Traveller />
      <Footer />
    </div>
  );
}
