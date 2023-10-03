import React from "react";
import "./Free.css";
import { Link } from "react-router-dom";

const Free = () => {
  return (
    <div className="free-container">
      <h1 className="large-title">Free Trial</h1>
      
      {/* First Text Box */}
      <div className="text-box">
        <h2 className="subtitle">Textbox 1</h2>
        <textarea
          className="text-input"
          rows="5"
          placeholder="Enter your text here..."
        ></textarea>
      </div>

      {/* Second Text Box */}
      <div className="text-box">
        <h2 className="subtitle">Textbox 2</h2>
        <textarea
          className="text-input"
          rows="5"
          placeholder="Enter more text here..."
        ></textarea>
      </div>

      {/* Button for Navigation */}
      <Link to="/" className="button">
        Go Back Home
      </Link>
    </div>
  );
};

export default Free;
