import Image from "next/image";
import React from "react";

interface ProjectCardProps {
  BgColor: string;
  InnerText: string;
  ImageSource: string;
  ImageAlt: string;
  Link: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  BgColor,
  ImageSource,
  ImageAlt,
  InnerText,
  Link,
}) => {
  return (
    <div
      className={` w-[20rem] lg:w-[22rem] md:w-[18rem] h-[22rem] ${BgColor} flex flex-col justify-between  items-center p-7 rounded-3xl shadow-lg relative z-30 overflow-hidden hover:scale-[1.03] transition-transform duration-300 hover:z-30 hover:shadow-2xl`}
    >
      <div>
        <Image
          src={`${ImageSource}`}
          alt={`${ImageAlt}`}
          width={300}
          height={145}
        />
      </div>
      <p className="text-white">{InnerText}</p>
      <div className="w-full px-2">
        <a href={`${Link}`} target="_blank" rel="noopener noreferrer">
          <button className="w-full bg-white text-black px-4 py-2 rounded-full hover:bg-gray-100 shadow-md hover:shadow-lg transition-shadow duration-300">
            View Project
          </button>
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
