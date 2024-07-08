import React from "react";
import { cn } from "@lib/utils/cn";

type CardBodyProps = {
  children: React.ReactNode;
  className?: string;
};

export const CardBody = ({ children, className }: CardBodyProps) => {
  return <div className={cn("mb-4 text-gray-400", className)}>{children}</div>;
};
