import { cn } from "@/utils/cn";
import React from "react";

type SquareSize = "xs" | "sm" | "md" | "lg" | "xl";

const sizeMap: Record<SquareSize, number> = {
  xs: 0.8,
  sm: 1,
  md: 1.5,
  lg: 2,
  xl: 2.5,
};

type SquareGridFadedProps = {
  squareSize?: SquareSize | number;
  faded?: boolean;
  className?: string;
};

export const SquareGridFaded = ({
  squareSize = "md",
  faded = false,
  className
}: SquareGridFadedProps) => {
  const size =
    typeof squareSize === "number" ? squareSize : sizeMap[squareSize];
  const gridSize = `${size}em ${size}em`;

  return (
    <div className={cn("relative h-screen w-screen overflow-hidden bg-black",className)}>
      {/* Grid */}
      <div
        className="absolute inset-0 h-full w-full"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: gridSize,
        }}
      />

      {/* Text */}
      <div className="absolute inset-0 z-[1000] m-auto h-fit w-fit bg-gradient-to-b from-slate-200 to-slate-50/60 bg-clip-text text-center font-geist text-8xl font-extrabold tracking-tight text-transparent">
        Square Grid
      </div>

      {/* Fade out mask */}
      {faded && (
        <div
          className="absolute inset-0 h-full w-full"
          style={{
            background:
              "radial-gradient(circle at center, transparent 20%, black 80%)",
            mixBlendMode: "multiply",
          }}
        />
      )}
    </div>
  );
};
