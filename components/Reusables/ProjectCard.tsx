import React from "react";

interface ProjectCardProps {
  BgColor: string;
  BgColor2: string;
  InnerText: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  BgColor,
  BgColor2,
  InnerText,
}) => {
  return (
    <div
      className={`w-[28rem] h-[28rem] ${BgColor} flex flex-col justify-between  items-center p-6 rounded-3xl shadow-lg relative z-30 overflow-hidden hover:scale-[1.03] transition-transform duration-300 hover:z-30 hover:shadow-2xl`}
    >
      <div
        className={`${BgColor2} mt-5 w-[22rem] h-[10rem] rounded-2xl flex items-center justify-center font-light text-[2rem] text-center`}
      >
        {InnerText}
      </div>
      <div className="w-full flex justify-between px-2 mb-5">
        <button className="bg-white text-black px-4 py-2 rounded-full">
          View Description
        </button>
        <button className="bg-white text-black px-4 py-2 rounded-full">
          View Documentation
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;
