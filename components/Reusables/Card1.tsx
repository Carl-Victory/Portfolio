import React from "react";
import { DesktopIcon } from "@radix-ui/react-icons";

interface CardsProps {
  title: string;
  subtitle: string;
  bgColor: string;
  icon: React.ElementType;
  rotate?: string;
}

const Cards: React.FC<CardsProps> = ({
  title,
  subtitle,
  icon: Icon,
  bgColor,
  rotate,
}) => {
  return (
    <div
      className={`w-[360px] h-[330px] drop-shadow-lg bg-white rounded-4xl  relative z-30 ${rotate} flex flex-col overflow-hidden justify-between`}
    >
      <div className={`${bgColor} w-full h-2 absolute top-0 inset-x-0`} />
      <div className="flex flex-col mt-25 justify-center items-center">
        <div
          className={`w-20 h-20 flex justify-center items-center rounded-2xl ${bgColor}`}
        >
          {Icon ? (
            <Icon className="h-[40%] w-[40%]" />
          ) : (
            <DesktopIcon className="h-[40%] w-[40%]" />
          )}
        </div>
        <div className="flex flex-col justify-center items-center font-semibold text-[1.7rem] mt-3 leading-7">
          <p>{title}</p>
          <p>{subtitle}</p>
        </div>
      </div>
    </div>
  );
};

export default Cards;
