import AppContext from "../context/Appcontext";
import { SliderProperties } from "../pages";
import { useContext, useState, useEffect } from "react";

interface Card {
  title: string;
  img: any;
  description: string;
}

const Card = ({ title, img, description }: Card) => {
  return (
    <article className="w-max-20 border-1 border-black border-solid py-10 px-5 h-min-25 flex flex-col justify-btw">
      <img className="w-90" src={img} alt="ProjectBanner" />
      <header>{title}</header>
      <p>{description}</p>
    </article>
  );
};

export const Slider = ({ sizes, array }: SliderProperties) => {
  const { windowSize } = useContext(AppContext);

  const [sizeLimit, setSizeLimit] = useState(0);

  const handleSize = () => {
    if (windowSize > sizes.s.size) {
      setSizeLimit(sizes.s.limit);
    }
    if (windowSize > sizes.m.size) {
      setSizeLimit(sizes.m.limit);
    }
    if (windowSize > sizes.b.size) {
      setSizeLimit(sizes.b.limit);
    }
  };

  useEffect(() => {
    handleSize();
  }, [windowSize]);

  return (
    <div className="h-screen w-full flex items-center justify-center pt-8 gap-5 relative">
      <div>

      </div>
      {array.map((slide, index) => {
        if (index < sizeLimit) {
          return (
            <Card
              key={index}
              title={slide.projectName}
              img={slide.projectBanner}
              description={slide.projectDescription}
            />
          );
        }
      })}
    </div>
  );
};
