"use client";
import React from "react";
import Card3 from "./Reusables/Card3";
import { motion } from "framer-motion";

const Experience = () => {
  // Variants for the container to stagger the children's animations
  const containerVariants = {
    animate: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  // Variants for the individual elements
  const itemVariants = {
    initial: { y: 50, opacity: 0, filter: "blur(4px)" },
    animate: { y: 0, opacity: 1, filter: "blur(0px)" },
  };

  return (
    <div id="Experience" className="mt-20 md:mt-40 relative z-30 p-4">
      {/* Responsive intro text */}
      <div className="leading-tight md:leading-1.2 mb-8 md:mb-10 text-center md:text-left">
        <p className="text-[18px] md:text-[22px] font-caveat text-gray-400 -rotate-5">
          Key moments
        </p>
        <p className="text-[18px] md:text-[22px] font-caveat text-gray-400 -rotate-5">
          in my career.
        </p>
      </div>

      {/* Responsive heading */}
      <motion.div
        className="flex flex-col items-center md:items-center text-[3rem] md:text-[5rem] leading-none font-semibold text-center md:text-left"
        variants={containerVariants}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <motion.h1 variants={itemVariants}>The path</motion.h1>
        <motion.h1 variants={itemVariants}>I&apos;ve taken</motion.h1>
      </motion.div>

      {/* Responsive timeline container */}
      <motion.div
        className="mt-10 md:mt-25 gap-1 flex flex-col items-center"
        variants={containerVariants}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        {/* Left-aligned card for desktops, centered on mobile */}
        <motion.div
          className="flex flex-col md:flex-row gap-4 md:gap-[20px] items-center md:justify-self-start md:self-start mb-8 md:mb-0"
          variants={itemVariants}
        >
          <Card3
            BgColor="bg-amber-500"
            Company="Burmars Ai"
            Duration="September 2025 - Present"
            Title="Frontend Developer"
            Description="Spearheading the development of user-centric web applications, focusing on responsive design and seamless user experiences."
            Location="Nigeria . Remote"
          />
          <div className="w-6 h-6 rounded-full border-amber-500 border-[4px]" />
        </motion.div>

        {/* Right-aligned card for desktops, centered on mobile */}
        <motion.div
          className="flex flex-col-reverse md:flex-row gap-4 md:gap-[20px] items-center md:justify-self-end md:self-end mb-8 md:mb-0"
          variants={itemVariants}
        >
          <div className="w-6 h-6 rounded-full border-blue-500 border-[4px]" />
          <Card3
            BgColor="bg-blue-500"
            Company="Signtel On-Demand"
            Duration="May - August 2025"
            Title="Backend Team Lead"
            Description="Led the backend team in developing a logistics application, ensuring efficient data management and seamless integration with frontend services."
            Location="Nigeria . Remote"
          />
        </motion.div>

        {/* Left-aligned card for desktops, centered on mobile */}
        <motion.div
          className="flex flex-col md:flex-row gap-4 md:gap-[20px] items-center md:justify-self-start md:self-start"
          variants={itemVariants}
        >
          <Card3
            BgColor="bg-green-500"
            Company="LearnVerse"
            Duration="April - August 2025"
            Title="Backend Developer Intern"
            Description="Contributed to the development of a learning management system, focusing on building robust APIs and optimizing database performance."
            Location="Nigeria . Remote"
          />
          <div className="w-6 h-6 rounded-full border-green-500 border-[4px]" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Experience;
