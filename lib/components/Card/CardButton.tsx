import React from "react";
import { cn } from "@lib/utils/cn";

type CardButtonProps = {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
};

export const CardButton = ({
  children,
  className,
  onClick,
}: CardButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "mb-2 flex items-center justify-between gap-2 rounded-lg bg-primary-550 px-4 py-2 text-primary-100 hover:bg-rose-500",
        className,
      )}
      style={{ opacity: 1 }}
    >
      {children}
    </button>
  );
};
