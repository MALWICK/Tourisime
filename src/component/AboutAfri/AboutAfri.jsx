import React from 'react';
import './AboutAfri.css';
import Cabin from '../../assets/images/Image Placeholder (1).png';
import MonkeyBridge from '../../assets/images/Image Placeholder (2).png';
import Payesage from '../../assets/images/Image Placeholder1.jpg';

function AboutAfri() {
  return (
    <div className="aboubtAfri">
      <h1>Welcome to Africa Wizzy Safari</h1>
      <div className="breaker" />
      <div className="afriContainer">
        <div className="first__welcome">
          <div className="image__container">
            <img src={Cabin} alt="cabin" />
          </div>
          <div className="afri__text">
            <p>
              Welcome to Africa Wizzy Safari, a leading tourism company based in
              Rwanda. We have been in business for over 5 years and are
              committed to providing top-quality tours and services to our
              clients. Our mission is to showcase the beauty and culture of
              Rwanda to visitors from around the world, and to contribute to the
              sustainable development of the country through responsible tourism
              practices.
            </p>
          </div>
        </div>
        <div className="second__welcome">
          <div className="afri__text">
            <p>
              At Africa Wizzy safari, we offer a wide range of tours and
              activities, including cultural and historical tours, wildlife
              safaris, mountain gorilla trekking, and more. Our experienced and
              knowledgeable guides will ensure that you have a safe and
              enjoyable experience while exploring the stunning landscapes and
              rich culture of Rwanda.
            </p>
          </div>
          <div className="image__container">
            <img src={MonkeyBridge} alt="cabin" />
          </div>
        </div>
        <div className="third__welcome">
          <div className="image__container">
            <img src={Payesage} alt="cabin" />
          </div>
          <div className="afri__text">
            <p>
              We are proud to have received numerous awards and accolades for
              our commitment to excellence, including the RDD award and the
              Excellence award. Thank you for choosing Africa Wizzy Safari for
              your travel needs in Rwanda. We look forward to welcoming you on
              one of our tours soon!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutAfri;
