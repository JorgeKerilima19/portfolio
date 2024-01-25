import { useEffect, useState } from "react";
import { Project } from "../../helpers/dataProjects";
import { ProjectImg } from "./ProjectImg";

export const ProjectFullInfo = ({
  project,
  color,
}: {
  project: Project;
  color: string;
}) => {
  const [status, setStatus] = useState<number | undefined>(0);

  useEffect(() => {
    switch (project.status) {
      case "In progress":
        setStatus((status) => 1);
        break;
      case "Constantly updating":
        setStatus((status) => 2);
        break;
      case "Finished":
        setStatus((status) => 3);
        break;
      default:
        setStatus(undefined);
    }
  }, [project]);

  return (
    <div className="project-info__details-container flex-col gap-8 overflow-y-scroll overflow-x-hidden pt-8 px-5">
      <img
        src={project.banner}
        alt="projectBanner"
        className="project-img self-center"
      />
      <h3 className="text-center text-title text-700">{project.name}</h3>
      <p>{project.description}</p>
      <>
        {project.reason ? (
          <div className="grid gap-5">
            <h4 className="text-500 text-md">Why did I did this?</h4>
            <span>{project.reason}</span>
          </div>
        ) : (
          <></>
        )}
      </>

      <>
        {project.lesson ? (
          <div className="grid gap-5">
            <h4 className="text-500 text-md">What did I learn?</h4>
            <span>{project.lesson}</span>
          </div>
        ) : (
          <></>
        )}
      </>
      <div className="h-max-20 h-min-20 w-full flex overflow-auto overflow-y-hidden gap-4">
        {project.screenShoots?.map((img, index) => (
          <ProjectImg img={img} key={index} />
        ))}
      </div>
      <div className="flex gap-10">
        <h4 className="text-header">Status</h4>
        {status ? (
          <div className="flex gap-2">
            {Array.from(Array(status)).map((el, index) => (
              <span
                key={index}
                className={`project-status__circle status-${status}`}
              ></span>
            ))}
          </div>
        ) : (
          "Not especified"
        )}
        <span>{project.status}</span>
      </div>
      <div className="flex gap-5 flex-wrap p-5">
        <>
          {project.installation ? (
            <div className="grid gap-2 w-15">
              <h4 className="text-500 text-md">Usage and Installation</h4>
              <span>{project.installation}</span>
            </div>
          ) : (
            <></>
          )}
        </>
        <>
          {project.features ? (
            <div className="grid gap-2 w-15">
              <h4 className="text-500 text-md">Features</h4>
              <ul className="list-dot list-inside pl-8">
                {project.features.map((feature) => (
                  <li>{feature}</li>
                ))}
              </ul>
            </div>
          ) : (
            <></>
          )}
        </>
      </div>
    </div>
  );
};
