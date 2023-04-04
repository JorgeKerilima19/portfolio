import "./styles/skills.css";
import {
  codingSkills,
  designSkills,
  learningSkills,
} from "../helpers/dataSkills";

export const Skills = () => {
  // https://devicon.dev/
  return (
    <section className="section__skills">
      <div className="skills-container">
        <article className="container-skills">
          <h2 className="container-skills__title">Coding Skills</h2>
          <ul className="skills-container__svg-container">
            {codingSkills.map((skill) => (
              <li key={skill.name} className="skill-learning__item">
                {skill.skillSvg}
                <span>{skill.name}</span>
              </li>
            ))}
          </ul>
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
