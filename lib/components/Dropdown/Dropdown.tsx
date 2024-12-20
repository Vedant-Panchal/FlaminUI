"use client";
import React, { useEffect, useRef, useState } from "react";
import { Variants } from "framer-motion";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/utils/cn";
import { ClassValue } from "clsx";
import { ChevronDown } from "lucide-react";
import { createContext, useContext } from "react";

interface DropdownContextType {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  selectedOption: string;
  setSelectedOption: React.Dispatch<React.SetStateAction<string>>;
  dropdownPosition: "top" | "bottom";
  containerRef: React.RefObject<HTMLDivElement>;
  buttonRef: React.RefObject<HTMLButtonElement>;
  contentRef: React.RefObject<HTMLDivElement>;
  itemAnimation: Variants | "default" | "slideUp";
  dropdownAnimation: Variants | "default" | "slideUp";
  setDropdownAnimation: React.Dispatch<
    React.SetStateAction<Variants | "default" | "slideUp">
  >;
  setItemAnimation: React.Dispatch<
    React.SetStateAction<Variants | "default" | "slideUp">
  >;
  staggerChildren: boolean;
  setStaggerChildren: React.Dispatch<React.SetStateAction<boolean>>;
}

const DropdownContext = createContext<DropdownContextType | undefined>(
  undefined
);

const useDropdown = () => {
  const context = useContext(DropdownContext);
  if (context === undefined) {
    throw new Error("useDropdown must be used within a Dropdown component");
  }
  return context;
};

interface DropdownButtonProps {
  defaultText: string;
  className?: ClassValue;
}

const DropdownButton: React.FC<DropdownButtonProps> = ({
  defaultText,
  className,
}) => {
  const { isOpen, setIsOpen, selectedOption, buttonRef } = useDropdown();

  const textVariants = {
    initial: { y: 20, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: -20, opacity: 0 },
  };

  return (
    <motion.button
      ref={buttonRef}
      className={cn(
        "relative flex h-full w-full min-w-52 items-center justify-between overflow-hidden rounded-md border border-white/20 bg-zinc-950 px-4 py-2 font-semibold text-white",
        className
      )}
      aria-haspopup="listbox"
      aria-expanded={isOpen}
      onClick={() => setIsOpen(!isOpen)}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={selectedOption ?? defaultText}
          variants={textVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ duration: 0.2 }}
        >
          {selectedOption ?? defaultText}
        </motion.div>
      </AnimatePresence>

      <ChevronDown
        size={24}
        className={
          "transition-transform duration-200 ease-in-out " +
          (isOpen ? "-rotate-180" : "rotate-0")
        }
      />
    </motion.button>
  );
};

interface DropdownProps {
  children: React.ReactNode;
  dropdownAnimation?: "default" | "slideUp" | Variants;
  itemAnimation?: "default" | "slideUp" | Variants;
  staggerItems?: boolean;
}

interface DropdownContentProps {
  children: React.ReactNode;
}

const DropdownContent: React.FC<DropdownContentProps> = ({ children }) => {
  const {
    isOpen,
    dropdownPosition,
    contentRef,
    dropdownAnimation,
    staggerChildren,
  } = useDropdown();

  const [Animation, setAnimation] = useState<Variants>();
  useEffect(() => {
    const baseVariants: Variants = {
      hidden: { opacity: 0, y: dropdownPosition === "top" ? -10 : 10 },
      visible: { opacity: 1, y: 0 },
      exit: { opacity: 0, y: dropdownPosition === "top" ? -10 : 10 },
    };

    const staggeredVariants: Variants = {
      ...baseVariants,
      visible: {
        ...baseVariants.visible,
        transition: { staggerChildren: 0.1, delayChildren: 0.1 },
      },
      exit: {
        ...baseVariants.exit,
        transition: { staggerChildren: 0.1, staggerDirection: -1 },
      },
    };

    if (dropdownAnimation === "slideUp") {
      setAnimation(staggerChildren ? staggeredVariants : baseVariants);
    } else if (dropdownAnimation === "default") {
      setAnimation({
        hidden: { opacity: 0, scale: 0.98 },
        visible: {
          opacity: 1,
          scale: 1,
          transition: staggerChildren
            ? { staggerChildren: 0.1, delayChildren: 0.1 }
            : { duration: 0.2 },
        },
        exit: {
          opacity: 0,
          scale: 0.98,
          transition: staggerChildren
            ? { staggerChildren: 0.1, staggerDirection: -1 }
            : { duration: 0.2 },
        },
      });
    } else {
      setAnimation(dropdownAnimation);
    }
  }, [dropdownAnimation, dropdownPosition, staggerChildren]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          ref={contentRef}
          className={
            "w-full absolute rounded-md" +
            (dropdownPosition === "top" ? "bottom-full mb-1" : "top-full mt-1")
          }
          variants={Animation}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <ul
            className="overflow-y-auto rounded-md border border-white/20 bg-zinc-950 p-1.5 font-semibold text-white shadow-lg"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            {children}
          </ul>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

interface DropdownItemProps {
  value: string;
  children: React.ReactNode;
  className?: ClassValue;
}

const DropdownItem: React.FC<DropdownItemProps> = ({
  value,
  children,
  className,
}) => {
  const { setSelectedOption, setIsOpen, dropdownPosition, itemAnimation } =
    useDropdown();
  const handleSelect = () => {
    setSelectedOption(value);
    setIsOpen(false);
  };

  const defaultVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 },
  };

  const slideUpVariants = {
    hidden: { opacity: 0, y: dropdownPosition === "top" ? -10 : 10 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: dropdownPosition === "top" ? -10 : 10 },
  };

  const [Animation, setAnimation] = useState<Variants>(defaultVariants);
  React.useEffect(() => {
    if (itemAnimation === "slideUp") {
      setAnimation(slideUpVariants);
    } else if (itemAnimation === "default") {
      setAnimation(defaultVariants);
    } else {
      setAnimation(itemAnimation);
    }
    //eslint-disable-next-line
  }, [itemAnimation]);

  return (
    <div className="overflow-hidden">
      <motion.li
        className={cn(
          "w-full cursor-pointer rounded-md px-3 py-2 text-sm font-semibold text-gray-100 text-opacity-90 hover:bg-zinc-900 focus:bg-zinc-900 focus:outline-none",
          className
        )}
        role="option"
        tabIndex={0}
        onClick={handleSelect}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            handleSelect();
          }
        }}
        variants={Animation}
      >
        {children}
      </motion.li>
    </div>
  );
};

interface DropdownLabelProps {
  children: React.ReactNode;
  className?: ClassValue;
}

const DropdownLabel: React.FC<DropdownLabelProps> = ({
  children,
  className,
}) => {
  const { itemAnimation, dropdownPosition } = useDropdown();

  const defaultVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 },
  };

  const slideUpVariants: Variants = {
    hidden: { opacity: 0, y: dropdownPosition === "top" ? -10 : 10 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: dropdownPosition === "top" ? -10 : 10 },
  };

  const [Animation, setAnimation] = useState<Variants>(defaultVariants);
  React.useEffect(() => {
    if (itemAnimation === "slideUp") {
      setAnimation(slideUpVariants);
    } else if (itemAnimation === "default") {
      setAnimation(defaultVariants);
    } else {
      setAnimation(itemAnimation);
    }
    //eslint-disable-next-line
  }, [itemAnimation, dropdownPosition]);
  return (
    <div className="overflow-hidden">
      <motion.li
        className={cn(
          "w-full cursor-pointer rounded-md px-3 py-2 text-sm font-semibold text-gray-100 text-opacity-90 focus:outline-none",
          className
        )}
        variants={Animation}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        {children}
      </motion.li>
    </div>
  );
};

export const Dropdown: React.FC<DropdownProps> = ({
  children,
  dropdownAnimation,
  itemAnimation,
  staggerItems,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Select an option");
  const [dropdownPosition, setDropdownPosition] = useState<"top" | "bottom">(
    "bottom"
  );
  const [currentDropdownAnimation, setDropdownAnimation] = useState<
    Variants | "default" | "slideUp"
  >("default");
  const [currentItemAnimation, setItemAnimation] = useState<
    Variants | "default" | "slideUp"
  >("default");
  const containerRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [staggerChildren, setStaggerChildren] = useState(false);

  useEffect(() => {
    if (dropdownAnimation) {
      setDropdownAnimation(dropdownAnimation);
    }
    if (itemAnimation) {
      setItemAnimation(itemAnimation);
    }
    if (staggerItems) {
      setStaggerChildren(staggerItems);
    }
  }, [dropdownAnimation, itemAnimation, staggerItems]);

  const updatePosition = () => {
    if (buttonRef.current && contentRef.current) {
      const buttonRect = buttonRef.current.getBoundingClientRect();
      const contentHeight = contentRef.current.scrollHeight;
      const windowHeight = window.innerHeight;
      const spaceBelow = windowHeight - buttonRect.bottom;
      setDropdownPosition(
        spaceBelow < contentHeight && buttonRect.top > spaceBelow
          ? "top"
          : "bottom"
      );
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (isOpen) {
      updatePosition();
      window.addEventListener("resize", updatePosition);
      return () => window.removeEventListener("resize", updatePosition);
    }
  }, [isOpen]);

  return (
    <DropdownContext.Provider
      value={{
        isOpen,
        setIsOpen,
        selectedOption,
        setSelectedOption,
        dropdownPosition,
        containerRef,
        buttonRef,
        contentRef,
        dropdownAnimation: currentDropdownAnimation,
        itemAnimation: currentItemAnimation,
        setDropdownAnimation,
        setItemAnimation,
        staggerChildren,
        setStaggerChildren,
      }}
    >
      <div ref={containerRef} className="relative">
        {children}
      </div>
    </DropdownContext.Provider>
  );
};

export { DropdownButton, DropdownContent, DropdownItem, DropdownLabel };
