import './contactInfo.css';
import Button from '../../../component/Button/Button';
import greenFb from '../../../assets/images/green fb.png';
import greenIg from '../../../assets/images/green ig.png';
import greenTweet from '../../../assets/images/green tweetter.png';
import greenLinkendin from '../../../assets/images/green linkedin.png';
import greenMail from '../../../assets/images/green mail.png';
import greenPhone from '../../../assets/images/green phone.png';
import whiteDownIcon from '../../../assets/images/white down icon.png';

function contactForm() {
  return (
    <form className="contactForm">
      <header>Contact us</header>
      <div className="contactForm__topInputs">
        <div className="sub">
          <p>First Name</p>
          <input
            type="text"
            id="firstname"
            placeholder="Input your First Name in Here"
          />
        </div>
        <div className="sub">
          <p>Last Name</p>
          <input
            type="text"
            id="lastname"
            placeholder="Input your Last Name in Here"
          />
        </div>
      </div>

      <p>Email Address</p>
      <input
        type="text"
        id="email"
        placeholder="Input your Email Address in Her"
      />

      <p>Phone Number</p>
      <div className="labelForPhoneNumber">
        <button type="submit">
          +250 <img src={whiteDownIcon} alt="a_white_down_icon" />
        </button>
        <input type="text" placeholder="Iput your Phone Number" />
      </div>
      <p>Message</p>
      <textarea name="30" id="message" cols="30" rows="10" />
      <Button text="Submit" color="#c7923e" />
    </form>
  );
}

function CreateContactCards() {
  return (
    <div className="contactCards">
      <div className="contactCards__card contactCards__card1">
        <header>Social media</header>
        <div className="contactCards__icons">
          <img src={greenFb} alt="facebook_icon" />
          <img src={greenIg} alt="istagram_icon" />
          <img src={greenTweet} alt="tweetter_icon" />
          <img src={greenLinkendin} alt="linkedIn_icon" />
        </div>
      </div>

      <div className="contactCards__card contactCards__card2">
        <header>Email & phone</header>
        <p>
          <img src={greenPhone} alt="phone__icon" />
          +250 784 688 641
        </p>
        <p>
          <img src={greenMail} alt="email_icon" />
          bbonteemma@gmail.com
        </p>
      </div>

      <div className="contactCards__card contactCards__card3">
        <header>Address</header>
        <p>kk 600 st</p>
        <p>Kigali, Rwanda</p>
      </div>
    </div>
  );
}

export default {
  contactForm,
  CreateContactCards,
};
