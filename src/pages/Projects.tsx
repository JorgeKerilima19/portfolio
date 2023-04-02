import "./styles/projects.css";

import { projectList as data } from "../helpers/dataProjects";

export const Projects = () => {
  return (
    <section className="section__projects">
      <div className="projects-container">
        {data.map((project) => (
          <article className="project-card">
            <>{project.projectImage}</>
            <h3 className="project-card__title">{project.projectName}</h3>
            <p className="project-card__description">
              {project.projectDescription}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
};
