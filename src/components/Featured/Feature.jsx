import React from "react";
import "./Feature.style.css";
import cardImage from "../../assets/card-image.png";
const Feature = () => {
  return (
    <div className="feature-container">
      <div className="feature-card">
        <div className="card-image">
          <img src={cardImage} alt="" />
        </div>
        <div className="card-info">
          <div className="card-info-header">
            <h4>Should I Buy a New Car or Lease a New Car in 2021?</h4>
          </div>
          <div className="card-info-text">
            <p>
              We provide a full range of front end mechanical repairs for all
              makes and models of cars, no matter the cause. This includes, We
              provide a full range of front end mechanical.
            </p>
          </div>
          <button>Read more</button>
        </div>
      </div>
    </div>
  );
};

export default Feature;
