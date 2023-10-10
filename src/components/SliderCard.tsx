
import { Card } from "./Slider";

export const SliderCard = ({ title, img, description }: Card) => {
  return (
    <article
      className={`w-min-20 w-max-20 border-1 border-black border-solid py-10 px-5 h-min-25 flex-col justify-btw`}
    >
      <img className="w-90" src={img} alt="ProjectBanner" />
      <header>{title}</header>
      <p>{description}</p>
    </article>
  );
};
