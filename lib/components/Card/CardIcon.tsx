import React from "react";
import { cn } from "@lib/utils/cn";

type CardIconProps = {
  children: React.ReactNode;
  className?: string;
};

export const CardIcon = ({ children, className }: CardIconProps) => {
  return (
    <div className={cn("mb-2 text-primary-550", className)}>{children}</div>
  );
};
