import { PropsVerification } from "../helpers/dataProjects";

export const ScreenShots = ({ project }: PropsVerification) => {
  return (
    <div>
      {project.projectImage}
      <span>xd</span>
    </div>
  );
};
