import { cn } from "@/utils/cn";
import { motion } from "framer-motion";
import React from "react";
type squareSize = "xs" | "sm" | "md" | "lg";

const sizeMap: Record<squareSize, number> = {
  xs: 0.8,
  sm: 1,
  md: 1.25,
  lg: 1.5,
};

type NorthernSquareProps = {
  squareSize?: squareSize;
  className?: string;
};

export const NorthernSquare = ({ squareSize="sm",className }: NorthernSquareProps) => {
  const size = sizeMap[squareSize];
  const bgSize = `${size}em ${size}em`;
  return (
    <div className={cn("relative h-screen w-screen overflow-hidden bg-transparent",className)}>
      {/* Existing motion.div elements remain unchanged */}
      <motion.div
        className="absolute z-10 h-[700px] w-[700px] rounded-full bg-blue-500 blur-3xl"
        initial={{
          bottom: "-50%",
          left: "-20%",
        }}
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
        initial={{
          bottom: "-50%",
          left: "-20%",
        }}
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
        className="absolute -right-[10%] bottom-[10%] z-10 h-[400px] w-[400px] rounded-full bg-purple-500 blur-3xl"
        initial={{
          bottom: "-10%",
          right: "-10%",
        }}
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
        className="absolute -bottom-[20%] right-[10%] z-10 h-[400px] w-[400px] rounded-full bg-blue-500 blur-3xl"
        initial={{
          bottom: "-20%",
          right: "5%",
        }}
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

      {/* Repeating square pattern overlay */}
      <div
        className="absolute inset-0 z-50 h-full w-full"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 17 17'%3E%3Crect width='16' opacity='1' height='16' x='0' y='0' fill='%23000000' /%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          backgroundSize: bgSize,
          backgroundPosition: "center center",
        }}
      ></div>

      <motion.div className="absolute inset-0 z-[1000] m-auto h-fit p-2 w-fit bg-gradient-to-b from-slate-200 to-slate-50/60 bg-clip-text text-center font-geist text-7xl font-extrabold tracking-tight text-transparent">
        Northern Lights
      </motion.div>
    </div>
  );
};
