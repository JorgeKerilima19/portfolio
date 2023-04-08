interface PropsVerification {
  project: Project;
  children?: React.ReactNode;
  open: boolean;
  handleOpen: React.MouseEventHandler<HTMLButtonElement>;
}
interface Project {
  projectName: string;
  projectImage: React.ReactElement;
  projectDescription: string;
  projectSs?: string;
  projectLink?: string;
}

export const ProjectModal = ({
  project,
  children,
  open,
  handleOpen,
}: PropsVerification) => {
  return (
    <>
      <>{children}</>
      <div className={`card-modal ${open ? "open" : ""}`}>
        <section className="card-modal__container">
          <h3 className="project-card__title">{project.projectName}</h3>
          <button onClick={handleOpen}>Close</button>
        </section>
      </div>
    </>
  );
};
