import React from 'react';
import './Gallerys.css';
import Monkey from '../../assets/images/gallerry/photo 1-1.png';
import Giraf from '../../assets/images/gallerry/photo 1-3.png';
import Boot from '../../assets/images/gallerry/photo 1-6.png';
import umbrel from '../../assets/images/gallerry/photo 1-2.png';
import Girl from '../../assets/images/gallerry/photo 1-4.png';
import Hurt from '../../assets/images/gallerry/photo 1-7.png';
import Dragon from '../../assets/images/gallerry/photo 1-5.png';
import Pirog from '../../assets/images/gallerry/photo 1-8.png'; /* 
import Lye from '../../assets/images/gallerry/photo 2-6.png';
import Church from '../../assets/images/gallerry/photo 2-4.png';
import Byke from '../../assets/images/gallerry/photo 2-1.png';
import Skype from '../../assets/images/gallerry/photo 2-3.png';
import Musk from '../../assets/images/gallerry/photo 2-8.png';
import Sun from '../../assets/images/gallerry/photo 2-7.png';
import Millk from '../../assets/images/gallerry/photo 2-5.png';
import Waterh from '../../assets/images/gallerry/photo 2-2.png';
import Repe from '../../assets/images/gallerry/photo 3-1.png';
import Elephants from '../../assets/images/gallerry/photo 3-3.png';
import Roll from '../../assets/images/gallerry/photo 3-4.png';
import Opera from '../../assets/images/gallerry/photo 3-6.png';
import Cow from '../../assets/images/gallerry/photo 3-2.png';
import Mudy from '../../assets/images/gallerry/photo 3-5.png';
import Climb from '../../assets/images/gallerry/photo 3-7.png';
import Orphane from '../../assets/images/gallerry/photo 3-8.png';
 */
/* const GalleryData = [
  { image: Monkey },
  { image: Giraf },
  { image: Boot },
  { image: umbrel },
  { image: Hurt },
  { image: Dragon },
  { image: Pirog },
  { image: Lye },
  { image: Church },
  { image: Byke },
  { image: Skype },
  { image: Musk },
  { image: Sun },
  { image: Millk },
  { image: Waterh },
  { image: Repe },
  { image: Elephants },
  { image: Roll },
  { image: Opera },
  { image: Cow },
  { image: Mudy },
  { image: Climb },
  { image: Orphane },
  { image: Girl },
];

console.log(GalleryData);
 */
function Gallerys() {
  return (
    <div className="gallerys">
      <div className="gallerys__container">
        <div className="first__Gall">
          <img src={Monkey} alt="monkey" />
          <img src={Giraf} alt="monkey" />
          <img src={Girl} alt="monkey" />
          <img src={Boot} alt="monkey" />
          <img src={umbrel} alt="monkey" />
          <img src={Dragon} alt="monkey" />
          <img src={Hurt} alt="monkey" />
          <img src={Pirog} alt="monkey" />
        </div>
        {/* <img src={Lye} alt="monkey" />
        <img src={Church} alt="monkey" />
        <img src={Skype} alt="monkey" />
        <img src={Byke} alt="monkey" />
        <img src={Musk} alt="monkey" />
        <img src={Sun} alt="monkey" />
        <img src={Millk} alt="monkey" />
        <img src={Waterh} alt="monkey" />
        <img src={Repe} alt="monkey" />
        <img src={Elephants} alt="monkey" />
        <img src={Roll} alt="monkey" />
        <img src={Opera} alt="monkey" />
        <img src={Cow} alt="monkey" />
        <img src={Climb} alt="monkey" />
        <img src={Orphane} alt="monkey" />
        <img src={Mudy} alt="monkey" /> */}
      </div>
    </div>
  );
}

export default Gallerys;
