import { Link } from "react-router-dom";
import { Project } from "../helpers/dataProjects";

export const SliderCard = ({ slide }: { slide: Project }) => {
  return (
    <Link
      to={`./${slide.id}`}
      className={`w-min-20 w-max-20 border-1 border-black border-solid py-10 px-5 h-min-25 flex-col gap-3`}
    >
      <img className="slider-img" src={slide.banner} alt="ProjectBanner" />
      <header className="text-600">{slide.name}</header>
      <p>{slide.overview}</p>
    </Link>
  );
};
