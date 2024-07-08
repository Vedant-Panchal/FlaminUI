import React, { useState } from "react";
import { motion, Variants } from "framer-motion";
import { ClassValue } from "clsx";
import { cn } from "@lib/utils/cn";
import { useDropdown } from "./DropdownContext";

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
  }, [itemAnimation, dropdownPosition]);
  return (
    <div className="overflow-hidden">
      <motion.li
        className={cn(
          "w-full cursor-pointer rounded-md px-3 py-2 text-sm font-semibold text-gray-100 text-opacity-90 focus:outline-none",
          className,
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

export default DropdownLabel;
