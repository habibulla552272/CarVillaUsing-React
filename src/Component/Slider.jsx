import React from "react";
import Image from "../assets/ncm2.png";
import '../Component/slider.css'
const Slider = () => {
  return (
    <div>
      <div className="Sliders">
        <h3>checkout the latest cars</h3>
        <h2>NEWEST CARS</h2>
        <div className="Slider">
          <div className="sliderLeft">
            <img src={Image} alt="" />
          </div>
          <div className="sliderRight">
            <h1>Chevrolet CAMARO 2024</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
              magnam itaque neque eius cumque doloribus quae tempore explicabo,
              maiores dignissimos.
            </p>
            <button>View Details</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
