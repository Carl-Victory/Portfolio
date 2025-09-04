"use client";
import React from "react";
import ProjectCard from "./Reusables/ProjectCard";
import { motion } from "framer-motion";

const Projects = () => {
  // Variants for the container to stagger the children's animations
  const containerVariants = {
    animate: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  // Variants for the individual elements (h1 and Card2)
  const itemVariants = {
    initial: { y: 50, opacity: 0, filter: "blur(4px)" },
    animate: { y: 0, opacity: 1, filter: "blur(0px)" },
  };

  return (
    <div id="Projects" className="mt-20 md:mt-50 relative z-30 p-4 md:p-0">
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
        {/* Heading */}
        <motion.div
          className="flex flex-col items-center md:items-center text-[3rem] md:text-[5rem] leading-none font-semibold"
          variants={containerVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <motion.h1 variants={itemVariants}>Take a look</motion.h1>
          <motion.h1 variants={itemVariants}>at my works</motion.h1>
        </motion.div>
      </div>
      {/* Grid for project cards */}
      <div className="w-full grid grid-cols-1 md:items-center md:flex md:justify-between md:p-20 gap-8 md:gap-0 mt-10">
        <div>
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
        </div>
        <div>
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
    </div>
  );
};

export default Projects;
