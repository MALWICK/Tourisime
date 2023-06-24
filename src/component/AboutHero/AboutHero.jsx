import React from 'react';
import './aboutHero.css';
import Monkey from '../../assets/images/Image Placeholder.png';

function AboutHero() {
  return (
    <div className="heroAbt">
      <div className="heroAbtContainer">
        <div className="leftHero">
          <div className="leftHero__container">
            <p>We are dedicated to providing the best travel experience.</p>
            <p className="heroP">Discover the Land of a Thousand Hills</p>
          </div>
        </div>
        <div className="rightHero">
          <img src={Monkey} alt="resa" />
        </div>
      </div>
    </div>
  );
}

export default AboutHero;
