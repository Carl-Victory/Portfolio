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

      <div className="flex flex-col items-center md:grid md:grid-cols-2 md:justify-items-center gap-10 mt-15">
        <ProjectCard
          BgColor="bg-red-950"
          ImageSource="/images/Signtel1.png"
          ImageAlt="Signtel Page Image"
          InnerText="Logistics App for Signtel On-Demand, a package delivery company located in Lagos Nigeria"
          Link="https://signtel-frontend-1-fx76.onrender.com/"
        />
        <ProjectCard
          BgColor="bg-green-950"
          ImageSource="/images/LearnVerse1.png"
          ImageAlt="LearnVerse Page Image"
          InnerText="Learning Management System for LearnVerse, an online education platform offering diverse courses"
          Link="https://learnverrse.github.io/learnverrse/"
        />
        <ProjectCard
          BgColor="bg-fuchsia-950"
          ImageSource="/images/Burmars1.png"
          ImageAlt="Burmars Page Image"
          InnerText="Frontend development for Burmars Ai, an AI-powered building material cost estimation tool"
          Link="https://burmars-ai.vercel.app/"
        />
        <ProjectCard
          BgColor="bg-indigo-950"
          ImageSource="/images/Portfolio1.png"
          ImageAlt="Portfolio Page Image"
          InnerText="Personal Portfolio Website, showcasing my skills, projects, and experience as a developer"
          Link="https://victory-portfolio.pxxl.click"
        />
      </div>
    </div>
  );
};

export default Projects;
