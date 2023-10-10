import AppContext from "../context/Appcontext";
import { SliderProperties } from "../pages";
import { useContext, useState, useEffect } from "react";
import { SliderCard } from "./SliderCard";

export interface Card {
  title: string;
  img: any;
  description: string;
  index: number;
  currentItem: number;
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
    setCurrentItem((currentItem) => currentItem + 1);
  };
  const goPrevItem = () => {
    if (currentItem <= 0) {
      setCurrentItem(array.length - 1);
      return;
    }
    setCurrentItem((currentItem) => currentItem - 1);
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
      <div className="flex w-full gap-5 slider-container">
        {array.map((slide, index) => {
          if (sizeLimit) {
            return (
              <SliderCard
                key={index}
                title={slide.projectName}
                img={slide.projectBanner}
                description={slide.projectDescription}
                index={index}
                currentItem={currentItem}
              />
            );
          }
        })}
      </div>
    </div>
  );
};
