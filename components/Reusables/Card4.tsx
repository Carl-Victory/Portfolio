import Image from "next/image";
import React from "react";

interface Card4Props {
  Source: string;
  Name: string;
  Position: string;
  Review: string;
  Rotate?: string;
}

const Card4: React.FC<Card4Props> = ({
  Source,
  Name,
  Review,
  Position,
  Rotate,
}) => {
  return (
    <div
      className={`w-[376] md:w-[465px] bg-white shadow-lg rounded-4xl ${Rotate}`}
    >
      <div className="h-[224px] border-b border-gray-300 flex justify-center items-center px-10 ">
        <p className="font-semibold text-[1.2rem] text-center leading-7">
          {Review}
        </p>
      </div>
      <div className="h-[64px] flex justify-center items-center gap-4 ">
        <Image
          src={Source}
          alt=""
          width={10}
          height={10}
          className="!w-10 !h-10 rounded-full "
        />
        <div className="leading-5 flex flex-col">
          <h5 className="font-bold">{Name}</h5>
          <p>{Position}</p>
        </div>
      </div>
    </div>
  );
};

export default Card4;
