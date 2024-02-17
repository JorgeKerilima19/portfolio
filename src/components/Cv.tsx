import "../pages/styles/cv.css";
import {
  Perfil,
  Profile,
  Skills,
  Education,
  Experience,
  Strengths,
} from "./Curriculum";

export const Cv = () => {
  return (
    <div className="cv-container">
      <Profile />
      <Perfil />
      <Education />
      <Experience />
      <Skills />
      <Strengths />
    </div>
  );
};
