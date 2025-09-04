"use client";
import React from "react";
import Cards from "../Reusables/Card1";
import { DesktopIcon, CodeIcon, MixIcon } from "@radix-ui/react-icons";
import { motion } from "framer-motion";

const CardSection = () => {
  const cardData = [
    {
      title: "Front-End",
      subtitle: "Development",
      bgColor: "bg-amber-500",
      rotate: "-rotate-5",
      icon: DesktopIcon,
    },
    {
      title: "Back-End",
      subtitle: "Development",
      bgColor: "bg-blue-500",
      rotate: "rotate-5",
      icon: CodeIcon,
    },
    {
      title: "Systems",
      subtitle: "Design",
      bgColor: "bg-green-500",
      rotate: "-rotate-7",
      icon: MixIcon,
    },
  ];

  // Define the parent container animation variants.
  // We use `staggerChildren` to create a delay between each card's animation.
  const containerVariants = {
    animate: {
      transition: {
        staggerChildren: 0.2, // Each child animation will be delayed by 0.2 seconds
      },
    },
  };

  return (
    <motion.div
      className="flex flex-col md:flex-row justify-center md:justify-between mt-30 items-center"
      variants={containerVariants}
      initial="initial" // This `initial` state will be handled by the child components.
      animate="animate"
    >
      {cardData.map((card, index) => (
        <Cards
          key={index}
          title={card.title}
          subtitle={card.subtitle}
          bgColor={card.bgColor}
          rotate={card.rotate}
          icon={card.icon}
        />
      ))}
    </motion.div>
  );
};

export default CardSection;
