import React from "react";
import { EllipseLeft, EllipseRight } from "@src/Sections/Section1/Ellipse";
import { ColoredEllipse } from "./ColoredEllipse";
import { SpinningSVG } from "./SpinSvg";
import Link from "next/link";
import { motion } from "framer-motion";
import ReactIcon from "./ReactIcon";
import NextIcon from "./NextIcon";
import TailwindIcon from "./TailwindIcon";
import FramerIcon from "./FramerIcon";
motion;
function Section1() {
  return (
    <div className="w-full overflow-x-clip relative h-screen flex items-center justify-center">
      <div className="absolute inset-0 h-full w-full overflow-hidden ">
        {/* 34 upper and 45 lower */}
        <EllipseRight className="hidden md:block absolute -top-96 z-20 -right-[calc(100%-45em)] w-fit h-fit rotate-[10.311deg] " />
        <EllipseRight className="hidden md:block absolute -top-96 z-50 -right-[calc(100%-34rem)] w-fit h-fit rotate-[10.311deg] " />
        <EllipseLeft className="hidden md:block absolute -top-96 z-20 -left-[calc(100%-45em)] w-fit h-fit -rotate-[10.311deg] " />
        <EllipseLeft className="hidden md:block absolute -top-96 z-50 -left-[calc(100%-34rem)] w-fit h-fit -rotate-[10.311deg] " />
        {/* //*Right Lower ellipse  */}
        <motion.div
          initial={{ right: -150, bottom: -200, zIndex: 10, opacity: 0 }}
          animate={{
            bottom: [-200, 400],
            right: [-150, 20, -100],
            opacity: [0, 1, 0],
          }}
          transition={{
            repeat: Infinity,
            repeatType: "reverse",
            duration: 5,
            ease: "easeInOut",
          }}
          className="absolute "
        >
          <ColoredEllipse className="blur-[90px] rotate-12" />
        </motion.div>

        {/* //*Right Upper ellipse  */}
        <motion.div
          initial={{ right: "-30rem", bottom: 400, zIndex: 40 }}
          animate={{
            bottom: [400, -200],
            right: ["-30rem", "-10rem", "-30rem"],
          }}
          transition={{
            repeat: Infinity,
            repeatType: "reverse",
            duration: 5,
            ease: "easeInOut",
          }}
          className="absolute"
        >
          <ColoredEllipse className="blur-[90px] scale-[65%]" />
        </motion.div>

        {/* //*Left Lower ellipse  */}
        <motion.div
          initial={{ left: "-30rem", bottom: 400, zIndex: 10 }}
          animate={{ bottom: [400, -200], left: ["-30rem", 0, "-30rem"] }}
          transition={{
            repeat: Infinity,
            repeatType: "reverse",
            duration: 5,
            ease: "easeInOut",
          }}
          className="absolute"
        >
          <ColoredEllipse className="blur-[90px]" />
        </motion.div>

        {/* //*Left Upper ellipse  */}
        <motion.div
          initial={{ left: "-30rem", bottom: -200, zIndex: 40 }}
          animate={{
            bottom: [-200, 400],
            left: ["-30rem", "-10rem", "-30rem"],
          }}
          transition={{
            repeat: Infinity,
            repeatType: "reverse",
            duration: 5,
            ease: "easeInOut",
          }}
          className="absolute"
        >
          <ColoredEllipse className="blur-[90px] scale-[65%] -rotate-180" />
        </motion.div>
        <div className="absolute inset-0 z-[50] bg-noise mix-blend-darken bg-repeat object-cover pointer-events-none"></div>
      </div>
      <div className="absolute w-full h-[1000px]  z-[50] bg-gradient-to-t from-black from-10% via-white/0 to-black to-90%"></div>

      <div className="relative z-[100] flex flex-col items-center md:justify-center justify-start pt-40 md:pt-0 h-full">
        <h1 className="md:text-6xl text-3xl font-geist text-transparent  md:leading-[70px] font-bold md:text-center text-center px-4">
          <span className="bg-clip-text bg-gradient-to-b from-[#fffff7] to-[#727267]">
            Redifining Component Flexibility
          </span>{" "}
          <br />
          <span className="bg-clip-text bg-gradient-to-b from-[#fffff7] to-[#727267]">
            &quot;Make Your Interfaces 10x Unique&quot;
          </span>
        </h1>
        <div className="flex md:flex-row md:items-center md:justify-center md:space-x-5 mt-10 flex-col gap-3 w-full px-10">
          <Link
            href={"/components"}
            className="bg-gradient-to-b from-[#D9D9D9] to-[#B9B9B9] text-black font-geist px-5 py-3 flex items-center md:justify-between justify-center gap-3 rounded-lg  font-semibold md:text-left text-center"
          >
            Explore Components
          </Link>
          <Link
            href="/docs/guide/introduction"
            className="px-0.5 py-0.5 rounded-[9px] flex items-center gap-3  font-semibold text-white font-geist bg-white/[5%] relative overflow-hidden shadow-md duration-200 ease-in-out hover:shadow-lg hover:brightness-95"
          >
            <div className="absolute inset-0 z-0 flex items-center justify-center scale-[1.7]">
              <SpinningSVG />
            </div>
            <span className="relative z-10 w-full h-full bg-black px-7 py-3 rounded-lg md:text-left text-center">
              Docs
            </span>
          </Link>
        </div>
        <div className="flex items-center justify-around md:justify-between flex-wrap px-6 gap-3 md:w-max space-x-5 mt-4 text-sm text-[#999999] font-geist font-semibold">
          <div className="flex items-center justify-between gap-2 w-max">
            <ReactIcon />
            React
          </div>
          <div className="flex items-center justify-between gap-2 w-max">
            <NextIcon /> Next JS
          </div>
          <div className="flex items-center justify-between gap-2 w-max">
            <TailwindIcon /> Tailwind
          </div>
          <div className="flex items-center justify-between gap-2 w-max">
            <FramerIcon /> Framer Motion
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section1;
