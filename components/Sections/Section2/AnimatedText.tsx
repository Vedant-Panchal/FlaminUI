"use client";
import { useScroll, motion, useTransform } from "framer-motion";
import React, { ReactNode, useRef } from "react";

type AnimatedTextProps = {
  scrollValue: any;
};

function AnimatedText({ scrollValue }: AnimatedTextProps) {
  const paragraph =
    "We know what's going on. You need highly customizable components to create unique interfaces, but building them from scratch can be frustrating and time consuming. That's when FlaminUI comes in. It's a collection of components that you can use to create stunning components.";
  const words = paragraph.split(" ");

  const introOpacity = useTransform(scrollValue, [0, 0.1], [0, 1]);
  const introFontSize = useTransform(scrollValue, [0, 0.2], ["50px", "38px"]); // Initial 50px to 32px

  return (
    <div className="flex flex-col items-center justify-center h-full">
      <span className="text-wrap w-full md:w-[49vw] font-geist md:text-4xl h-max  text-2xl text-center md:leading-tight">
        <motion.div
          style={{
            opacity: introOpacity,
          }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
        >
          <motion.span style={{ fontSize: introFontSize }} className="text-xl mb-0">
            <span className="bg-gradient-to-br from-[#FFF] to-[#999] bg-clip-text font-fira font-bold text-transparent">
              {`Introducing Flamin`}
            </span>
            <span className="bg-gradient-to-r from-[#FB7185] to-[#F43F5E] bg-clip-text font-sans text-xl font-black text-transparent">
              UI
            </span>
          </motion.span>
        </motion.div>
        <br className="mb-6 md:mb-1" />
        <motion.div className="" style={{ opacity: introOpacity }}>
          {words.map((word, i) => {
            const start = 0.2 + (i / words.length) * 0.8; // Start after the intro animation
            const end = start + 0.8 / words.length;
            if (word === "ProtoUI") {
              return (
                <ProtoWord
                  key={i}
                  progress={scrollValue}
                  range={[start, end]}
                />
              );
            } else {
              return (
                <Word key={i} progress={scrollValue} range={[start, end]}>
                  {word}{" "}
                </Word>
              );
            }
          })}
        </motion.div>
      </span>
    </div>
  );
}

const Word = ({
    children,
    progress,
    range,
  }: {
    children: ReactNode;
    progress: any;
    range: Array<number>;
  }) => {
    const opacity = useTransform(progress, range, [0, 1]);
  
    return (
      <span className="relative inline-block mr-2">
        <motion.span
          className="absolute top-0 left-0 font-medium text-opacity-10 text-white"
        >
          {children}
        </motion.span>
        <motion.span
          className="text-white/90 font-medium"
          style={{ opacity }}
        >
          {children}
        </motion.span>
      </span>
    );
  };
  
  const ProtoWord = ({
    progress,
    range,
  }: {
    progress: any;
    range: Array<number>;
  }) => {
    const opacity = useTransform(progress, range, [0, 1]);
  
    return (
      <span className="relative inline-block mr-2">
        <motion.span
          className="absolute top-0 left-0 text-opacity-10 text-white"
        >
          <span className="font-fira font-bold">{`Flamin`}</span>
          <span className="font-sans text-xl font-black">UI </span>
        </motion.span>
        <motion.span style={{ opacity }}>
          <span className="bg-gradient-to-br from-[#FFF] to-[#999] bg-clip-text font-fira font-bold text-transparent">
            {`Flamin`}
          </span>
          <span className="bg-gradient-to-r from-[#FB7185] to-[#F43F5E] bg-clip-text font-sans text-xl font-black text-transparent">
            UI{" "}
          </span>
        </motion.span>
      </span>
    );
  };
  

export default AnimatedText;
