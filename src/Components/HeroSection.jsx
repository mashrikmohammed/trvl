import React from "react";
import "./HeroSection.css";
import { Buttton } from "./Button";
import "../App.css";
import { FaRegCirclePlay } from "react-icons/fa6";

function HeroSection() {
  return (
    <div className="hero-container">
      <video src="/Videos/video-1.mp4" autoPlay loop muted></video>
      <h1>ADVENTURE AWAITS</h1>
      <p>What are you waiting for</p>
      <div className="hero-btns">
        <Buttton
          className="btns "
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          GET STARTED
        </Buttton>
        <Buttton
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
        >
          WATCH TRAILER{" "}
          <i>
            <FaRegCirclePlay className="lg" />
          </i>
        </Buttton>
      </div>
    </div>
  );
}

export default HeroSection;
