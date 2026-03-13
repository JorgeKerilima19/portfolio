import { useState } from "react";

export const ProjectImg = ({ img }: any) => {
  const [openImage, setOpenImage] = useState(false);

  const handleClick = (): void => {
    setOpenImage((openImage) => !openImage);
  };

  return (
    <div
      className={`${
        openImage ? "project-img-container" : ""
      } grid place-items-center`}
      onClick={handleClick}
    >
      <img
        className={`${openImage ? "project-img__open" : "project-img"}`}
        src={img}
        // onClick={(e) => {
        //   e.stopPropagation();
        // }}
      />
    </div>
  );
};
