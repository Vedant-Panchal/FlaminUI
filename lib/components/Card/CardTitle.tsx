import React from "react";
import { cn } from "@lib/utils/cn";

type CardTitleProps = {
  children: React.ReactNode;
  className?: string;
};

export const CardTitle = ({ children, className }: CardTitleProps) => {
  return (
    <h2 className={cn("mb-2 text-xl font-semibold text-white", className)}>
      {children}
    </h2>
  );
};
