import { Project } from "../../helpers/dataProjects";

export const ProjectFullInfo = ({ project }: { project: Project }) => {
  return (
    <div className="project-info__details-container flex-col gap-5 overflow-y-scroll pt-8 px-5">
      <img
        src={project.banner}
        alt="projectBanner"
        className="project-img self-center"
      />
      <h3 className="text-center text-title">{project.name}</h3>
      <p>{project.description}</p>
      <div>
        <h4>What did I learn?</h4>
        <span>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita
          vero eaque molestiae consectetur consequuntur qui, reiciendis velit
          assumenda autem nisi?
        </span>
      </div>
    </div>
  );
};
