import React from "react";
import Card4 from "./Reusables/Card4";
import { TruckElectric, GraduationCap, HousePlus } from "lucide-react";

const Testimonials = () => {
  return (
    <div id="Testimonials" className="relative z-30 mt-20 md:mt-40 p-4">
      {/* Responsive heading */}
      <div className="flex flex-col items-center text-[3rem] md:text-[5rem] leading-none font-semibold text-center">
        <h1>Feedback</h1>
        <h1>that inspires</h1>
      </div>

      {/* Responsive grid for testimonials */}
      <div className="grid grid-cols-1 gap-12 md:gap-4 mt-10 md:mt-35">
        {/* Left-aligned card for desktops, centered on mobile */}
        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-40 justify-center md:justify-self-start">
          <Card4
            Review='"Victory is an exceptional backend team lead. His strategic insights and technical prowess were critical in developing our logistics systems."'
            Name="Damilola Deborah"
            Position="Lead Product Manager at Signtel"
            Source="/images/Dami.png"
            Rotate=" -rotate-3 "
          />
          <div className="w-20 h-20 md:w-30 md:h-30 bg-black rounded-4xl shadow-md flex justify-center items-center text-white">
            <TruckElectric size={40} />
          </div>
        </div>

        {/* Right-aligned card for desktops, centered on mobile */}
        <div className="flex flex-col-reverse md:flex-row items-center gap-6 md:gap-40 justify-center md:justify-self-end">
          <div className="w-20 h-20 md:w-30 md:h-30 bg-black rounded-4xl shadow-md flex justify-center items-center text-white">
            <GraduationCap size={40} />
          </div>
          <Card4
            Review='"Victory quickly became an invaluable part of the team at Learnverse. His contributions to the backend were instrumental in developing an LMS that stood out."'
            Name="Michael Dotun"
            Position="Backend Team Lead at Learnverse"
            Source="/images/blank.png"
            Rotate=" rotate-3 "
          />
        </div>

        {/* Left-aligned card for desktops, centered on mobile */}
        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-40 justify-center md:justify-self-start">
          <Card4
            Review='"Victory consistently delivers high-quality, user-focused features at Bumars. His work on our apps frontend significantly enhances the overall user experience."'
            Name="Nnebe Chibuike Divine"
            Position="Product Owner at at Bumars"
            Source="/images/Chibuike.png"
            Rotate=" -rotate-3 "
          />
          <div className="w-20 h-20 md:w-30 md:h-30 bg-black rounded-4xl shadow-md flex justify-center items-center text-white">
            <HousePlus size={40} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
