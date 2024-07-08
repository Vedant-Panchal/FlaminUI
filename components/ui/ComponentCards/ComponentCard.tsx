import React from "react";
type ComponentCardProps = {
  children?: React.ReactNode;
};
export const ComponentCard = ({ children }: ComponentCardProps) => {
  return (
    <div className="cardeffect flex max-h-max min-h-36 min-w-36 max-w-max items-center justify-center rounded-lg px-4 py-2">
      {children}
    </div>
  );
};
