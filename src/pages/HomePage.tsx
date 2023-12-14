import "./styles/home.css";
import profile from "/assets/1.png";
import { Skills } from "../components/Skills";

export const HomePage = () => {
  return (
    <section className="section__homepage">
      <div className="homepage-container">
        <h2 className="homepage-subtitle">Hello World</h2>
        <h1 className="homepage-title">
          I am <span>Jorge</span> Quispe
        </h1>
        <p className="homepage-intro">
          A self-taught frontend developer, dedicated to spending nights
          learning about the beautiful world of web development.
        </p>
        <Skills />
      </div>
      <div className="homepage-container home-img">
        <img className="homepage__img" src={profile} alt="" />
      </div>
    </section>
  );
};
