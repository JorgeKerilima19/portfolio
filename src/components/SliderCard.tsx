import { useState } from "react";

import { Card } from "./Slider";

export const SliderCard = ({
  title,
  img,
  description,
  index,
  currentItem,
}: Card) => {
  const [currentIndex, setCurrentIndex] = useState(index);

  return (
    <article
      className={`w-min-20 w-max-20 border-1 border-black border-solid py-10 px-5 h-min-25 ${
        index === currentItem ? "slide current" : "slide"
      } justify-btw`}
    >
      <img className="w-90" src={img} alt="ProjectBanner" />
      <header>{title}</header>
      <p>{description}</p>
    </article>
  );
};
