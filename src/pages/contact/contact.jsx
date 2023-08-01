/* eslint-disable import/no-duplicates */
import './contact.css';
import contactComponents from './contactInFor/ContactInfo';
import Heading from '../../component/heading/Heading';
import Hero from '../../component/hero/Hero';
import Details from '../../component/detailnavbar/Detailnavbar';
import Sticky from '../../component/stickybar/Stickybar';
import Footer from '../../component/Footer/Footer';

function Contact() {
  return (
    <>
      <Sticky />
      <Details />
      <Hero text1="Contact Us" text2="Home" spanText="Contact" />
      <div className="contactBody">
        <Heading
          text3="Get in Touch"
          paragraph="We would love to hear from you! If you have any comments or suggestions about our website or our tours, please don't hesitate to get in touch. We are always looking for ways to improve and make your travel experience even better."
        />
        <contactComponents.contactForm />
        <contactComponents.CreateContactCards />
      </div>
      <Footer />
    </>
  );
}

export default Contact;
