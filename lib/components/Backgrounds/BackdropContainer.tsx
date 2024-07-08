import React from "react";
type ComponentContainerProps = {
  children?: React.ReactNode;
};
export const BackdropContainer = ({ children }: ComponentContainerProps) => {
  return (
    <>
      <div className="relative z-10 flex h-full w-full flex-col items-start justify-start space-y-5 overflow-x-hidden backdrop-blur-[6rem]">
        {children}
      </div>
    </>
  );
};
