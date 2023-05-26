import { PropsVerification } from "../helpers/dataProjects";

export const ScreenShots = ({ project }: PropsVerification) => {
  return (
    <div>
      <img src={project.projectSs} className="screen-shot-close"/>
    </div>
  );
};
