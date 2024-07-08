import React, { useEffect, useState } from "react";
import { AnimatePresence, motion, Variants } from "framer-motion";
import { useDropdown } from "./DropdownContext";

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
          className={`absolute rounded-md ${dropdownPosition === "top" ? "bottom-full mb-1" : "top-full mt-1"} w-full`}
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

export default DropdownContent;
