import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Project, projectList } from "../helpers/dataProjects";

export const ProjectPage = () => {
  const { id }: any = useParams();

  const [project, setProject] = useState<Project>();

  useEffect(() => {
    setProject(projectList[id - 1]);
  }, []);

  return (
    <section className="h-screen px-5 py-5">
      ProjectPage {project?.projectDescription}
    </section>
  );
};
