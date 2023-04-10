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
          <div className="modal-project__presentation">
            <img src="" alt="" />
            <svg></svg>
            <h3 className="project-card__title">{project.projectName}</h3>
          </div>
          <div className="modal-project__description">
            <section className="description__container">
              <span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
                facilis magni possimus fuga perspiciatis quis quae tempore
                quisquam vero maiores.
              </span>
            </section>
            <section className="description__container">
              <ul>
                <h4>Built with</h4>
                <li>JavaScript</li>
                <li>Html</li>
                <li>Css</li>
              </ul>
            </section>
          </div>
          <button onClick={() => setOpen(!open)}>Close</button>
        </section>
      </div>
    </>
  );
};
