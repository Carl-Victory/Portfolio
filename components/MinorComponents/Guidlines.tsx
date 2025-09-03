import React from "react";

const Guidlines = () => {
  return (
    <div className="absolute inset-0 pointer-events-none z-5 flex justify-between px-4">
      <div className="w-[0.5px] h-full bg-gray-300" />
      <div className="w-[0.5px] h-full bg-gray-300 left-1/2 transform -translate-x-1/2 " />
      <div className="w-[0.5px] h-full bg-gray-300" />
    </div>
  );
};

export default Guidlines;
