"use client";

import { useState, useEffect } from "react";
import { ChevronUpIcon } from "@radix-ui/react-icons";

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      // Shows the button after scrolling 300px
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Set up the scroll event listener
  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div
      className={`
        fixed bottom-6 right-6 z-100 transition-opacity duration-300
        ${isVisible ? "opacity-100" : "opacity-0 pointer-events-none"}
      `}
    >
      <button
        onClick={scrollToTop}
        className="
          flex items-center justify-center w-12 h-12 rounded-full 
          bg-white text-gray-800 shadow-lg
          transition-colors duration-200 hover:bg-gray-100
        "
      >
        <ChevronUpIcon className="h-6 w-6" />
      </button>
    </div>
  );
};

export default BackToTop;
