import React from "react";

type DottedGridFadedProps = {
  faded?: boolean;
};

export const DottedGridFaded = ({ faded = false }: DottedGridFadedProps) => {
  return (
    <div className="relative h-screen w-screen overflow-hidden bg-black">
      {/* Dots */}
      <div
        className="absolute inset-0 h-full w-full bg-black"
        style={{
          backgroundImage: `
          radial-gradient(rgba(255, 255, 255, 0.5) 1px, transparent 1px)
        `,
          backgroundSize: "10px 10px",
        }}
      />
      {/* Text */}
      <div className="absolute inset-0 z-[1000] m-auto h-fit w-fit bg-gradient-to-b from-slate-200 to-slate-50/60 bg-clip-text text-center font-geist text-8xl font-extrabold tracking-tight text-transparent">
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
