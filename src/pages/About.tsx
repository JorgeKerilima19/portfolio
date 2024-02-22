import { useState } from "react";
import { Cv } from "../components";

import profile from "/assets/1.png";

import "./styles/about.css";

export const About = () => {
  const [showCV, setShowCV] = useState(false);

  const showComponentCV = () => {
    setShowCV(!showCV);
  };

  return (
    <section className="section__about pb-10">
      <div className="flex-col gap-2">
        <h3 className="text-subtitle text-500 text-center">About me</h3>
        <div className="container-row">
          <img src={profile} alt="" />
          <div className="gap-3 section__about-container">
            <p>I am a passionate self-taught web developer.</p>
            <p>
              Moved by my curiosity about knowing how the internet and computers
              work, I started my studies in this beautiful world.
            </p>
            <p>
              I like to face situations that challenge me and my skills, which
              will give me more experience in solving future problems faster.
            </p>
          </div>
        </div>
      </div>
      <div>
        <button onClick={showComponentCV} className="about-cv__button">
          {showCV ? "Hide CV" : "Show CV"}
        </button>
      </div>
      <>{showCV ? <Cv /> : ""}</>
    </section>
  );
};
