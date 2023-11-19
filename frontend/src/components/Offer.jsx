import React from "react";
import "./Offer.css";
import { Link } from "react-router-dom";

const OfferPage = () => {
  return (
    <div className="home-container">
      {/* Large Title */}
      <h1 className="large-title">Welcome to Our Website</h1>

      {/* Mission Statement Box */}
      <div className="mission-box">
        <p>
          Our mission is to provide the best solutions for your needs.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>

      {/* Video */}
      <div className="video-container">
        {/* Add your video embed code here */}
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/VIDEO_ID"
          title="YouTube video player"
          frameborder="0"
          allowfullscreen
        ></iframe>
      </div>
      {/* Subtitle */}
      <h2 className="subtitle">Discover Our Services</h2>

      {/* Bordered Text Box */}
      <div className="bordered-box">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sagittis vel tortor nec auctor.
        </p>
      </div>

      {/* Button to Navigate to Free.jsx */}
      <Link to="/Free" className="button">
        Get Started for Free
      </Link>
    </div>
  );
};

export default OfferPage;
