import "./styles/projects.css";

import { projectList as data } from "../helpers/dataProjects";
import { ProjectModal } from "../components";

export const Projects = () => {
  return (
    <section className="section__projects">
      <div className="projects-container">
        {data.map((project) => (
          <ProjectModal project={project}>
            <article className="project-card">
              <>{project.projectImage}</>
              <h3 className="project-card__title">{project.projectName}</h3>
              <p className="project-card__description">
                {project.projectDescription}
              </p>
              <button className="project-card__button">more</button>
            </article>
          </ProjectModal>
        ))}
      </div>
    </section>
  );
};
