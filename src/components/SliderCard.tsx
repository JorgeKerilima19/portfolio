import { Link } from "react-router-dom";
import { Project } from "../helpers/dataProjects";

export const SliderCard = ({ slide }: { slide: Project }) => {
  return (
    <Link
      to={`./${slide.id}`}
      className={`w-min-20 w-max-20 border-1 border-black border-solid py-10 px-5 h-min-25 flex-col justify-btw`}
    >
      <img className="w-90" src={slide.banner} alt="ProjectBanner" />
      <header>{slide.name}</header>
      <p>{slide.overview}</p>
    </Link>
  );
};
