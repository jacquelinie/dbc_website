import React from "react";
import "./Free.css";
import { Link } from "react-router-dom";
import stock3 from "./media/stock3.jpg";

const FreePage = () => {
  return (
    <div className="free-container">
      <h1 className="large-title">Free Trial</h1>

      {/* Text Box */}
      <div className="text-box">
        <h2 className="subtitle">We have emailed you our free resources. They make take up to 5 minutes to appear in your inbox. </h2>
      </div>

      {/* Image */}
      <div className="image-container">
        <img
          src={stock3}
          alt="stock"
          className="image"
        />

      {/* Button for Navigation */}
        <Link to="/" className="button">
          Home
        </Link>
      </div>
    </div>
  );
};

export default FreePage;
