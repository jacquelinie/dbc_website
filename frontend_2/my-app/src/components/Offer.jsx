import React from "react";
import "./Offer.css";
import { Link } from "react-router-dom";

const OfferPage = () => {
  return (
    <div className="home-container">

      {/* Mission Statement Box */}
      <div className="mission-box">
        <p>
          Every single part of this program is to educate and provide hope to young men around the world. A little investment and inspiration is all that is needed to change your life.
        </p>
      </div>

      {/* Video */}
      <div className="video-container">
        {/* Add your video embed code here */}
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/K74l26pE4YA"
          title="YouTube video player"
          frameborder="0"
          allowfullscreen
        ></iframe>
      </div>
      {/* Bordered Text Box */}
            <div className="bordered-box">
        <p>
          Become a man in 14 days with the Spartan workout challenge.
        </p>
      </div>

      {/* Button to Navigate to Upsell.jsx */}
      <Link to="/premiumOffer" className="button">
        Learn about the 14 day Spartan plan
      </Link>

      {/* Button to Navigate to Free.jsx */}
      <Link to="/confirmation" className="button">
        Get Started for Free
      </Link>
    </div>
  );
};

export default OfferPage;
