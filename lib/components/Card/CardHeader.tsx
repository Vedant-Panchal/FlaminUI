import React from "react";

type CardHeaderProps = {
  children: React.ReactNode;
  className?: string;
};

export const CardHeader = ({ children, className }: CardHeaderProps) => {
  return <div className={`card-header ${className}`}>{children}</div>;
};
