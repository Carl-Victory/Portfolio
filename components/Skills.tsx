import { Button } from "@radix-ui/themes";
import React from "react";
import Card2 from "./Reusables/Card2";

const Skills = () => {
  return (
    <div id="Skills" className="relative z-30 p-4 md:p-0 mt-15 md:mt-0">
      {/* Responsive layout for heading and button */}
      <div className="flex flex-col md:flex-row justify-center md:justify-between items-center md:items-end mt-20 md:mt-50 mb-10 md:mb-25 text-center md:text-left">
        {/* Responsive heading font size */}
        <div className="flex flex-col items-center md:items-start text-[3rem] md:text-[5rem] leading-none font-semibold mb-6 md:mb-0">
          <h1>What I bring</h1>
          <h1>to the table</h1>
        </div>
        {/* Button with a link to the experience section */}
        <a href="#Experience" className="w-full md:w-auto">
          <Button
            size="4"
            variant="solid"
            radius="full"
            color="gray"
            className="!w-full !md:w-auto !h-15 !bg-white !text-black !shadow-[-2px_2px_10px_0_rgba(0,0,0,0.3)] !font-urbanist !text-[16px] !font-semibold hover:!bg-gray-50 hover:!shadow-[0_0_10px_0_rgba(0,0,0,0.3)]"
          >
            View Experience
          </Button>
        </a>
      </div>

      {/* Responsive layout for the cards */}
      <div className="flex flex-col md:flex-row justify-center items-center ">
        <Card2
          backgroundColour="bg-amber-500"
          Title="Front-End Expertise"
          Subtitle1="Proper UI Integration"
          Subtitle2="Responsive Designs"
          Subtitle3="Low Latency Pages"
          Subtitle4="Excellent SEO Optimization"
          Subtitle5="Web  Optimization"
          rotate="-rotate-3"
        />
        <Card2
          backgroundColour="bg-blue-500"
          Title="Backend Expertise"
          Subtitle1="API integration"
          Subtitle2="Secure Systems"
          Subtitle3="Software Development"
          Subtitle4="Database Management"
          Subtitle5="Perfomance Optimization"
          rotate="rotate-3"
        />
        <Card2
          backgroundColour="bg-green-500"
          Title="Tools and Platforms"
          Subtitle1="Next Js"
          Subtitle2="Nest Js"
          Subtitle3="Node Js"
          Subtitle4="TypeScript"
          Subtitle5="Tailwind CSS"
          rotate="-rotate-3"
        />
      </div>

      {/* Responsive layout for the bottom CTA section */}
      <div className="flex flex-col md:flex-row justify-between items-center mt-20 p-6 md:px-10 md:py-7 bg-white shadow-lg rounded-3xl text-center md:text-left">
        <div className="font-semibold text-[1.5rem] md:text-[2rem] leading-tight md:leading-9 mb-4 md:mb-0">
          <h3>Have an idea?</h3>
          <h3>Let&apos;s bring it to life</h3>
        </div>
        <div className="flex flex-col md:flex-row w-full md:w-auto gap-4 md:gap-8">
          <a
            href="mailto:victorynnamdi0@gmail.com?subject=Project%20Inquiry%20from%20Your%20Portfolio"
            className="w-full md:w-auto md:flex-shrink-0"
          >
            <Button
              size="4"
              variant="classic"
              color="gray"
              highContrast
              radius="full"
              className="!w-full !h-15 !shadow-[-2px_2px_10px_0_rgba(0,0,0,0.3)] !font-urbanist !text-[16px] !font-semibold hover:!bg-gray-50 hover:!shadow-[0_0_10px_0_rgba(0,0,0,0.3)]"
            >
              Start a Project
            </Button>
          </a>
          <a
            href="https://calendly.com/your-calendly-username"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full"
          >
            <Button
              size="4"
              variant="solid"
              radius="full"
              color="gray"
              className="!w-full !h-15 !bg-white !text-black !shadow-[-2px_2px_10px_0_rgba(0,0,0,0.3)] !font-urbanist !text-[16px] !font-semibold hover:!bg-gray-50 hover:!shadow-[0_0_10px_0_rgba(0,0,0,0.3)]"
            >
              Book a Call
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Skills;
