import { Link } from "react-router-dom";
import { Project } from "../helpers/dataProjects";

export const ProjectCard = ({ project }: { project: Project }) => {

  return (
    <Link to={`./${project.projectId}`}>{project.projectDescription}</Link>
  );
};
