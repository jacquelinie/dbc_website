import React from "react";
import "./Upsell.css";
import { Link } from "react-router-dom";
import webImg from "./icons/logo.jpg";

const UpsellPage = () => {
  return (
    <div className="upsell-container">
      {/* Large Title */}
      <h1 className="large-title">Upgrade to Premium</h1>

      {/* Image */}
      <div className="image-container">
        < img src={webImg}
          alt="Logo"
        />
      </div>

      {/* Subtitles */}
      <h2 className="subtitle">Unlock Features</h2>
      <h2 className="subtitle">Exclusive Access</h2>

      {/* Text Box */}
      <div className="text-box">
        <p>
          Every single part of this program is to educate and provide hope to young men around the world. A little investment and inspiration is all that is needed to change your life.
        </p>
      </div>

      {/* Dot Points */}
      <ul className="dot-points">
        <li>2 Week training program</li>
        <li>Masculinity Book</li>
        <li>Spartan Timetable</li>
        <li>Accountability tracker</li>
        <li>6 Week Diet Plan</li>
        <li>Online consultation</li>
        <li>Social Media group where you can put photos</li>
        <li>Online leader board where you can post results</li>
      </ul>

      {/* Image */}
      <div className="image-container">
        <img src="path/to/your/image.jpg" alt="Logo" className="image" />
      </div>

      {/* Buttons for Navigation */}
      <Link to="/paymentPremium" className="button">
        Learn More (Spartan General)
      </Link>
      <Link to="/paymentRegular" className="button">
        Upgrade Now (Spartan)
      </Link>
    </div>
  );
};

export default UpsellPage;
