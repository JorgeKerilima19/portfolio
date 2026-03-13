import { Link } from "react-router-dom";
import { Project } from "../../helpers/dataProjects";

export const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <Link
      to={`/portfolio/projects/${project.id}`}
      className={`w-15 border-1 border-black border-solid py-10 px-5 h-min-25 flex-col gap-5`}
    >
<<<<<<< HEAD
      <div className="w-full grid place-items-center">{project.logo}</div>
=======
      <div className="w-90 grid place-items-center">{project.logo}</div>
>>>>>>> 7e617dbdecf4f75a18496c5fb0078159512b722c
      <header className="project-card__title">{project.name}</header>
      <p className="text-300">{project.overview}</p>
    </Link>
  );
};
