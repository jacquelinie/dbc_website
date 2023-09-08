import React, { useState, useEffect } from "react";
import "./Landing.css";
import Axios from "axios";
import { useNavigate } from "react-router-dom";

export const Login = (props) => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault(); /* Prevents page refresh on submit */
    try {
      // Post Request
      const response = await Axios.post(
        "http://h13a-sox-sending-api.ap-southeast-2.elasticbeanstalk.com/auth/login",
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
        //console.log(err);
        console.log(err);
        alert("Invalid Email format");
      } else {
        console.log(err);
      }
    }
  };

  return (
    <div className="auth-form-container">
      <h2 className="large-text-white">Login</h2>
      <form className="login-form" onSubmit={handleSubmit}>
        {/* Email */}
        <label htmlFor="Email" className="title-white">
          Name
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
