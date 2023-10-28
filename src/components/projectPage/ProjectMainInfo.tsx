import { Project } from "../../helpers/dataProjects";
import { Dispatch, SetStateAction, useEffect } from "react";

export const ProjectMainInfo = ({
  project,
  setColor,
}: {
  project: Project;
  setColor: Dispatch<SetStateAction<string>>;
}) => {
  const pickColor = () => {
    const container = document.getElementById("logo-container");
    if (container && container.firstChild instanceof SVGElement) {
      const color = container.firstChild.getAttribute("fill");
      if (color !== null) {
        setColor(color);
      } else {
        setColor("defaultColor");
      }
    }
  };

  useEffect(() => {
    pickColor();
  }, [project]);

  return (
    <div className="project-info__main-container flex-col items-center gap-10 py-10 px-5">
      <div id="logo-container">{project?.logo}</div>
      <div className="flex-col gap-3">
        <h2 className="text-center">{project?.name}</h2>
        <span className="text-justify">{project?.overview}.</span>
        <ul className="grid gap-2 list-dot">
          <h3>Technologies used</h3>
          {project?.tools?.map((tool, index) => (
            <li key={index} className="pl-5 list-inside">
              {tool}
            </li>
          ))}
        </ul>
        <div className="flex justify-evenly gap-2">
          <button className="project-link__button py-2">Visit site</button>
          <button className="project-link__button py-2">Code source</button>
        </div>
      </div>
    </div>
  );
};
