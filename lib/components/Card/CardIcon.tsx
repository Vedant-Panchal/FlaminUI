import React from "react";
import { cn } from "@/utils/cn";

type CardIconProps = {
  children: React.ReactNode;
  className?: string;
};

export const CardIcon = ({ children, className }: CardIconProps) => {
  return (
    <div className={cn("mb-2 text-[#F65571]", className)}>{children}</div>
  );
};
