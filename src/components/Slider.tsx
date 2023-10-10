import AppContext from "../context/Appcontext";
import { SliderProperties } from "../pages";
import { useContext, useState, useEffect } from "react";
import { SliderCard } from "./SliderCard";

export interface Card {
  title: string;
  img: any;
  description: string;
}

export const Slider = ({ sizes, array }: SliderProperties) => {
  const { windowSize } = useContext(AppContext);

  const [sizeLimit, setSizeLimit] = useState(0);
  const [currentItem, setCurrentItem] = useState(0);

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

  const goNextItem = () => {
    if (currentItem >= array.length - 1) {
      setCurrentItem(0);
      return;
    }
    setCurrentItem((prevIndex) => (prevIndex + sizeLimit) % array.length);
  };

  const goPrevItem = () => {
    setCurrentItem((prevIndex) => {
      const newIndex = prevIndex - sizeLimit;
      return newIndex < 0 ? array.length - sizeLimit : newIndex;
    });
  };

  useEffect(() => {
    handleSize();
  }, [windowSize]);

  return (
    <div className="h-screen w-full relative flex items-center">
      <div className="absolute h-full w-full flex justify-btw items-center">
        <button onClick={goPrevItem} className="px-5">
          {"<"}
        </button>
        <button onClick={goNextItem} className="px-5">
          {">"}
        </button>
      </div>
      <div className="flex w-full gap-5 items-center justify-center">
        {array
          .slice(currentItem, currentItem + sizeLimit)
          .map((slide, index) => {
            return (
              <SliderCard
                key={index}
                title={slide.projectName}
                img={slide.projectBanner}
                description={slide.projectDescription}
              />
            );
          })}
      </div>
    </div>
  );
};
