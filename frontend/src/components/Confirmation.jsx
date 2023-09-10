import React from "react";
import "./Confirmation.css"; // import CSS file
import SuccessImg from "../icons/Success.png";
import ReturnHome from "../icons/ReturnHome.png";
import { useNavigate } from "react-router-dom";

export const Success = (props) => {
  const navigate = useNavigate();

  return (
    <div className="success-page">
      <h1 className="large-text-white">Your Action was Successful!</h1>
        <div>
            <img
              className="tick-image"
              src={SuccessImg}
              alt="Success"

            />

            <return-button
                className="return-home-button"
                onClick={() => navigate("../")}

              >
                <img
                  src={ReturnHome}
                  alt="Return Home"
                />
            </return-button>
        </div>
    </div>
  );
}
