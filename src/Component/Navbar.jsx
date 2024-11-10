import React from "react";
import "../component/NavBar.css";
import { IoMdMenu } from "react-icons/io";

const Navbar = () => {
  return (
    <div className="Navbar">
      <div className="navTop">
        <div className="navTopLeft">
          <p>
            <IoMdMenu />
          </p>
          <h2>CARVILLA</h2>
        </div>
        <div className="navTopRight">
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Service</a>
            </li>
            <li>
              <a href="#">Featured Cars</a>
            </li>
            <li>
              <a href="#">New Cars</a>
            </li>
            <li>
              <a href="#">Brands</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="navMid">
        <h2>GET YOUR DESIRED CAR IN RESONABLE PRICE</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <button>Contact Us</button>
      </div>

      <div className="NavBottom">
        <div className="NavBottom-Wrap">
          <div className="NavBottom1">
            <div>
              <p>Select Year</p>

              <select name="" id="">
                <option  value="">2018</option>
                <option value="">2017</option>
                <option value="">2016</option>
              </select>
            </div>
            <div>
              <p>Body style</p>

              <select name=" " id="">
                <option value="">style</option>
                <option value="">sedan</option>
                <option value="">Roadster</option>
              </select>
            </div>
          </div>
          <div className="NavBottom2">
            <div>
              <p>Select Make</p>

              <select name="" id="">
                <option value="">Make</option>
                <option value="">Toyota</option>
                <option value="">Holden</option>
              </select>
            </div>
            <div>
              <p>Car Condition</p>

              <select name=" " id="">
                <option value="">Condition</option>
                <option value="">Sometion</option>
                <option value="">S-----</option>
              </select>
            </div>
          </div>
          <div className="NavBottom3">
            <div>
              <p>Select Model</p>

              <select name="" id="">
                <option value="">Model</option>
                <option value="">Kia-Rio</option>
                <option value="">Ford</option>
              </select>
            </div>
            <div>
              <p>Select Price</p>
              <select name=" " id="">
                <option value="">Price</option>
                <option value="">$399393</option>
                <option value="">$299292</option>
              </select>
            </div>
          </div>
          <div className="NavBottom4">
            <a href="#"><button>Search</button></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
