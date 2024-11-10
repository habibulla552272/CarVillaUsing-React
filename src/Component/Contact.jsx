import React from "react";
import "../Component/Contact.css";
import { FaArrowRight } from "react-icons/fa";




const Contact = () => {
  return (
    <div className="Contact">
      <div className="ContactDiv">
        <div className="contactDiv1">
          <h2>CARVILLA</h2>
          <p>
            Ased do eiusm tempor incidi ut labore et dolore magnaian aliqua. Ut
            enim ad minim veniam.
          </p>
          <p>
            info@themesine.com <br /> +1 (885) 2563154554
          </p>
        </div>
        <div className="contactDiv2">
          <h2>About Devloon</h2>
          <ul>
            <li>About Us</li>
            <li>Career</li>
            <li>Terms of service</li>
            <li>privacy policy</li>
          </ul>
        </div>
        <div className="contactDiv3">
          <h2>TOP BRANDS</h2>
          <div className="contactDiv3Bottom">
            <div className="contactDiv3Bottom1">
              <ul>
                <li>BMW</li>
                <li>Lamborghini</li>
                <li>Camaro</li>
                <li>Audi</li>
                <li>Infiniti</li>
                <li>Nissan</li>
              </ul>
            </div>
            <div className="contactDiv3Bottom2">
              <ul>
                <li>Ferrari</li>
                <li>Porsche</li>
                <li>Land Rover</li>
                <li>Audi</li>
                <li>Infiniti</li>
                <li>Opel</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="contactDiv4">
          <h2>News Letter</h2>
          <p>Subscribe to get latest news update and informations</p>
          <div className="contactDiv4Input">
            <input type="email" placeholder="Add Email" />
            <p><FaArrowRight /></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
