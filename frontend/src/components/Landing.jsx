import React, { useState } from "react";
import "./Landing.css";
import Axios from "axios";
import { useNavigate } from "react-router-dom";

const LandingPage = (props) => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault(); /* Prevents page refresh on submit */
    try {
      // Post Request
      const response = await Axios.post(
        "http://127.0.0.1:8080/signup",
        {
          email: email,
          name: name,
        }
      );
      // Handle response {200}
      console.log(response);
      //setReport(response.data);
      localStorage.setItem("userDetails", JSON.stringify(response.data));
      navigate("/", { state: { report: "HelloWorld" } });
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
      <h2 className="large-text-white">Welcome to DBC</h2>

      {/* Text Box */}
      <div className="text-box">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
          sagittis vel tortor nec auctor.
        </p>
      </div>

      {/* Bullet Points */}
      <ul className="bullet-points">
        <li>Point 1: Lorem ipsum dolor sit amet</li>
        <li>Point 2: Consectetur adipiscing elit</li>
        <li>Point 3: Proin sagittis vel tortor nec auctor</li>
      </ul>

      {/* Image */}
      <div className="image-container">
        <img
          src="path/to/your/image.jpg"
          alt="Image Description"
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
  );
};

export default LandingPage;

