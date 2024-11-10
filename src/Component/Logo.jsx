import React from 'react'
import '../Component/Logo.css'
import Logo1 from "../assets/br1.png"
import Logo2 from "../assets/br2.png";
import Logo3 from "../assets/br3.png";
import Logo4 from "../assets/br4.png";
import Logo5 from "../assets/br5.png";
import Logo6 from "../assets/br6.png";

const Logo = () => {
  return (
    <div className="Logo">
      <div className="Logo1">
        <img src={Logo1} alt="" />
      </div>
      <div className="Logo2">
        <img src={Logo2} alt="" />
      </div>
      <div className="Logo3">
        <img src={Logo3} alt="" />
      </div>
      <div className="Logo4">
        <img src={Logo4} alt="" />
      </div>
      <div className="Logo5">
        <img src={Logo5} alt="" />
      </div>
      <div className="Logo6">
        <img src={Logo6} alt="" />
      </div>
    </div>
  );
}

export default Logo
