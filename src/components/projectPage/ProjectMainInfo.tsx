import React from "react";
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
        <h2 className="text-center text-600">{project?.name}</h2>
        <span className="text-justify">{project?.overview}.</span>
        <div className="flex gap-6 flex-wrap">
          <div className="grid gap-5">
            <h3 className="text-500">Tools used</h3>
            <div className="flex flex-wrap gap-3">
              {project?.tools?.map((tool, index) => (
                <React.Fragment key={index}>{tool}</React.Fragment>
              ))}
            </div>
          </div>
          <ul className="grid gap-2 list-dot">
            <h3 className="text-500">Extra resources</h3>
            {project.extraResources?.map((project, index) => (
              <React.Fragment key={index}>
                {Object.entries(project).map(([key, value], index) => (
                  <li key={index} className="pl-5 list-inside">
                    <a
                      target="_blank"
                      href={value}
                      className={`project-page-button_link ${
                        value ? "" : "disabled"
                      }`}
                    >
                      {key}
                    </a>
                  </li>
                ))}
              </React.Fragment>
            ))}
          </ul>
        </div>
        <div className="flex justify-evenly gap-2">
          <button className="project-link__button py-2">
            <a href={project.link} target="_blank">
              Visit Site
            </a>
          </button>
          <button className="project-link__button py-2">
            <a href={project.codeSource} target="_blank">
              Code source
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};
