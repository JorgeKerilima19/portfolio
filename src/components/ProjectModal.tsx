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
        <section
          className="card-modal__container container"
          onClick={stopPropagation}
        >
          <div className="modal-project__presentation">
            <div className="project-presentation__img">
              <img
                src="https://www.searchenginejournal.com/wp-content/uploads/2021/08/top-5-reasons-why-you-need-a-social-media-manager-616015983b3ba-sej.png"
                alt=""
              />
            </div>
            <svg className="project-presentation__logo"></svg>
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
              <ul>
                <h4>Built with</h4>
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
                <ul>
                  <h4>Extra resources</h4>
                  <li>React Icons</li>
                  <li>GithubPages</li>
                </ul>
                <ul>
                  <h4>Links</h4>
                  <li>PageLink</li>
                  <li>Code</li>
                </ul>
              </div>
            </section>
          </div>
          <button onClick={() => setOpen(!open)}>Close</button>
        </section>
      </div>
    </>
  );
};
