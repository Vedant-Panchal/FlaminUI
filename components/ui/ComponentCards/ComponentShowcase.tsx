import React from "react";
import { ClassNameValue } from "tailwind-merge";
import { cn } from "@/utils/cn";

type ComponentShowcaseProps = {
  children?: React.ReactNode;
  title?: string;
  className?: ClassNameValue;
} & React.HTMLAttributes<HTMLDivElement>;

export const ComponentShowcase = ({
  title,
  children,
  className,
  ...props
}: ComponentShowcaseProps) => {
  return (
    <div
      className={cn(
        "flex h-max w-full flex-col items-center justify-start space-y-5 rounded-lg border border-rose-100/20 px-6 py-8",
        className,
      )}
      {...props}
    >
      <div className="font-geist text-2xl font-semibold text-rose-100">
        {title}
      </div>
      <div className="flex h-max w-full flex-wrap items-center justify-center gap-x-2 gap-y-2">
        {children}
      </div>
    </div>
  );
};
