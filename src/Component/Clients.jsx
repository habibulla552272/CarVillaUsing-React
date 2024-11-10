import React from "react";
import "../Component/clients.css"
import ClientImage1 from "../assets/c1.png";
import ClientImage2 from "../assets/c2.png";
import ClientImage3 from "../assets/c3.png";

const Clients = () => {
  return (
    <div className="Clients">
      <h1>What Our Clients Say</h1>
      <div className="Clients-Card">
        <div className="client-card1">
          <img src={ClientImage1} alt="" />
          <h4>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
            aliquam nam fugiat, laborum repellat fuga. Aliquid earum ducimus rem
            dolorum?
          </h4>
          <p>John Doe</p>
          <p>Washington</p>
        </div>
        <div className="client-card2">
          <img src={ClientImage1} alt="" />
          <h4>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
            aliquam nam fugiat, laborum repellat fuga. Aliquid earum ducimus rem
            dolorum?
          </h4>
          <p>John Doe</p>
          <p>Washington</p>
        </div>
        <div className="client-card3">
          <img src={ClientImage1} alt="" />
          <h4>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
            aliquam nam fugiat, laborum repellat fuga. Aliquid earum ducimus rem
            dolorum?
          </h4>
          <p>John Doe</p>
          <p>Washington</p>
        </div>
      </div>
    </div>
  );
};

export default Clients;
