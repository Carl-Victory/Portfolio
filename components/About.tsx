import React from "react";
import TextType1 from "./Reusables/TextType1";
import TextType2 from "./Reusables/TextType2";
import Image from "next/image";
import { Button } from "@radix-ui/themes";

const About = () => {
  return (
    <div id="About" className="mt-20 relative z-30 p-4">
      {/* Intro text */}
      <div className="text-center md:text-left text-[22px] font-caveat text-gray-400 mb-5 md:relative md:left-[12rem] md:-rotate-10 md:mb-15 -rotate-6">
        <p>Delivering great </p>
        <p>user experiences</p>
      </div>

      {/* Header Text */}
      <div className="w-full flex flex-col items-center text-center text-[3rem] md:text-[5rem] leading-none font-semibold mb-15">
        <h1>Here&apos;s a bit</h1>
        <h1>about me</h1>
      </div>

      {/* Main content container */}
      <div className="flex flex-col md:h-102 md:flex-row justify-center items-center md:justify-between md:items-start gap-12 md:gap-x-12">
        {/* Left column (text) */}
        <div className="flex flex-col justify-between h-full text-center md:text-left">
          <TextType1 pTag="Experience:" h3Tag="1+ Years" />
          <TextType2
            pTag="Specialty:"
            h3Tag1="User-Focused"
            h3Tag2="& SEO Optimized"
          />
          <TextType2
            pTag="Education:"
            h3Tag1="Certification in Full"
            h3Tag2="Stack Development"
          />
        </div>

        {/* Image container */}
        <div className="relative rounded-lg bg-amber-500 w-[80%] max-w-[336px] h-102 overflow-hidden">
          <Image
            src="/images/erasebg-transformed-1.png"
            alt="Image of Victory Nnamdi"
            fill={true}
            style={{ objectFit: "cover", objectPosition: "bottom" }}
          />
        </div>

        {/* Right column (text) */}
        <div className="flex flex-col justify-between h-full text-center md:text-right">
          <TextType1 pTag="Projects:" h3Tag="11+ Completed" />
          <TextType2 pTag="Location:" h3Tag1="Lagos," h3Tag2="Western Africa" />
          <TextType2
            pTag="Availability:"
            h3Tag1="Currently Open to"
            h3Tag2="new Projects"
          />
        </div>
      </div>

      {/* CTA Button */}
      <div className="w-full flex flex-col items-center mt-10 md:mt-20">
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
      </div>
    </div>
  );
};

export default About;
