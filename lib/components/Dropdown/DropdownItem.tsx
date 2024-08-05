import React, { useState } from "react";
import { motion, Variants } from "framer-motion";
import { ClassValue } from "clsx";
import { cn } from "@/utils/cn";
import { useDropdown } from "./DropdownContext";

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
  }, [itemAnimation]);

  return (
    <div className="overflow-hidden">
      <motion.li
        className={cn(
          "w-full cursor-pointer rounded-md px-3 py-2 text-sm font-semibold text-gray-100 text-opacity-90 hover:bg-zinc-900 focus:bg-zinc-900 focus:outline-none",
          className,
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

export default DropdownItem;
