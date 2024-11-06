import { cn } from "@/utils/cn";
import React from "react";

type dotSize = "xs" | "sm" | "md" | "lg";

const sizeMap: Record<dotSize, number> = {
  xs: 0.8,
  sm: 1,
  md: 1.25,
  lg: 1.5,
};

type DottedGridFadedProps = {
  faded?: boolean;
  className?: string;
  dotSize?: dotSize;
};

export const DottedGridFaded = ({
  faded = false,
  className,
  dotSize = "xs",
}: DottedGridFadedProps) => {
  const size = sizeMap[dotSize];
  const bgSize = size + "rem " + size + "rem";

  return (
    <div
      className={cn(
        "relative h-screen w-screen overflow-hidden bg-black",
        className
      )}
    >
      {/* Dots */}
      <div
        className="absolute inset-0 h-full w-full bg-black"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255, 255, 255, 0.5) 1px, transparent 1px)",
          backgroundSize: bgSize,
        }}
      />
      {/* Text */}
      <div className="absolute inset-0 z-[1000] m-auto h-fit w-fit bg-gradient-to-b from-slate-200 to-slate-50/60 bg-clip-text text-center font-geist text-7xl font-extrabold tracking-tight text-transparent">
        Dotted Grid
      </div>
      {/* Fade out mask */}
      {faded && (
        <div
          className="absolute inset-0 h-full w-full"
          style={{
            background:
              "radial-gradient(circle at center, transparent 10%, black 90%)",
            mixBlendMode: "multiply",
          }}
        />
      )}
    </div>
  );
};
