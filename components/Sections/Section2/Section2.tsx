import React, { useEffect, useRef } from "react";
import DottedDesign from "./DottedDesign";
import DottedMask from "./DottedMask";
import AnimatedText from "./AnimatedText";
import { useScroll } from "framer-motion";

function Section2() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    const unsubscribe = scrollYProgress.onChange((value) => {
      console.log("Scroll Progress:", value);
    });
    return () => unsubscribe();
  }, [scrollYProgress]);

  return (
    <div className="h-[300vh] relative max-h-max" ref={containerRef}>
      {" "}
      {/* Increased height for scrolling */}
      <div className="w-full h-screen sticky top-0 flex items-center justify-center">
        <div className="flex items-center justify-center w-2/3 h-96 bg-black">
          {/* Dotted animation */}
          <div className="absolute z-50 left-0 top-20 scale-75">
            <DottedDesign className="brightness-200 absolute" />
            <DottedMask className="brightness-100 absolute" />
          </div>
          <div className="absolute z-50 right-0 top-20 rotate-180 scale-75">
            <DottedDesign className="brightness-200 absolute" />
            <DottedMask className="brightness-100 absolute" />
          </div>
          {/* Text reveal */}
          <AnimatedText scrollValue={scrollYProgress} />
        </div>
        <div className="absolute inset-0 z-[100] h-[300vh] bg-noise opacity-70 mix-blend-soft-light bg-repeat object-cover pointer-events-none"></div>
      </div>
    </div>
  );
}

export default Section2;
