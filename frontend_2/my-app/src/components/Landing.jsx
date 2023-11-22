import React, { useState } from "react";
import "./Landing.css";
import Axios from "axios";
import { useNavigate } from "react-router-dom";
import logo from "./icons/logo.jpg";

const LandingPage = (props) => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault(); /* Prevents page refresh on submit */
    try {
      // Post Request
      const response = await Axios.post(
        "http://dreambodycoaching-env.eba-c3irpcdi.ap-southeast-2.elasticbeanstalk.com/signup",
        {
          email: email,
          name: name,
        }
      );
      // Handle response {200}
      console.log(response);
      //setReport(response.data);
      localStorage.setItem("userDetails", JSON.stringify(response.data));
      navigate("/information", { state: { report: "HelloWorld" } });
    } catch (err) {
      // Handle error
      if (err.response.data.message === "<p>Invalid Email format</p>") {
        console.log(err);
        alert("Invalid Email format");
      } else {
        console.log(err);
      }
    }
  };

  return (
    <div className="auth-form-container">
      {/* Left */}
      <div className="left">
        <h2 className="large-text-white">Welcome to DBC</h2>

        {/* Text Box */}
        <div className="text-box">
          <p>
            Dream body coaching: From couch to centre of attention in 30 days, get your dream physique now!
          </p>
        </div>

        {/* Bullet Points */}
        <ul className="bullet-points">
          <li>6-Week training program </li>
          <li>Masculinity Book</li>
          <li>Spartan Timetable</li>
          <li>Accountability tracker</li>
          <li>6 Week Diet Plan</li>
          <li>Online consultation </li>
          <li>Social Media group where you can put photos</li>
          <li>Online leader board where you can post results</li>
        </ul>
      </div>

      {/* Right */}
      <div className="right">

        {/* Image */}
        <div className="image-container">
          <img
            src={logo}
            alt="Logo"
            className="image"
          />
        </div>

        {/* Input Boxes */}
        <form className="login-form" onSubmit={handleSubmit}>
          {/* Email */}
          <label htmlFor="Email" className="title-white">
            Email
          </label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="youremail@gmail.com"
            id="email"
            name="email"
          ></input>

          {/* Name */}
          <label htmlFor="Name" className="title-white">
            Name
          </label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="name"
            placeholder="First and Last Name"
            id="name"
            name="name"
          ></input>

          {/* Submit */}
          <button className="subtitle-steel-blue" type="submit">
            Get my Free Guides!
          </button>
        </form>
      </div>
    </div>
  );
};

export default LandingPage;

