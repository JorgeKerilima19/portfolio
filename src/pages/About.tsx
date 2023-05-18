import { useState } from "react";
import { Cv } from "../components";

import "./styles/about.css";

export const About = () => {
  const [showCV, setShowCV] = useState(false);

  const showComponentCV = () => {
    setShowCV(!showCV);
  };

  return (
    <section className="section__about">
      <div className="about-container">
        <h3>About me</h3>
        <div className="container">
          <img src="" alt="" />
          <div className="about-container">
            <p>
              I am a passionate self-taught web developer. My journey started out
              of curiosity to know how the internet and computers work. Along the
              way I acquired new technical skills and new ways of dealing with
              problems as well as enhancing my ability to solve problems.
            </p>
            <p>
              My strongest strength is that I like to face situations that
              challenges me and my skills, which will gain me more experience to
              solve future alike problems faster.
            </p>
            <p>

            
            </p>
          </div>
        </div>
      </div>
      <div>
        <button onClick={showComponentCV}>Show CV</button>
      </div>
      <>{showCV ? <Cv /> : ""}</>
    </section>
  );
};
