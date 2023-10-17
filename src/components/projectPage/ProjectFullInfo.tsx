import { Project } from "../../helpers/dataProjects";

export const ProjectFullInfo = ({ project }: { project: Project }) => {
  return (
    <div className="project-info__details-container flex-col gap-8 overflow-y-scroll pt-8 px-5">
      <img
        src={project.banner}
        alt="projectBanner"
        className="project-img self-center"
      />
      <h3 className="text-center text-title">{project.name}</h3>
      <p>{project.description}</p>
      <div className="grid gap-5">
        <h4>Why did I did this?</h4>
        <span>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita
          vero eaque molestiae consectetur consequuntur qui, reiciendis velit
          assumenda autem nisi?
        </span>
      </div>
      <div className="grid gap-5">
        <h4>What did I learn?</h4>
        <span>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita
          vero eaque molestiae consectetur consequuntur qui, reiciendis velit
          assumenda autem nisi?
        </span>
      </div>
      <div>
        {project.screenShoots?.map((img) => (
          <img src={img} className="w-full" />
        ))}
      </div>
      <div className="grid gap-5">
        <h4>Usage and Installation</h4>
        <span>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita
          vero eaque molestiae consectetur consequuntur qui, reiciendis velit
          assumenda autem nisi?
        </span>
      </div>
      <div className="grid gap-5">
        <h4>Features?</h4>
        <span>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita
          vero eaque molestiae consectetur consequuntur qui, reiciendis velit
          assumenda autem nisi?
        </span>
      </div>
      <div className="grid gap-5">
        <h4>Status?</h4>
        <span>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita
          vero eaque molestiae consectetur consequuntur qui, reiciendis velit
          assumenda autem nisi?
        </span>
      </div>
    </div>
  );
};
