"use client";
import Link from "next/link";
import React, { useState } from "react";
import { Tabs } from "@src/ui/Navbar/Tabs";
import { motion, Variants } from "framer-motion";
import { MenuIcon, X } from "lucide-react";
import { cn } from "@/utils/cn";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const sidebarVariants: Variants = {
    open: {
      x: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
      },
    },
    closed: {
      x: "100%",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
      },
    },
  };

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="fixed left-0 right-0 top-0 z-[9999] flex h-max w-screen items-center md:justify-center justify-end py-4 px-4 md:w-full md:px-32 md:py-4 backdrop-blur-xl bg-[rgb(77,77,77)]/[0.1%] after:content-[''] after:absolute after:w-full after:h-[0.5px] after:bg-gradient-to-r from-[#787878]/0 via-[#DEDEDE] to-[#787878]/0 after:bottom-0 after:right-0 after:opacity-50">
      <Link href={"/"} className="absolute left-4 text-sm md:left-32">
        <p>
          <span className="bg-gradient-to-br from-[#FFF] to-[#999] bg-clip-text font-fira text-2xl font-bold text-transparent">
            Flamin
          </span>
          <span className="bg-gradient-to-r from-[#FB7185] to-[#F43F5E] bg-clip-text font-sans text-xl font-black text-transparent">
            UI
          </span>
        </p>
      </Link>
      <div className="hidden md:block">
        <Tabs />
      </div>
      <div className="relative md:hidden w-10 h-10">
        <MenuToggle
          toggle={toggleMenu}
          isOpen={isOpen}
          className="relative top-0 left-0"
        />
      </div>
      <motion.div
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        variants={sidebarVariants}
        className="absolute top-0 right-0 z-[100] flex h-screen w-full flex-col items-start justify-start gap-5 backdrop-blur-2xl bg-black/60 text-white shadow-lg"
      >
        <MenuToggle toggle={toggleMenu} isOpen={isOpen} />
        <Navigation isOpen={isOpen} toggle={toggleMenu} />
      </motion.div>
    </header>
  );
};

export default Navbar;

const MenuToggle: React.FC<{
  toggle: () => void;
  isOpen: boolean;
  className?: string;
}> = ({ toggle, isOpen, className }) => (
  <button
    onClick={toggle}
    className={cn(
      "fixed top-4 right-4 z-30 text-white p-2 focus:outline-none",
      className
    )}
  >
    {isOpen ? <X /> : <MenuIcon strokeWidth={2.5} />}
  </button>
);

const Navigation: React.FC<{ isOpen: boolean,toggle:()=>void }> = ({ isOpen,toggle }) => {
  const containerVariants: Variants = {
    open: {
      transition: {
        staggerChildren: 0.07,
        delayChildren: 0.2,
      },
    },
    closed: {
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
  };

  return (
    <motion.ul
      className="z-20 pl-10 pt-20 flex items-start justify-start flex-col w-full h-full"
      variants={containerVariants}
      initial="closed"
      animate={isOpen ? "open" : "closed"}
    >
      {["Home", "Docs", "Components"].map((item) => (
        <MenuItem
          key={item}
          label={item}
          link={
            item === "Docs"
              ? "docs/guide/introduction"
              : item === "Components"
                ? "/components"
                : "/"
          }
          toggle={toggle}
        />
      ))}
    </motion.ul>
  );
};

const MenuItem: React.FC<{ label: string; link: string,toggle:()=>void }> = ({
  label,
  link,
  toggle
}) => {
  const itemVariants: Variants = {
    open: {
      y: 0,
      opacity: 1,
      transition: {
        y: { stiffness: 1000, velocity: -100 },
      },
    },
    closed: {
      y: 50,
      opacity: 0,
      transition: {
        y: { stiffness: 1000 },
      },
    },
  };

  return (
    <motion.li
      className="mb-4 cursor-pointer rounded py-2 px-4 transition-colors duration-200 hover:text-gray-100 font-semibold text-3xl"
      variants={itemVariants}
      onClick={toggle}
    >
      <Link href={link}>{label}</Link>
    </motion.li>
  );
};
