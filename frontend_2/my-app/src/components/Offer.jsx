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
          Dream body coaching: From Couch to Centre of Attention in 30 days have your dream physique now
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
      {/* Button to Navigate to Upsell.jsx */}
      <Link to="/premiumOffer" className="button">
        Start your 14 day spartan plan
      </Link>

      {/* Bordered Text Box */}
      <div className="bordered-box">
        <p>
          The Spartan Workout Challenge become a man in 14 days
        </p>
      </div>

      {/* Button to Navigate to Free.jsx */}
      <Link to="/confirmation" className="button">
        Get Started for Free
      </Link>
    </div>
  );
};

export default OfferPage;
