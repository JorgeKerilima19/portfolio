import { useState } from "react";
import { Cv } from "../components";

import "./styles/about.css"

export const About = () => {
  const [showCV, setShowCV] = useState(false);

  const showComponentCV = () => {
    setShowCV(!showCV);
  };

  return (
    <section className="section__about">
      <div className="about-container">
        <h3>About me</h3>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor nobis
          consequatur obcaecati iusto quia officiis reprehenderit doloremque
          architecto nulla? Aut iste laudantium veritatis eaque tenetur libero
          quidem ut placeat officiis.
        </p>
      </div>
      <div>
        <button onClick={showComponentCV}>Show CV</button>
      </div>
      <>{showCV ? <Cv /> : ""}</>
    </section>
  );
};
