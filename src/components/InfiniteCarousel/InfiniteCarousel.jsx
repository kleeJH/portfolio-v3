import React from "react";

import { SectionWrapper } from "../../hoc";
import "./InfiniteCarousel.css";

const InfiniteCarousel = ({ direction }) => {
  const slider_tags = [
    "HTML5",
    "CSS",
    "JS",
    "ReactJS",
    "Redux",
    "TailwindCSS",
    "ThreeJS",
    "Git",
    "Figma",
    "Docker",
  ];
  return (
    <div className=" flex items-center justify-center">
      <div className="w-[200%] h-16 overflow-hidden relative slider">
        <div className={`w-[200%] flex items-center h-16 justify-around absolute left-0 gap-20 ${direction === 'left' ? "animate-left" : "animate-right"}`}>
          {slider_tags.map((tag, index) => (
            <div
              key={`row1-${index}`}
              className="flex justify-center items-start w-[20rem] bg-gray-500 p-2 rounded"
            >
              #{tag}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const InfiniteCarousels = () => {
  return (
    <>
      <InfiniteCarousel direction={"left"} />
      <InfiniteCarousel direction={"right"} />
    </>
  );
};

export default SectionWrapper(InfiniteCarousels, "");
