import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/utils/cn";
import { ClassValue } from "clsx";
import { ChevronDown } from "lucide-react";
import { useDropdown } from "./DropdownContext";

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
        className,
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
        className={`transition-transform duration-200 ease-in-out ${isOpen ? "-rotate-180" : "rotate-0"}`}
      />
    </motion.button>
  );
};

export default DropdownButton;
