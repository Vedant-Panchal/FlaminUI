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
    <div className="h-[300vh] w-full relative max-h-max" ref={containerRef}>
      {" "}
      {/* Increased height for scrolling */}
      <div className="w-full h-screen sticky md:top-0 top-10 flex items-center justify-center bg-red-500/0">
        <div className="flex items-center justify-center md:w-2/3 h-96 bg-black px-4 md:px-0">
          {/* Dotted animation */}
          <div className="absolute z-50 md:left-0 md:top-20  portrait:top-[-8rem] portrait:right-[-5rem] scale-[0.3] md:scale-75 ">
            <DottedDesign className="brightness-200 absolute" />
            <DottedMask className="brightness-100 absolute" />
          </div>
          <div className="absolute z-50 md:right-0 md:top-20 portrait:-bottom-40 portrait:-left-20 rotate-180 scale-[0.3] md:scale-75">
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
