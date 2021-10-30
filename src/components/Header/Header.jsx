import React from "react";
import "../Header/Header.styles.css";
const Header = () => {
  return (
    <div className="header-container">
      <div className="header-image">
        <div className="header-image-overlay">
          <h1>Our Blog</h1>
        </div>
      </div>
      <div className="header-intro-container">
        <div className="header-intro">
          <h4>Diagnose Car Problems If You Don’t Know Much About Cars</h4>
          <p>
            We provide a full range of front end mechanical repairs for all
            makes and models of cars, no matter the cause. This includes, We
            provide a full range of front end mechanical.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header;
