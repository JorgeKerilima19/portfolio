import { useState } from "react";
import { Project } from "../helpers/dataProjects";

interface PropsVerification {
  project: Project;
}

export const ProjectModal = ({ project }: PropsVerification) => {
  const [open, setOpen] = useState(false);

  const stopPropagation = (e: any) => e.stopPropagation();

  return (
    <>
      <article className="project-card">
        <>{project.projectImage}</>
        <h3 className="project-card__title">{project.projectName}</h3>
        <p className="project-card__description">
          {project.projectDescription}
        </p>
        <button className="project-card__button" onClick={() => setOpen(!open)}>
          more
        </button>
      </article>
      <div
        className={`card-modal ${open ? "open" : ""}`}
        onClick={() => setOpen(!open)}
      >
        <section className="card-modal__container" onClick={stopPropagation}>
          <h3 className="project-card__title">{project.projectName}</h3>
          <button onClick={() => setOpen(!open)}>Close</button>
        </section>
      </div>
    </>
  );
};
