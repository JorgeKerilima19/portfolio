import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Project, projectList } from "../helpers/dataProjects";
import { ProjectFullInfo, ProjectMainInfo } from "../components";

export const ProjectPage = () => {
  const { id }: any = useParams();

  const [project, setProject] = useState<Project>(projectList[0]);
  const [color, setColor] = useState<string>("");

  useEffect(() => {
    setProject(projectList[id - 1]);
  }, []);
  useEffect(() => {
    const style = document.createElement("style");
    document.head.appendChild(style);

    if (style.sheet) {
      style.sheet.insertRule(
        `.project-info__details-container::-webkit-scrollbar-thumb {
          background-color: ${color};} `,
        0
      );
    }

    return () => {
      if (style.sheet) {
        document.head.removeChild(style);
      }
    };
  }, [color]);
  return (
    <section className="h-screen px-5 py-5 flex gap-8 items-start justify-start project-main__container">
      <ProjectMainInfo project={project} setColor={setColor} />
      <ProjectFullInfo project={project} color={color} />
    </section>
  );
};
