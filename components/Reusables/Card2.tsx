import React from "react";

interface Card2Props {
  backgroundColour: string;
  Title: string;
  Subtitle1: string;
  Subtitle2: string;
  Subtitle3: string;
  Subtitle4: string;
  Subtitle5: string;
  rotate?: string;
}

const Card2: React.FC<Card2Props> = ({
  backgroundColour,
  Title,
  Subtitle1,
  Subtitle2,
  Subtitle3,
  Subtitle4,
  Subtitle5,
  rotate,
}) => {
  return (
    <div
      className={`w-[360px] drop-shadow-lg bg-white rounded-4xl  relative z-30 flex flex-col overflow-hidden ${rotate}`}
    >
      <div
        className={`h-12 pl-10 flex items-center font-bold text-white ${backgroundColour}`}
      >
        {Title}
      </div>
      <div className="pl-10 pt-3.5 pb-3.5 border-b-1 border-gray-300 font-semibold text-[1.2rem]">
        {Subtitle1}
      </div>
      <div className="pl-10 pt-3.5 pb-3.5 border-b-1 border-gray-300 font-semibold text-[1.2rem]">
        {Subtitle2}
      </div>
      <div className="pl-10 pt-3.5 pb-3.5 border-b-1 border-gray-300 font-semibold text-[1.2rem]">
        {Subtitle3}
      </div>
      <div className="pl-10 pt-3.5 pb-3.5 border-b-1 border-gray-300 font-semibold text-[1.2rem]">
        {Subtitle4}
      </div>
      <div className="pl-10 pt-3.5 pb-3.5 border-b-1 border-gray-300 font-semibold text-[1.2rem]">
        {Subtitle5}
      </div>
    </div>
  );
};

export default Card2;
