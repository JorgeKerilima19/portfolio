import "./styles/projects.css"

export const Projects = () => {
  return (
    <section className="section__projects">
      <div className="projects-container">
        <article className="project-card">
          <img className="project-card__img" alt="Project image" />
          <h3 className="project-card__title">Project Title</h3>
          <p className="project-card__description">Project Description</p>
        </article>
      </div>
    </section>
  );
};
