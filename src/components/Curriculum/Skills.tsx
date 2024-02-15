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

export const Skills = () => {
  return (
    <div>
      {skills.map((skill) => (
        <div key={skill.id} className="flex items-center">
          <span>{skill.name}</span>
          {skill.icon}
        </div>
      ))}
    </div>
  );
};
