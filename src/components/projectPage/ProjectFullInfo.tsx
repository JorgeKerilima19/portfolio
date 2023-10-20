import { Project } from "../../helpers/dataProjects";
import { ProjectImg } from "./ProjectImg";

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
      <div className="h-max-20 h-min-20 w-full flex overflow-auto overflow-y-hidden gap-4">
        {project.screenShoots?.map((img, index) => (
          <ProjectImg img={img} key={index} />
        ))}
      </div>
      <div className="flex gap-5 flex-wrap justify-center p-5">
        <div className="grid gap-5 w-max-15">
          <h4>Usage and Installation</h4>
          <span>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita
            vero eaque molestiae consectetur consequuntur qui, reiciendis velit
            assumenda autem nisi?
          </span>
        </div>
        <div className="grid gap-5 w-max-15">
          <h4>Features?</h4>
          <span>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita
            vero eaque molestiae consectetur consequuntur qui, reiciendis velit
            assumenda autem nisi?
          </span>
        </div>
        <div className="grid gap-5 w-max-15 justify-btw">
          <h4>Status?</h4>
          <span>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita
            vero eaque molestiae consectetur consequuntur qui, reiciendis velit
            assumenda autem nisi?
          </span>
        </div>
      </div>
    </div>
  );
};
