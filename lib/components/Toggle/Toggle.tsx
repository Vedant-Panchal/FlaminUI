"use client";
import { cn } from "@lib/utils/cn";
import React, { useState } from "react";

type ToggleVariants = "squared" | "squashed" | "";

type ToggleProps = {
  label?: string;
  onChange?: (checked: boolean) => void;
  initialState?: boolean;
  className?: string;
  variant?: ToggleVariants;
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, "type" | "onChange">;

export const Toggle: React.FC<ToggleProps> = ({
  label,
  onChange,
  initialState = false,
  className = "",
  variant = "",
  ...inputProps
}) => {
  const [isChecked, setIsChecked] = useState(initialState);

  const handleToggle = () => {
    
    setIsChecked((prev) => !prev);
    onChange && onChange(!isChecked);
  };

  return (
    <label className={cn("flex cursor-pointer items-center", className)}>
      <div className="relative">
        <input
          {...inputProps}
          type="checkbox"
          className="sr-only"
          checked={isChecked}
          onChange={handleToggle}
        />
        <div
          className={cn(
            "w-10 shadow-inner transition-colors duration-300 ease-in-out",
            isChecked ? "bg-rose-500" : "bg-rose-200",
            variant === "squashed" ? "h-4" : "h-6",
            switchToggleVariant(variant),
          )}
        ></div>
        <div
          className={cn(
            "absolute bg-white shadow transition-transform duration-300 ease-in-out",
            variant === "squashed"
              ? "-inset-1 -left-1 h-6 w-6"
              : "inset-y-1 left-1 h-4 w-4",
            isChecked
              ? variant === "squashed"
                ? "translate-x-6 transform"
                : "translate-x-full transform"
              : "",
            variant === "squared" ? "rounded" : "rounded-full",
          )}
        ></div>
      </div>
      <div
        className={cn("ml-2 font-geist font-semibold text-rose-100", className)}
      >
        {label}
      </div>
    </label>
  );
};

const switchToggleVariant = (variant: ToggleVariants) => {
  switch (variant) {
    case "squared":
      return "rounded";
    case "squashed":
      return "rounded-full";
    default:
      return "rounded-full";
  }
};
