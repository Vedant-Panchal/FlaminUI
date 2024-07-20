import React from "react";
import { cn } from "@lib/utils/cn";
import { switchVariant } from "@lib/utils/variant";
import { ClassNameValue } from "tailwind-merge";

type ButtonProps = {
  children?: React.ReactNode;
  variant?:
    | "info"
    | "success"
    | "warning"
    | "error"
    | "disabled"
    | "ghost"
    | "link"
    | "";
  className?: ClassNameValue;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({
  children,
  variant = "",
  className,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={cn(
        "flex items-center gap-3 rounded-lg bg-rose-500 px-6 py-2 font-geist font-semibold text-rose-100 shadow-md duration-200 ease-in-out hover:shadow-lg hover:brightness-95",
        className,
        switchVariant(variant),
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
