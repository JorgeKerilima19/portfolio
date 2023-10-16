import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Project, projectList } from "../helpers/dataProjects";

export const ProjectPage = () => {
  const { id }: any = useParams();

  const [project, setProject] = useState<Project>();

  useEffect(() => {
    setProject(projectList[id - 1]);
  }, []);

  return (
    <section className="h-screen px-5 py-5 flex gap-8 items-start justify-start project-main__container">
      <div className="project-info__main-container flex-col items-center gap-10 p-5">
        <div>{project?.projectLogo}</div>
        <div className="flex-col gap-3">
          <h2 className="text-center">{project?.projectName}</h2>
          <span className="text-justify">{project?.projectDescription}.</span>
          <ul className="grid gap-2 list-dot">
            <h3>Technologies used</h3>
            {project?.tools?.map((tool) => (
              <li className="pl-5 list-inside">{tool}</li>
            ))}
          </ul>
          <div className="flex justify-evenly gap-2">
            <button className="project-link__button py-2">Visit site</button>
            <button className="project-link__button py-2">Code source</button>
          </div>
        </div>
      </div>
      <div className="project-info__details-container"></div>
    </section>
  );
};
