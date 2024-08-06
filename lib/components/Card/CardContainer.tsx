import React from "react";
import { cn } from "@/utils/cn";

type CardContainerProps = {
  className?: string;
  children: React.ReactNode;
};

export const CardContainer = ({ className, children }: CardContainerProps) => {
  return <div className={cn("min-h-40 max-w-80", className)}>{children}</div>;
};
