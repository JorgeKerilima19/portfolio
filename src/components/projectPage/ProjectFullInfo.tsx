import { Project } from "../../helpers/dataProjects";

export const ProjectFullInfo = ({ project }: { project: Project }) => {
  return <div className="project-info__details-container">
    <img src={project.projectBanner} alt="projectBanner" className="w-90" />
  </div>;
};
