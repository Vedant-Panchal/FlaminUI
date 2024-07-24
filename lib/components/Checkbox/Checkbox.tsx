"use client"
import { AnimatePresence, motion } from "framer-motion";
import { Check } from "lucide-react";
import { cn } from "@/utils/cn";
import React, { InputHTMLAttributes, useState } from "react";

type ToggleProps = {
  label?: string;
  className?: string;
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, "type" | "onChange">;

const Checkbox: React.FC<ToggleProps> = ({ label, className, ...props }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="flex items-center">
      <input
        type="checkbox"
        className={cn(
          "relative hidden h-4 w-4 cursor-pointer appearance-none rounded border-2 border-pink-300 outline-none transition-colors duration-300 before:absolute before:left-1/2 before:top-1/2 before:h-3 before:w-3 before:-translate-x-1/2 before:-translate-y-1/2 before:scale-0 before:rounded before:bg-rose-500 before:text-xl before:font-bold before:text-white before:content-['✓'] checked:border-rose-500 checked:bg-rose-500 checked:before:scale-100 hover:border-pink-500 focus:border-pink-500",
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
            "relative h-6 w-6 flex-shrink-0 rounded border-2 border-rose-500",
            className,
          )}
        >
          <AnimatePresence>
            {isChecked && (
              <div
                className={cn(
                  "absolute left-0 top-0 flex h-full w-full items-center justify-center overflow-x-hidden bg-rose-500 text-white",
                  className,
                )}
              >
                <motion.div
                  className="overflow-x-hidden"
                  initial={{ opacity: 1, width: 0, scale: 0 }}
                  animate={{ opacity: 1, width: "max-content", scale: 1 }}
                  exit={{ opacity: 1, scale: 0 }}
                  transition={{ duration: 0.2, ease: "easeInOut" }}
                >
                  <Check strokeWidth={4} size={16} />
                </motion.div>
              </div>
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

export default Checkbox;
