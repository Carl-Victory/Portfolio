import React from "react";
import { MapPin } from "lucide-react";

interface Card3Props {
  Company: string;
  Duration: string;
  Title: string;
  Description: string;
  Location: string;
  BgColor: string;
}

const Card3: React.FC<Card3Props> = ({
  Company,
  Duration,
  Title,
  Description,
  Location,
  BgColor,
}) => {
  return (
    <div className="h-[272px] w-[416px] drop-shadow-lg bg-white rounded-4xl  relative z-30 flex flex-col gap-4 p-6 overflow-hidden">
      <div className={`${BgColor} w-full h-2 absolute top-0 inset-x-0`} />
      <div className="flex font-normal text-[1rem] gap-2">
        <p className="px-3 py-1.5 bg-gray-200 rounded-full border border-gray-300">
          {Company}
        </p>
        <p className="px-3 py-1.5 bg-gray-200 rounded-full border border-gray-300">
          {Duration}
        </p>
      </div>
      <h3 className="font-semibold text-[2rem]">{Title}</h3>
      <p className="font-normal text-[1rem]">{Description}</p>
      <div className=" flex gap-2 font-normal text-[1rem]">
        <MapPin />
        <p>{Location}</p>
      </div>
    </div>
  );
};

export default Card3;
