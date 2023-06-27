import React from 'react';
import './Gallerys.css';
import Monkey from '../../assets/images/gallerry/photo 1-1.png';
import umbrel from '../../assets/images/gallerry/photo 1-2.png';
import Giraf from '../../assets/images/gallerry/photo 1-3.png';
import Lye from '../../assets/images/gallerry/photo 2-6.png';
import Girl from '../../assets/images/gallerry/photo 1-4.png';
import Boot from '../../assets/images/gallerry/photo 1-6.png';
import Dragon from '../../assets/images/gallerry/photo 1-5.png';
import Pirog from '../../assets/images/gallerry/photo 1-8.png';
import Hurt from '../../assets/images/gallerry/photo 1-7.png';
import Church from '../../assets/images/gallerry/photo 2-4.png';
import Skype from '../../assets/images/gallerry/photo 2-3.png';
import Byke from '../../assets/images/gallerry/photo 2-1.png';
import Musk from '../../assets/images/gallerry/photo 2-8.png';
import Sun from '../../assets/images/gallerry/photo 2-7.png';
import Millk from '../../assets/images/gallerry/photo 2-5.png';

import Repe from '../../assets/images/gallerry/photo 3-1.png';
import Elephants from '../../assets/images/gallerry/photo 3-3.png';
import Roll from '../../assets/images/gallerry/photo 3-4.png';
import Opera from '../../assets/images/gallerry/photo 3-6.png';
import Cow from '../../assets/images/gallerry/photo 3-2.png';
import Mudy from '../../assets/images/gallerry/photo 3-5.png';
import Climb from '../../assets/images/gallerry/photo 3-7.png';
import Orphane from '../../assets/images/gallerry/photo 3-8.png';
import waterh from '../../assets/images/gallerry/photo 2-2.png';

const GalleryData = [
  { image: Monkey },
  { image: umbrel },
  { image: Lye },
  { image: Musk },
  { image: Repe },
  { image: Cow },
  { image: Climb },
  { image: Giraf },
  { image: Sun },
  { image: Elephants },
  { image: Boot },
  { image: Pirog },

  { image: Girl },
  { image: Dragon },
  { image: Church },

  { image: Millk },
  { image: Roll },
  { image: Mudy },
  { image: Opera },
  { image: Byke },
  { image: waterh },
  { image: Hurt },
  { image: Orphane },
  { image: Skype },
  { image: Opera },
];

function Gallerys() {
  return (
    <div className="gallerys">
      <div className="gallerys__container">
        {GalleryData.map((imageData) => (
          <img src={imageData.image} alt="" />
        ))}
      </div>
    </div>
  );
}

export default Gallerys;
