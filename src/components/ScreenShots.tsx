import { PropsVerification } from "../helpers/dataProjects";

export const ScreenShots = ({ project }: PropsVerification) => {
  return (
    <div>
      {project.projectSs?.map((img, index) => (
        <img key={index} src={img} className="screen-shot-close" />
      ))}
    </div>
  );
};
