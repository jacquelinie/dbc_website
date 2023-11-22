import React, { useState } from "react";
import "./SpartanGeneral.css";
import Axios from "axios";
import { useNavigate } from "react-router-dom";

const SpartanGeneralPage = () => {
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
    <div className="spartan-container">
      {/* Large Title */}
      <h1 className="large-title">Spartan General</h1>

      {/* Video */}
      <div className="video-container">
        {/* Add your video embed code here */}
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/4utHavh8r3o"
          title="YouTube video player"
          frameborder="0"
          allowfullscreen
        ></iframe>
      </div>

      {/* Subtitle */}
      <h2 className="subtitle">Contact Information</h2>

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

        {/* Full Name */}
        <label htmlFor="Name" className="title-white">
          Full Name
        </label>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="name"
          placeholder="First and Last Name"
          id="name"
          name="name"
        ></input>

        {/* Paypal Link */}
        <a href="https://www.paypal.com/paypalme/DREAMBODYCOACHING?country.x=AU&locale.x=en_AU&fbclid=IwAR2cMlsgCK2J8lsT0BVFluN43rrdDzRLSVIPCg_Z2I4PEOznOYVn3aF7i-8" 
           class="subtitle-steel-blue">
          Proceed to payment!
        </a>
      </form>
    </div>
  );
};

export default SpartanGeneralPage;
