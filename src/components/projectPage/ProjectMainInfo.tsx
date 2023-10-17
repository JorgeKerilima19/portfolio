import { Project } from "../../helpers/dataProjects";

export const ProjectMainInfo = ({ project }: { project: Project }) => {
  return (
    <div className="project-info__main-container flex-col items-center gap-10 p-5">
      <div>{project?.logo}</div>
      <div className="flex-col gap-3">
        <h2 className="text-center">{project?.name}</h2>
        <span className="text-justify">{project?.overview}.</span>
        <ul className="grid gap-2 list-dot">
          <h3>Technologies used</h3>
          {project?.tools?.map((tool, index) => (
            <li key={index} className="pl-5 list-inside">
              {tool}
            </li>
          ))}
        </ul>
        <div className="flex justify-evenly gap-2">
          <button className="project-link__button py-2">Visit site</button>
          <button className="project-link__button py-2">Code source</button>
        </div>
      </div>
    </div>
  );
};
