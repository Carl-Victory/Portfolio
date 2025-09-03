import { Button } from "@radix-ui/themes";
import { TwitterLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import React from "react";
import Form from "./MinorComponents/Form";

const Contact = () => {
  return (
    <div id="Contact" className="relative z-30 mt-20 md:mt-50 p-4">
      {/* Responsive CTA bar */}
      <div className="w-full flex flex-col md:flex-row justify-between items-center px-4 py-7 md:px-10 bg-white shadow-lg rounded-3xl text-center md:text-left mb-8 md:mb-5">
        <div className="font-semibold text-[1.5rem] md:text-[2rem] leading-tight md:leading-9 mb-4 md:mb-0">
          <h3>Let&apos;s make your</h3>
          <h3>product shine bright</h3>
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
              className="!w-full !md:w-auto !h-15 !shadow-[-2px_2px_10px_0_rgba(0,0,0,0.3)] !font-urbanist !text-[16px] !font-semibold hover:!bg-gray-50 hover:!shadow-[0_0_10px_0_rgba(0,0,0,0.3)]"
            >
              Start a Project
            </Button>
          </a>
          <a
            href="https://calendly.com/nnamdivictory"
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

      {/* Responsive contact sections */}
      <div className="mt-5 flex flex-col md:flex-row justify-between gap-8 md:gap-5">
        {/* Navigation and social links box */}
        <div className="w-full md:w-1/2 bg-black text-white rounded-3xl shadow-lg p-8 md:p-10 flex flex-col justify-between">
          <div className="flex flex-col font-semibold text-[1.5rem] md:text-[2rem] leading-tight md:leading-12 items-center md:items-start">
            <a href="#About" className=" hover:text-gray-300">
              About
            </a>
            <a href="#Skills" className=" hover:text-gray-300">
              Skills
            </a>
            <a href="#Projects" className=" hover:text-gray-300">
              Projects
            </a>
            <a href="#Experience" className=" hover:text-gray-300">
              Experience
            </a>
            <a href="#Testimonials" className=" hover:text-gray-300">
              Testimonials
            </a>
            <a
              href="mailto:victorynnamdi0@gmail.com?subject=Project%20Inquiry%20from%20Your%20Portfolio"
              className=" hover:text-gray-300"
            >
              Contact
            </a>
          </div>
          <div className="flex flex-col md:flex-col lg:flex-row justify-between w-full md:w-auto gap-4 mt-8 md:mt-0">
            <a
              href="mailto:victorynnamdi0@gmail.com?subject=Project%20Inquiry%20from%20Your%20Portfolio"
              className="items-center flex justify-center md:justify-start"
            >
              <Button
                size="4"
                variant="solid"
                radius="full"
                color="gray"
                className=" !md:w-fit !h-15 !bg-white !text-black !font-urbanist !text-[14px] !font-semibold hover:!bg-gray-50 hover:!shadow-[0_0_10px_0_rgba(0,0,0,0.3)]"
              >
                victorynnamdi0@gmail.com
              </Button>
            </a>
            <div className="flex justify-center gap-4">
              <a href="https://www.linkedin.com/in/nnamdivictory">
                <Button
                  size="4"
                  variant="solid"
                  radius="full"
                  color="gray"
                  className="!h-15 !bg-white !text-black !font-urbanist !text-[14px] !font-semibold hover:!bg-gray-50 hover:!shadow-[0_0_10px_0_rgba(0,0,0,0.3)]"
                >
                  <LinkedInLogoIcon />
                </Button>
              </a>
              <a href="https://x.com/King_Carl01">
                <Button
                  size="4"
                  variant="solid"
                  radius="full"
                  color="gray"
                  className="!h-15 !bg-white !text-black !font-urbanist !text-[14px] !font-semibold hover:!bg-gray-50 hover:!shadow-[0_0_10px_0_rgba(0,0,0,0.3)]"
                >
                  <TwitterLogoIcon />
                </Button>
              </a>
            </div>
          </div>
        </div>

        {/* Contact form section */}
        <div className="w-full md:w-1/2 bg-black text-white rounded-3xl shadow-lg p-8 md:p-10 flex flex-col justify-between">
          <h3 className="font-semibold text-[1.5rem] md:text-[2rem] text-center md:text-left">
            Let&apos;s Connect
          </h3>
          <Form />
        </div>
      </div>
    </div>
  );
};

export default Contact;
