import React from "react";

type CardFooterProps = {
  children: React.ReactNode;
  className?: string;
};

export const CardFooter = ({ children, className }: CardFooterProps) => {
  return <div className={`card-footer ${className}`}>{children}</div>;
};
