import {
  htmlSvg,
  cssSvg,
  javascriptSvg,
  reactSvg,
  tailWindSvg,
  typeScriptSvg,
  nodeSvg,
  materialSvg,
} from "../../helpers/svgList";

const skills = [
  { id: 1, name: "Javascript", icon: javascriptSvg },
  { id: 2, name: "Html", icon: htmlSvg },
  { id: 3, name: "Css", icon: cssSvg },
  { id: 4, name: "React", icon: reactSvg },
  { id: 5, name: "Typescript", icon: typeScriptSvg },
  { id: 6, name: "Material UI", icon: materialSvg },
  { id: 7, name: "Tailwind Css", icon: tailWindSvg },
  { id: 8, name: "Node Js", icon: nodeSvg },
];

const languages = {
  Spanish: "Native",
  English: "Intermediate",
  Portuguese: "Intermediate",
  German: "Beginner",
};

export const Skills = () => {
  return (
    <div className="grid gap-2">
      <h3>Skills</h3>
      <div>
        <h4>Technical Skills</h4>
        <div className="flex flex-wrap">
          {skills.map((skill) => (
            <div key={skill.id} className="flex items-center mr-5">
              <span className="mr-4">{skill.name}</span>
              {skill.icon}
            </div>
          ))}
        </div>
      </div>
      <div>
        <h4>Languages</h4>
        <ul>
          {Object.entries(languages).map(([lang, level]) => (
            <li key={lang}>
              <span>{lang}</span>
              <span>{level}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
