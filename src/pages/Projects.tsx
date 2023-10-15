import "./styles/projects.css";

import { projectList as data } from "../helpers/dataProjects";
import { ProjectCard, ProjectModal } from "../components";
import { Slider } from "../components/Slider";

export interface SliderProperties {
  array: any[];
  sizes: {
    s: {
      limit: number;
      size: number;
    };
    m: {
      limit: number;
      size: number;
    };
    b: {
      limit: number;
      size: number;
    };
  };
}

const breakpoints: SliderProperties = {
  array: data,
  sizes: {
    s: {
      limit: 1,
      size: 500,
    },
    m: {
      limit: 2,
      size: 1000,
    },
    b: {
      limit: 3,
      size: 1640,
    },
  },
};

export const Projects = () => {
  return (
    <section className="section__projects flex-col">
      <Slider array={breakpoints.array} sizes={breakpoints.sizes} />
      <div className="projects-container">
        {data.map((project, index) => (
          // <ProjectModal project={project} key={index} />
          <ProjectCard project={project}/>
        ))}
      </div>
    </section>
  );
};
