import { useState } from "react";
import { ImCross } from "react-icons/im";

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
        <section
          className="card-modal__container container"
          onClick={stopPropagation}
        >
          <div className="modal-project__presentation">
            <div className="project-presentation__img">
              <img src={project.projectBanner} alt="Project Banner" />
            </div>
            <div className="project-presentation__logo-container">
              {project.projectLogo}
            </div>
            <h3 className="project-card__title project-presentation__title ">
              {project.projectName}
            </h3>
          </div>
          <div className="modal-project__description container">
            <section className="description__container">
              <span>
                {project.projectLongDescription
                  ? project.projectLongDescription
                  : "No description has given"}
              </span>
            </section>
            <section className="description__container">
              <ul className="container__list">
                <h4 className="list__header">Built with</h4>
                {project.tools ? (
                  <>
                    {project.tools?.map((el) => (
                      <li>{el}</li>
                    ))}
                  </>
                ) : (
                  <span>Used tools need to be specified</span>
                )}
              </ul>
              <div className="container__extra">
                <ul className="container__list">
                  <h4 className="list__header">Extra resources</h4>
                  {project.extraResources?.map((el) => (
                    <li>{el}</li>
                  ))}
                </ul>
                <ul className="container__list">
                  <h4 className="list__header">Links</h4>
                  <li>
                    <a href={project.projectLink}>Page</a>
                  </li>
                  <li>
                    <a href={project.projectCodeLink}>Code Source</a>
                  </li>
                </ul>
              </div>
            </section>
          </div>
          <button
            className="modal-project__button"
            onClick={() => setOpen(!open)}
          >
            <ImCross className="icon" />
          </button>
        </section>
      </div>
    </>
  );
};
