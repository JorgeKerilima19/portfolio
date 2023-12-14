import { Link } from "react-router-dom";
import { Project } from "../../helpers/dataProjects";

export const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <Link
      to={`/portfolio/projects/${project.id}`}
      className={`w-15 border-1 border-black border-solid py-10 px-5 h-min-25 flex-col justify-btw`}
    >
      <div className="w-90 grid place-items-center">{project.logo}</div>
      <header>{project.name}</header>
      <p>{project.overview}</p>
    </Link>
  );
};
