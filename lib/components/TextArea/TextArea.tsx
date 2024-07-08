import { cn } from "@lib/utils/cn";
import React from "react";
import { TextAreaVaraints } from "@lib/types/type";
// const variants: TextAreaVaraints[] = ["info", "success", "warning", "error", "disabled", ""];
type TextAreaProps = {
  placeholder?: string;
  className?: string;
  value?: string;
  variant?: TextAreaVaraints;
} & React.TextareaHTMLAttributes<HTMLTextAreaElement>;

export const TextArea = ({
  placeholder = "Enter your text here...",
  className,
  value,
  variant = "",
  ...props
}: TextAreaProps) => {
  return (
    <textarea
      placeholder={placeholder}
      value={value}
      disabled={variant === "disabled"}
      className={cn(
        "min-h-24 min-w-72 resize rounded-lg bg-transparent px-3 py-2 font-geist text-xs font-normal text-zinc-100 outline outline-1 outline-gray-100/10 selection:bg-gray-400/40 placeholder:text-zinc-400 focus:outline focus:outline-gray-100/80",
        className,
        switchTextVariant(variant),
      )}
      {...props}
    ></textarea>
  );
};

const switchTextVariant = (variant: TextAreaVaraints) => {
  switch (variant) {
    case "info":
      return "border border-sky-300 focus:outline focus:outline-sky-500 focus:outline-offset-4";
    case "success":
      return "border border-teal-300 focus:outline focus:outline-teal-500 focus:outline-offset-4";
    case "warning":
      return "border border-amber-300 focus:outline focus:outline-amber-500 focus:outline-offset-4";
    case "error":
      return "border border-red-300 focus:outline focus:outline-red-500 focus:outline-offset-4";
    case "disabled":
      return "bg-white border text-gray-800 opacity-50 cursor-not-allowed";
    default:
      return "";
  }
};
