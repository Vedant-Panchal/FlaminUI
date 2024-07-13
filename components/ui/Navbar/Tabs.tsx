"use client";
import React, { Dispatch, SetStateAction, useRef, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export const Tabs = () => {
  return (
    <div className="">
      <SlideTabs />
    </div>
  );
};

const SlideTabs = () => {
  const [position, setPosition] = useState<Position>({
    left: 0,
    width: 0,
    opacity: 0,
  });

  return (
    <ul
      onMouseLeave={() => {
        setPosition((pv) => ({
          ...pv,
          opacity: 0,
        }));
      }}
      className="relative z-[1000] mx-auto flex items-center justify-center w-fit rounded-full h-max overflow-hidden md:py-2 md:px-0.5"
      style={{
        position: "relative",
        padding: "0.8px", // Adjust this value to change border thickness
      }}
    >

      <div
        className="absolute inset-0 -z-10"
        style={{
          background: "linear-gradient(to right, rgb(120,120,120,0.2), rgba(255,255,255,0.5),rgb(120,120,120,0.2))",
        }}
      />
      <div className="bg-black rounded-full w-full h-full flex items-center justify-center">
        <Tab setPosition={setPosition} href="/docs/guide/introduction">
          Docs
        </Tab>
        <Tab setPosition={setPosition} href="/components">
          Components
        </Tab>
        <Tab setPosition={setPosition} href="/customise">
          Customise
        </Tab>
        <Cursor position={position} />
      </div>
    </ul>
  );
};

const Tab = ({
  children,
  setPosition,
  href,
}: {
  children: string;
  setPosition: Dispatch<SetStateAction<Position>>;
  href: string;
}) => {
  const ref = useRef<HTMLLIElement>(null);

  return (
    <Link href={href}>
      <li
        ref={ref}
        onMouseEnter={() => {
          if (!ref.current) return;
          const { width } = ref.current.getBoundingClientRect();
          setPosition({
            left: ref.current.offsetLeft,
            width,
            opacity: 1,
          });
        }}
        className="relative z-10 block cursor-pointer px-3 py-1.5 text-xs  text-white/80 mix-blend-difference md:px-10 md:py-2 md:text-base md:font-normal font-geist"
      >
        {children}
      </li>
    </Link>
  );
};

const Cursor = ({ position }: { position: Position }) => {
  return (
    <motion.li
      initial={{ opacity: 0, width: 0 }}
      animate={{
        ...position,
        transition: {
          opacity: { duration: 0.3 },
          x: { type: "spring", stiffness: 300, damping: 40 },
          width: { 
            type: "spring", 
            stiffness: 300, 
            damping: 30,
            delay: 0.1,
          },
        },
      }}
      className="absolute z-0 h-7 rounded-full bg-gray-50/[3%] md:h-[calc(100%-0.25rem)] md:w-[calc(100%-5rem)] border border-white/10 origin-center"
    />
  );
};

type Position = {
  left: number;
  width: number;
  opacity: number;
};
