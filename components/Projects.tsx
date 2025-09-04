import React from "react";
import ProjectCard from "./Reusables/ProjectCard";

const Projects = () => {
  return (
    <div id="Projects" className="mt-20 md:mt-50 relative z-30 p-4">
      <div className="text-center md:text-left">
        {/* Responsive intro text */}
        <div className="leading-tight md:leading-1.2 mb-4 md:-mb-5">
          <p className="text-[18px] md:text-[22px] font-caveat text-gray-400 md:relative md:left-[600px] rotate-5">
            Some of my
          </p>
          <p className="text-[18px] md:text-[22px] font-caveat text-gray-400 md:relative md:left-[600px] rotate-5">
            favourite Projects.
          </p>
        </div>
        {/* Responsive heading */}
        <div className="flex flex-col items-center md:items-center text-[3rem] md:text-[5rem] leading-none font-semibold">
          <h1>Take a look</h1>
          <h1>at my works</h1>
        </div>
      </div>
      {/* Responsive grid for project cards */}
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-4 mt-10 md:mt-20">
        <ProjectCard
          BgColor="bg-red-950"
          BgColor2=" bg-red-300"
          InnerText="Logistics App for Signtel On-Demand"
        />
        <ProjectCard
          BgColor="bg-green-950"
          BgColor2=" bg-green-300"
          InnerText="Learning Management System for LearnVerse"
        />
        <ProjectCard
          BgColor="bg-fuchsia-950"
          BgColor2=" bg-fuchsia-300"
          InnerText="Frontend development for Burmars Ai"
        />
        <ProjectCard
          BgColor="bg-indigo-950"
          BgColor2=" bg-indigo-300"
          InnerText="Personal Portfolio Website"
        />
      </div>
    </div>
  );
};

export default Projects;
