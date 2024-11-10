import React from "react";
import "../Component/Card.css";
import { FaCar } from "react-icons/fa";

const Card = () => {
  return (
    <div className="Card-Container">
      <div className="Card">
        <div className="CardLeft">
          <p>
            <FaCar />
          </p>
          <h4>largest dealership of car</h4>
          <h5>
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
            den fugit sed quia.
          </h5>
        </div>

        <div className="CardLeft">
          <p>
            <FaCar />
          </p>
          <h4>largest dealership of car</h4>
          <h5>
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
            den fugit sed quia.
          </h5>
        </div>
        <div className="CardLeft">
          <p>
            <FaCar />
          </p>
          <h4>largest dealership of car</h4>
          <h5>
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
            den fugit sed quia.
          </h5>
        </div>
      </div>
    </div>
  );
};

export default Card;
