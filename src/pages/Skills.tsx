import "./styles/skills.css";
import {
  codingSkills,
  designSkills,
  learningSkills,
} from "../helpers/dataSkills";

import { useEffect, useState } from "react";

export const Skills = () => {
  // https://devicon.dev/

  const [languages, setLanguages] = useState([]);
  const [frameworkLibraries, setFrameworkLibraries] = useState([]);

  const filterSkills = (codingSkills: any) => {
    setFrameworkLibraries(
      codingSkills.filter((skill: any) => skill.type === "library/framework")
    );
    setLanguages(
      codingSkills.filter((skill: any) => skill.type === "language")
    );
  };

  useEffect(() => {
    filterSkills(codingSkills);
  }, []);

  return (
    <section className="section__skills">
      <div className="skills-container">
        <article className="container-skills">
          <h2 className="container-skills__title">Coding Skills</h2>
          <div className="skills-container__svg-container">
            <h3>Languages</h3>
            <ul>
              {languages.map((skill) => (
                <li key={skill.name} className="skill-learning__item">
                  {skill.skillSvg}
                  <span>{skill.name}</span>
                </li>
              ))}
            </ul>
            <h3>Frameworks/Libraries</h3>
            <ul>
              {frameworkLibraries.map((skill) => (
                <li key={skill.name} className="skill-learning__item">
                  {skill.skillSvg}
                  <span>{skill.name}</span>
                </li>
              ))}
            </ul>
          </div>
        </article>
        <article className="container-skills">
          <h2 className="container-skills__title">Design Skills</h2>
          <ul className="skills-container__svg-container">
            {designSkills.map((skill) => (
              <li key={skill.name} className="skill-learning__item">
                {skill.skillSvg}
                <span>{skill.name}</span>
              </li>
            ))}
          </ul>
        </article>
        <article className="container-skills">
          <h2 className="container-skills__title">Currently learning</h2>
          <ul className="skills-container__svg-container">
            {learningSkills.map((skill) => (
              <li key={skill.name} className="skill-learning__item">
                {skill.skillSvg}
                <span>{skill.name}</span>
              </li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  );
};
