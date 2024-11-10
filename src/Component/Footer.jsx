import React from "react";
import "../Component/Footer.css";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { SlSocialPintarest } from "react-icons/sl";

const Footer = () => {
  return (
    <div className="Footer">
      <hr />
      <div className="footerdiv">
        <div>
          <p>
            © <a href="#">Your Site Name</a>. All Rights Reserved. Designed by
            <a href="3"> HTML Codex</a>
          </p>
        </div>
        <div className="FotterLogo">
          <p><FaFacebookF /></p>
          <p><FaInstagram />
          </p>
          <p><FaLinkedinIn />
          </p>
          <p><SlSocialPintarest /></p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
