import { Link } from "react-router-dom";
import { Project } from "../helpers/dataProjects";

export const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <Link
      to={`/portfolio/projects/${project.projectId}`}
      className={`w-min-15 w-max-15 border-1 border-black border-solid py-10 px-5 h-min-25 flex-col justify-btw`}
    >
      <div className="w-90 grid place-items-center">{project.projectLogo}</div>
      <header>{project.projectName}</header>
      <p>{project.projectDescription}</p>
    </Link>
  );
};
