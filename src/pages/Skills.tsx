import "./styles/skills.css";
import {
  codingSkills,
  designSkills,
  learningSkills,
} from "../helpers/dataSkills";

export const Skills = () => {
  return (
    <section className="section__skills">
      <div className="skills-container">
        <article className="skills__coding">
          <h2>Coding Skills</h2>
          <ul>
            {codingSkills.map((skill) => (
              <li>{skill.name}</li>
            ))}
          </ul>
        </article>
        <article className="skills__design">
          <h2>Design Skills</h2>
          <ul>
            {designSkills.map((skill) => (
              <li>{skill.name}</li>
            ))}
          </ul>
        </article>
        <article className="skills__learning">
          <h2>Currently learning</h2>
          <ul>
            {learningSkills.map((skill) => (
              <li>{skill.name}</li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  );
};
