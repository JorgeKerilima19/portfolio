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
      <div className="container gap-2">
        <h3>About me</h3>
        <div className="container-row">
          <img src={profile} alt="" />
          <div className="gap-2 section__about-container">
            <p>I am a passionate self-taught web developer.</p>
            <p>
              My journey started out of curiosity to know how the internet and
              computers work. Along the way I acquired new technical skills and
              new ways of dealing with problems as well as enhancing my ability
              to solve problems.
            </p>
            <p>
              My strongest strength is that I like to face situations that
              challenges me and my skills, which will gain me more experience to
              solve future alike problems faster.
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
