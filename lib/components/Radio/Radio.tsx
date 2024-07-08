"use client";
import React, { useState } from "react";
import { cn } from "@lib/utils/cn";
import { AnimatePresence, motion, Variants } from "framer-motion";

type RadioProps = {
  label?: string;
  className?: string;
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, "type" | "onChange">;

const Radio: React.FC<RadioProps> = ({ label, className, ...props }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = () => {
    setIsChecked(!isChecked);
  };

  const radioSelectedVariants: Variants = {
    hidden: {
      opacity: 0,
    },
    initial: {
      opacity: 1,
      transition: {
        duration: 0.1,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.1,
      },
    },
  };

  return (
    <div className="flex items-center">
      <input
        type="radio"
        className={cn(
          "relative hidden h-4 w-4 cursor-pointer appearance-none rounded-full border-2 border-pink-300 outline-none transition-colors duration-300 checked:border-pink-500 hover:border-pink-500 focus:border-pink-500",
          className,
        )}
        checked={isChecked}
        onChange={handleChange}
        {...props}
      />
      <label
        className="flex cursor-pointer items-center"
        onClick={handleChange}
      >
        <div
          className={cn(
            "relative flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full border-2 border-rose-500 p-1",
            className,
          )}
        >
          <AnimatePresence>
            {isChecked && (
              <motion.div
                className={cn(
                  "h-full w-full rounded-full bg-rose-500",
                  className,
                )}
                variants={radioSelectedVariants}
                initial="hidden"
                animate="initial"
                exit="exit"
              ></motion.div>
            )}
          </AnimatePresence>
        </div>
        <span
          className={cn(
            "ml-2 font-geist font-semibold text-rose-100",
            className,
          )}
        >
          {label}
        </span>
      </label>
    </div>
  );
};

export default Radio;
