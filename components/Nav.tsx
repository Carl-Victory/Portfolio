"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import {
  HamburgerMenuIcon,
  Cross1Icon,
  EnvelopeClosedIcon,
} from "@radix-ui/react-icons";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleScrollTo = (id: string) => {
    const targetElement = document.getElementById(id);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
      const scrollbarWidth =
        window.innerWidth - document.documentElement.clientWidth;
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    } else {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    }

    return () => {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    };
  }, [isMenuOpen]);

  return (
    <>
      {/* Main Nav Container */}
      <div className="fixed top-0 inset-x-0 z-50">
        <div className="mx-auto max-w-[960px] relative flex justify-between items-center py-6 px-4 ">
          <div
            className={`flex items-center gap-4  p-1.5 rounded-full shadow-md transition-discrete duration-300 ${
              isHovered ? "bg-gray-100 w-[245px]" : "bg-white w-[210px]"
            }`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <Image
              src="/images/profile-image.jpg"
              alt="Profile-Picture"
              width={40}
              height={40}
              className="rounded-full object-cover"
            />
            <div className="font-urbanist flex flex-col gap-y-0.1">
              <p className="font-bold text-black whitespace-nowrap">
                Victory Nnamdi
              </p>
              <p className="text-sm text-gray-600 whitespace-nowrap">
                Full-Stack Developer
              </p>
            </div>
            <button
              className={`w-10 h-10 -ml-2 rounded-full bg-black/15 flex items-center justify-center transition-opacity duration-300 ${
                isHovered ? "opacity-100" : "opacity-0"
              }`}
              onClick={(e) => {
                e.stopPropagation();
                window.open("mailto:nnamdivictory0@gmail.com", "_blank");
              }}
            >
              <EnvelopeClosedIcon className="text-gray-800" />
            </button>
          </div>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`w-[48px] h-[48px] bg-white rounded-full p-3 text-gray-800 shadow-md focus:outline-none transition-transform duration-300 ${
              isMenuOpen ? "rotate-90" : ""
            }`}
          >
            {isMenuOpen ? (
              <Cross1Icon className="h-full w-full" />
            ) : (
              <HamburgerMenuIcon className="h-full w-full" />
            )}
          </button>
        </div>
      </div>

      {/* Full-Screen Menu (only visible when isMenuOpen is true) */}
      {isMenuOpen && (
        <div
          className="
            fixed inset-0 w-full h-full bg-neutral-50 text-black z-40
            p-10 flex flex-col items-center justify-center gap-8
            font-urbanist
            transition-opacity duration-300
          "
        >
          <a
            href="#About"
            className="text-[68px] text-center leading-none hover:text-neutral-600 focus:outline-none"
            onClick={(e) => {
              // This line is the key. It stops the default link behavior.
              e.preventDefault();
              setIsMenuOpen(!isMenuOpen);
              handleScrollTo("About");
            }}
          >
            About
          </a>
          <a
            href="#Skills"
            className="text-[68px] text-center leading-none hover:text-neutral-600 focus:outline-none"
            onClick={(e) => {
              // This line is the key. It stops the default link behavior.
              e.preventDefault();
              setIsMenuOpen(!isMenuOpen);
              handleScrollTo("Skills");
            }}
          >
            Skills
          </a>
          <a
            href="#Projects"
            className="text-[68px] text-center leading-none hover:text-neutral-600 focus:outline-none"
            onClick={(e) => {
              // This line is the key. It stops the default link behavior.
              e.preventDefault();
              setIsMenuOpen(!isMenuOpen);
              handleScrollTo("Projects");
            }}
          >
            Projects
          </a>
          <a
            href="#Experience"
            className="text-[68px] text-center leading-none hover:text-neutral-600 focus:outline-none"
            onClick={(e) => {
              // This line is the key. It stops the default link behavior.
              e.preventDefault();
              setIsMenuOpen(!isMenuOpen);
              handleScrollTo("Experience");
            }}
          >
            Experience
          </a>
          <a
            href="#Testimonials"
            className="text-[68px] text-center leading-none hover:text-neutral-600 focus:outline-none"
            onClick={(e) => {
              // This line is the key. It stops the default link behavior.
              e.preventDefault();
              setIsMenuOpen(!isMenuOpen);
              handleScrollTo("Testimonials");
            }}
          >
            Testimonials
          </a>
          <a
            href="mailto:victorynnamdi0@gmail.com?subject=Project%20Inquiry%20from%20Your%20Portfolio"
            className="text-[68px] text-center leading-none hover:text-neutral-600 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            Contact
          </a>
        </div>
      )}
    </>
  );
};

export default Nav;
