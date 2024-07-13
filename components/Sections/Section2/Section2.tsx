import React from "react";
import DottedDesign from "./DottedDesign";

function Section2() {
  return (
    <div className="w-screen h-screen relative flex items-center justify-center">
      <div className="flex items-center justify-center w-2/3 h-96 bg-black">
        <DottedDesign className="bg-white absolute z-50 left-0 top-20" />
        <DottedDesign className="bg-white absolute z-50 right-0 top-20 rotate-180" />
      </div>
      <div className="absolute inset-0 z-[30] bg-noise mix-blend-hard-light bg-repeat object-cover pointer-events-none"></div>
    </div>
  );
}

export default Section2;
