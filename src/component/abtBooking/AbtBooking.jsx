import React from 'react';
import downIcon from '../../assets/images/down icon.png';
import Button from '../Button/Button';
import './abtBooking.css';

function AbtBooking() {
  return (
    <div>
      <div className="aboutBody__translated">
        <div className="aboutBody__ul-div">
          <ul className="notshow">
            <li>Guests</li>
            <li>
              2 Adult <img src={downIcon} alt="down_icon" />
            </li>
          </ul>
          <ul className="notshow">
            <li>Date</li>
            <li>
              12-13 April 2021 <img src={downIcon} alt="down_icon" />
            </li>
          </ul>
          <ul>
            <li>Package</li>
            <li>
              All{' '}
              <img className="last__imageIcon" src={downIcon} alt="down_icon" />
            </li>
          </ul>
        </div>
        <div className="aboutBody__translated--btn">
          <Button text="booknow" />
        </div>
      </div>
    </div>
  );
}

export default AbtBooking;
