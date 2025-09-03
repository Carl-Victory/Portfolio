"use client";
import React from "react";
import { Button } from "@radix-ui/themes";

const Hero = () => {
  const handleScrollTo = (id: string) => {
    const targetElement = document.getElementById(id);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };
  return (
    <div className="flex flex-col items-center justify-center mt-40 relative z-30">
      <div className="leading-[1.2]">
        <p className="text-[22px] font-caveat text-gray-400 relative left-[150px] rotate-3">
          Hello! I&apos;m a User-Focused
        </p>
        <p className="text-[22px] font-caveat text-gray-400 relative left-[140px] rotate-3">
          Full Stack Developer!
        </p>
      </div>
      <div
        className="!flex !flex-col !gap-y-0.5
    font-urbanist text-[120px] font-semibold tracking-[-0.03em] leading-[0.95] text-[#1a1a1a]
    text-center mt-[-10px]"
      >
        <span>Victory</span>
        <span>Nnamdi</span>
      </div>
      <div className="flex gap-4 mt-10 ">
        <a href="mailto:victorynnamdi0@gmail.com?subject=Project%20Inquiry%20from%20Your%20Portfolio">
          <Button
            size="4"
            variant="classic"
            color="gray"
            highContrast
            radius="full"
            className="!h-15 !shadow-[-2px_2px_10px_0_rgba(0,0,0,0.3)] !font-urbanist !text-[16px] !font-semibold hover:!bg-gray-50 hover:!shadow-[0_0_10px_0_rgba(0,0,0,0.3)]"
          >
            Start a Project
          </Button>
        </a>
        <Button
          size="4"
          variant="solid"
          radius="full"
          color="gray"
          onClick={() => handleScrollTo("Projects")}
          className="!h-15 !bg-white !text-black !shadow-[-2px_2px_10px_0_rgba(0,0,0,0.3)] !font-urbanist !text-[16px] !font-semibold hover:!bg-gray-50 hover:!shadow-[0_0_10px_0_rgba(0,0,0,0.3)]"
        >
          Explore Works
        </Button>
      </div>
    </div>
  );
};

export default Hero;
