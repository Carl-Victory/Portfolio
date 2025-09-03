import React from "react";
import Cards from "../Reusables/Card1";
import { DesktopIcon, CodeIcon, MixIcon } from "@radix-ui/react-icons";

const CardSection = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center md:justify-between mt-30 items-center">
      <Cards
        title="Front-End"
        subtitle="Development"
        bgColor="bg-amber-500"
        rotate="-rotate-5"
        icon={DesktopIcon}
      />
      <Cards
        title="Back-End"
        subtitle="Development"
        bgColor="bg-blue-500"
        rotate="rotate-5"
        icon={CodeIcon}
      />
      <Cards
        title="Systems"
        subtitle="Design"
        bgColor="bg-green-500"
        rotate="-rotate-7"
        icon={MixIcon}
      />
    </div>
  );
};

export default CardSection;
