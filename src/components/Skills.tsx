import {
  codingSkills,
  designSkills,
  learningSkills,
  Skill,
} from "../helpers/dataSkills";

import { useEffect, useState } from "react";

export const Skills = () => {
  // https://devicon.dev/

  const [languages, setLanguages] = useState<Skill[]>([]);
  const [frameworkLibraries, setFrameworkLibraries] = useState<Skill[]>([]);

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
    <section className="flex-col gap-5">
      <article className="flex-col gap-4">
        <header className="skills-title">Code:</header>
        <div className="flex justify-btw">
          <ul className="flex gap-3">
            {languages.map((language) => (
              <li key={language.name}>{language.skillSvg}</li>
            ))}
          </ul>
          <ul className="flex gap-3">
            {frameworkLibraries.map((framework) => (
              <li key={framework.name}>{framework.skillSvg}</li>
            ))}
          </ul>
        </div>
      </article>
      <div className="flex justify-btw">
        <article className="flex-col gap-4">
          <header className="skills-title">Design:</header>
          <ul className="flex gap-3">
            {designSkills.map((skill) => (
              <li key={skill.name}>{skill.skillSvg}</li>
            ))}
          </ul>
        </article>
        <article className="flex-col gap-4">
          <header className="skills-title">Learning:</header>
          <ul className="flex gap-8">
            {learningSkills.map((skill) => (
              <li key={skill.name}>{skill.skillSvg}</li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  );
};
