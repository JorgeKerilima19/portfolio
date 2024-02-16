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
      <div className="grid gap-1 pl-4">
        <h4 className="text-500">Technical Skills</h4>
        <ul className="flex flex-wrap items-center list-dot">
          {skills.map((skill) => (
            <li key={skill.id} className="flex gap-1 mr-4 items-center">
              <span>{skill.name}</span>
              {skill.icon}
            </li>
          ))}
        </ul>
      </div>
      <div className="grid gap-1 pl-4 items-start justify-start">
        <h4 className="text-500">Languages</h4>
        <ul>
          {Object.entries(languages).map(([lang, level]) => (
            <li key={lang} className="w-full flex justify-btw gap-5">
              <span>{lang}</span>
              <span>{level}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
