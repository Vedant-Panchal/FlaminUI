"use client"
import { cn } from "@/lib/utils/cn";
import { motion } from "framer-motion";
import React from "react";

type dotSize = "xs" | "sm" | "md" | "lg";

const sizeMap: Record<dotSize, number> = {
  xs: 0.8,
  sm: 1,
  md: 1.25,
  lg: 1.5,
};

type NorthernDottedProps = {
  dotSize?: dotSize;
  className?: string;
};

export const NorthernDotted = ({ dotSize="xs",className }: NorthernDottedProps) => {
  const size = sizeMap[dotSize];
  const bgSize = `${size}rem ${size}rem`;
  return (
    <div className={cn("relative h-screen w-screen overflow-hidden bg-transparent",className)}>
      <motion.div
        className="absolute z-10 h-[700px] w-[700px] rounded-full bg-blue-500 blur-3xl"
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
        animate={{
          bottom: ["-20%", "20%", "10%", "-30%"],
          left: ["-20%", "30%", "45%", "38%"],
        }}
      ></motion.div>

      <motion.div
        className="absolute z-10 h-[750px] w-[750px] rounded-full bg-purple-500 blur-3xl"
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
        animate={{
          bottom: ["-50%", "-20%", "40%", "10%"],
          left: ["30%", "-10%", "10%", "60%"],
        }}
      ></motion.div>
      <motion.div
        className="absolute z-10 h-[400px] w-[400px] rounded-full bg-purple-500 blur-3xl"
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
        animate={{
          bottom: ["-10%", "15%", "-20%", "-18%"],
          right: ["-10%", "-5%", "20%", "50%"],
        }}
      ></motion.div>
      <motion.div
        className="absolute z-10 h-[400px] w-[400px] rounded-full bg-blue-500 blur-3xl"
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
        animate={{
          bottom: ["-20%", "-18%", "-20%", "20%"],
          right: ["5%", "8%", "35%", "50%"],
        }}
      ></motion.div>
      <motion.div className="absolute inset-0 z-[1000] m-auto h-fit w-fit bg-gradient-to-b from-slate-200 to-slate-50/60 bg-clip-text text-center font-geist text-8xl font-extrabold tracking-tight text-transparent">
        Northern Lights,
        <br />
       Dotted
      </motion.div>

      <div
        className="relative z-50 h-full w-full overflow-hidden"
        style={{
          backgroundImage:
            "radial-gradient(50% 50% at 50% 50%, rgba(0, 0, 0, 0.02) 21%, #000 30%)",
          backgroundSize: bgSize,
          backgroundPosition: "center center",
          opacity: 1,
            // mixBlendMode: 'overlay',
        }}
      ></div>
    </div>
  );
};
