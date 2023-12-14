import { Project } from "../helpers/dataProjects";

export const ScreenShots = ({ project }: { project: Project }) => {
  return (
    <div>
      {project.screenShoots?.map((img, index) => (
        <img key={index} src={img} className="screen-shot-close" />
      ))}
    </div>
  );
};
