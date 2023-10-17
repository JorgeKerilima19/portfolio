import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Project, projectList } from "../helpers/dataProjects";
import { ProjectFullInfo, ProjectMainInfo } from "../components";

export const ProjectPage = () => {
  const { id }: any = useParams();

  const [project, setProject] = useState<Project>(projectList[0]);

  useEffect(() => {
    setProject(projectList[id - 1]);
  }, []);

  return (
    <section className="h-screen px-5 py-5 flex gap-8 items-start justify-start project-main__container">
      <ProjectMainInfo project={project} />
      <ProjectFullInfo project={project} />
    </section>
  );
};
