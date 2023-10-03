import React from "react";
import "./Upsell.css";
import { Link } from "react-router-dom";

const UpsellPage = () => {
  return (
    <div className="upsell-container">
      {/* Large Title */}
      <h1 className="large-title">Upgrade to Premium</h1>

      {/* Subtitles */}
      <h2 className="subtitle">Unlock Premium Features</h2>
      <h2 className="subtitle">Exclusive Access</h2>

      {/* Text Box */}
      <div className="text-box">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sagittis vel tortor nec auctor.
        </p>
      </div>

      {/* Dot Points */}
      <ul className="dot-points">
        <li>Feature 1</li>
        <li>Feature 2</li>
        <li>Feature 3</li>
      </ul>

      {/* Image */}
      <div className="image-container">
        <img src="path/to/your/image.jpg" alt="Image Description" className="image" />
      </div>

      {/* Buttons for Navigation */}
      <Link to="/SpartanGeneral" className="button">
        Learn More (Spartan General)
      </Link>
      <Link to="/Spartan" className="button">
        Upgrade Now (Spartan)
      </Link>
    </div>
  );
};

export default UpsellPage;
