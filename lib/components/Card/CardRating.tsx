import React from "react";
import { cn } from "@lib/utils/cn";

type CardRatingProps = {
  children: React.ReactNode;
  className?: string;
};

export const CardRating = ({ children, className }: CardRatingProps) => {
  return (
    <h3
      className={cn(
        "ml-4 flex h-5 w-9 items-center justify-center rounded-full border border-transparent bg-rose-100 px-2 text-center text-base text-[#F65571]",
        className,
      )}
    >
      {children}
    </h3>
  );
};
