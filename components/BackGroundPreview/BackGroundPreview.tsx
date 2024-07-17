// Import necessary components
import { NorthernDotted } from "@components/Backgrounds/NorthernDotted";
import { NorthernSquare } from "@components/Backgrounds/NorthernSquare";
import { DottedGridFaded } from "@components/Backgrounds/DottedGridFaded";
import { SquareGridFaded } from "@components/Backgrounds/SquareGridFaded";
import CodePreview from "@src/CodePreview/CodePreview";
import FluxBg from "@/lib/components/Backgrounds/FluxBgSetUp";

// Function to escape code strings
const escapeCode = (code: any) => {
  return code.replace(/`/g, "\\`").replace(/\${/g, "\\${");
};

// Function to unescape code strings
const unescapeCode = (code: any) => {
  return code.replace(/\\`/g, "`").replace(/\\\${/g, "${");
};

// Code string for SquareGridFaded component
const squaregridcode = escapeCode(`import { cn } from "@/lib/utils/cn";
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
  const gridSize = \`\${size}em \${size}em\`;

  return (
    <div className={cn("relative h-screen w-screen overflow-hidden bg-black",className)}>
      {/* Grid */}
      <div
        className="absolute inset-0 h-full w-full"
        style={{
          backgroundImage: \`
            linear-gradient(to right, rgba(255, 255, 255, 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
          \`,
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

`);

// Code string for DottedGridFaded component
const dottedgridcode = escapeCode(`
import { cn } from "@/lib/utils/cn";
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

export const DottedGridFaded = ({ faded = false,className,dotSize="xs" }: DottedGridFadedProps) => {
  const size = sizeMap[dotSize];
  const bgSize = \`\${size}rem \${size}rem\`;
  return (
    <div className={cn("relative h-screen w-screen overflow-hidden bg-black",className)}>
      {/* Dots */}
      <div
        className="absolute inset-0 h-full w-full bg-black"
        style={{
          backgroundImage: \`
          radial-gradient(rgba(255, 255, 255, 0.5) 1px, transparent 1px)
        \`,
          backgroundSize: bgSize,
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

`);

// Code string for NorthernSquare component
const northensquarecode = escapeCode(`
import { cn } from "@/lib/utils/cn";
import { motion } from "framer-motion";
import React from "react";
type squareSize = "xs" | "sm" | "md" | "lg";

const sizeMap: Record<squareSize, number> = {
  xs: 0.8,
  sm: 1,
  md: 1.25,
  lg: 1.5,
};

type NorthernSquareProps = {
  squareSize?: squareSize;
  className?: string;
};

export const NorthernSquare = ({ squareSize="sm",className }: NorthernSquareProps) => {
  const size = sizeMap[squareSize];
  const bgSize = \`\${size}em \${size}em\`;
  return (
    <div className={cn("relative h-screen w-screen overflow-hidden bg-transparent",className)}>
      {/* Existing motion.div elements remain unchanged */}
      <motion.div
        className="absolute z-10 h-[700px] w-[700px] rounded-full bg-blue-500 blur-3xl"
        initial={{
          bottom: "-50%",
          left: "-20%",
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
        animate={{
          bottom: ["-20%", "20%", "10%", "-30%"],
          left: ["-20%", "30%", "45%", "38%"],
        }}
      ></motion.div>
      <motion.div
        className="absolute z-10 h-[750px] w-[750px] rounded-full bg-purple-500 blur-3xl"
        initial={{
          bottom: "-50%",
          left: "-20%",
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
        animate={{
          bottom: ["-50%", "-20%", "40%", "10%"],
          left: ["30%", "-10%", "10%", "60%"],
        }}
      ></motion.div>
      <motion.div
        className="absolute -right-[10%] bottom-[10%] z-10 h-[400px] w-[400px] rounded-full bg-purple-500 blur-3xl"
        initial={{
          bottom: "-10%",
          right: "-10%",
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
        animate={{
          bottom: ["-10%", "15%", "-20%", "-18%"],
          right: ["-10%", "-5%", "20%", "50%"],
        }}
      ></motion.div> 
       <motion.div
        className="absolute -bottom-[20%] right-[10%] z-10 h-[400px] w-[400px] rounded-full bg-blue-500 blur-3xl"
        initial={{
          bottom: "-20%",
          right: "5%",
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
        animate={{
          bottom: ["-20%", "-18%", "-20%", "20%"],
          right: ["5%", "8%", "35%", "50%"],
        }}
      ></motion.div>

      {/* Repeating square pattern overlay */}
      <div
        className="absolute inset-0 z-50 h-full w-full"
        style={{
          backgroundImage: \`url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 17 17'%3E%3Crect width='16' opacity='1' height='16' x='0' y='0' fill='%23000000' /%3E%3C/svg%3E")\`,
          backgroundRepeat: "repeat",
          backgroundSize: bgSize,
          backgroundPosition: "center center",
        }}
      ></div>

      <motion.div className="absolute inset-0 z-[1000] m-auto h-fit p-2 w-fit bg-gradient-to-b from-slate-200 to-slate-50/60 bg-clip-text text-center font-geist text-7xl font-extrabold tracking-tight text-transparent">
        Northern Lights
      </motion.div>
    </div>
  );
};

`);
// Code string for NorhternDotted component
const northerndottedcode = escapeCode(`
  import { cn } from "@/lib/utils/cn";
import { motion } from "framer-motion";
import React from "react";
type squareSize = "xs" | "sm" | "md" | "lg";

const sizeMap: Record<squareSize, number> = {
  xs: 0.8,
  sm: 1,
  md: 1.25,
  lg: 1.5,
};

type NorthernSquareProps = {
  squareSize?: squareSize;
  className?: string;
};

export const NorthernSquare = ({ squareSize="sm",className }: NorthernSquareProps) => {
  const size = sizeMap[squareSize];
  const bgSize = \`\${size}em \${size}em\`;
  return (
    <div className={cn("relative h-screen w-screen overflow-hidden bg-transparent",className)}>
      {/* Existing motion.div elements remain unchanged */}
      <motion.div
        className="absolute z-10 h-[700px] w-[700px] rounded-full bg-blue-500 blur-3xl"
        initial={{
          bottom: "-50%",
          left: "-20%",
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
        animate={{
          bottom: ["-20%", "20%", "10%", "-30%"],
          left: ["-20%", "30%", "45%", "38%"],
        }}
      ></motion.div>
      <motion.div
        className="absolute z-10 h-[750px] w-[750px] rounded-full bg-purple-500 blur-3xl"
        initial={{
          bottom: "-50%",
          left: "-20%",
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
        animate={{
          bottom: ["-50%", "-20%", "40%", "10%"],
          left: ["30%", "-10%", "10%", "60%"],
        }}
      ></motion.div>
      <motion.div
        className="absolute -right-[10%] bottom-[10%] z-10 h-[400px] w-[400px] rounded-full bg-purple-500 blur-3xl"
        initial={{
          bottom: "-10%",
          right: "-10%",
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
        animate={{
          bottom: ["-10%", "15%", "-20%", "-18%"],
          right: ["-10%", "-5%", "20%", "50%"],
        }}
      ></motion.div> 
       <motion.div
        className="absolute -bottom-[20%] right-[10%] z-10 h-[400px] w-[400px] rounded-full bg-blue-500 blur-3xl"
        initial={{
          bottom: "-20%",
          right: "5%",
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
        animate={{
          bottom: ["-20%", "-18%", "-20%", "20%"],
          right: ["5%", "8%", "35%", "50%"],
        }}
      ></motion.div>

      {/* Repeating square pattern overlay */}
      <div
        className="absolute inset-0 z-50 h-full w-full"
        style={{
          backgroundImage: \`url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 17 17'%3E%3Crect width='16' opacity='1' height='16' x='0' y='0' fill='%23000000' /%3E%3C/svg%3E")\`,
          backgroundRepeat: "repeat",
          backgroundSize: bgSize,
          backgroundPosition: "center center",
        }}
      ></div>

      <motion.div className="absolute inset-0 z-[1000] m-auto h-fit p-2 w-fit bg-gradient-to-b from-slate-200 to-slate-50/60 bg-clip-text text-center font-geist text-7xl font-extrabold tracking-tight text-transparent">
        Northern Lights
      </motion.div>
    </div>
  );
};

  `);

const fluxbgcode = escapeCode(`"use client";
import { cn } from "@/lib/utils/cn";
import React, { useEffect, useRef } from "react";

interface GradientProps {
  color: string;
  size?: string;
  top?: string;
  left?: string;
  animation?: string;
  duration?: string;
  timing?: string;
  opacity?: number;
}

type MixBlendMode =
  | "normal"
  | "multiply"
  | "screen"
  | "overlay"
  | "darken"
  | "lighten"
  | "color-dodge"
  | "color-burn"
  | "hard-light"
  | "soft-light"
  | "difference"
  | "exclusion"
  | "hue"
  | "saturation"
  | "color"
  | "luminosity";

interface FluxBg {
  gradients?: GradientProps[];
  backgroundColor1?: string;
  backgroundColor2?: string;
  backgroundColor3?: string;
  interactiveColor?: string;
  blendingMode?: MixBlendMode | undefined;
  className?: string;
}

const defaultGradients: GradientProps[] = [
  {
    color: "203, 213, 225",
    size: "80%",
    animation: "moveVertical",
    duration: "30s",
  }, // Slate
  {
    color: "156, 163, 175",
    size: "70%",
    top: "40%",
    left: "60%",
    animation: "moveInCircle",
    duration: "20s",
  }, // Gray
  {
    color: "212, 212, 216",
    size: "90%",
    top: "60%",
    left: "30%",
    animation: "moveHorizontal",
    duration: "40s",
  }, // Zinc
  {
    color: "59, 130, 246",
    size: "75%",
    top: "45%",
    left: "55%",
    animation: "moveInCircle",
    duration: "25s",
  }, // Blue
  {
    color: "34, 197, 94",
    size: "85%",
    top: "55%",
    left: "45%",
    animation: "moveVertical",
    duration: "35s",
  }, // Green
];

const FluxBg: React.FC<FluxBg> = ({
  gradients = defaultGradients,
  backgroundColor1 = "rgb(15, 23, 42)", // Tailwind slate-900
  backgroundColor2 = "rgb(30, 58, 138)", // Tailwind blue-900
  backgroundColor3 = "rgb(30, 40, 255)", // Tailwind blue-900
  interactiveColor = "99, 102, 241", // Tailwind indigo-500
  blendingMode = "hard-light",
  className,
}) => {
  const interBubbleRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let curX = 0;
    let curY = 0;
    let tgX = 0;
    let tgY = 0;

    function move() {
      curX += (tgX - curX) / 30;
      curY += (tgY - curY) / 30;
      if (interBubbleRef.current) {
        interBubbleRef.current.style.transform = \`translate(\${Math.round(curX)}px, \${Math.round(curY)}px)\`;
      }
      requestAnimationFrame(move);
    }

    const handleMouseMove = (event: MouseEvent) => {
      if (containerRef.current) {
        const containerRect = containerRef.current.getBoundingClientRect();
        tgX = event.clientX - containerRect.left;
        tgY = event.clientY - containerRect.top;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    move();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const generateGradients = () => {
    return gradients.map((gradient, index) => {
      const style: React.CSSProperties = {
        position: "absolute",
        background: \`radial-gradient(circle at center, rgba(\${gradient.color}, 0.8) 0, rgba(\${gradient.color}, 0) 50%) no-repeat\`,
        mixBlendMode: blendingMode,
        width: gradient.size || "80%",
        height: gradient.size || "80%",
        top: gradient.top || "50%",
        left: gradient.left || "50%",
        transform: "translate(-50%, -50%)",
        animation: \`\${gradient.animation} \${gradient.duration || "30s"} \${gradient.timing || "ease"} infinite\`,
        opacity: gradient.opacity || 1,
      };

      return <div key={index} className={""} style={style}></div>;
    });
  };

  return (
    <div
      className={cn("h-full w-full relative overflow-hidden", className)}
      ref={containerRef}
      style={{
        background: \`linear-gradient(109.6deg, \${backgroundColor1} 11.2%, \${backgroundColor2} 51.2%, \${backgroundColor3} 98.6%)\`,
      }}
    >
      <div className="absolute inset-0 p-2 z-[1000] m-auto h-fit w-fit bg-gradient-to-b from-slate-200 to-slate-50/60 bg-clip-text text-centefont-geist text-7xl font-extrabold tracking-tight text-transparent">
        Flux Background
      </div>
      <svg>
        <defs>
          <filter id="goo">
            <feGaussianBlur
              in="SourceGraphic"
              stdDeviation="10"
              result="blur"
            />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8"
              result="goo"
            />
            <feBlend in="SourceGraphic" in2="goo" />
          </filter>
        </defs>
      </svg>
      <div className="w-full h-full" style={{ filter: "url(#goo) blur(40px)" }}>
        {generateGradients()}
        <div
          className="interactive"
          ref={interBubbleRef}
          style={{
            background: \`radial-gradient(circle at center, rgba(\${interactiveColor}, 0.8) 0, rgba(\${interactiveColor}, 0) 50%) no-repeat\`,
            mixBlendMode: blendingMode,
          }}
        ></div>
      </div>
    </div>
  );
};

export default FluxBg;
`);

// Use CodePreview component and other components within your render
const BackGroundPreview = () => (
  <>
    <CodePreview
      language="tsx"
      fileName="SquareGridFaded"
      preview={
        <div className="w-full h-[500px] p-5">
          <SquareGridFaded
            className="w-full h-full rounded-lg"
            squareSize={"xs"}
            faded={true}
          />
        </div>
      }
      code={unescapeCode(squaregridcode)}
    />
    <CodePreview
      language="tsx"
      fileName="DottedGridFaded.tsx"
      preview={
        <div className="w-full h-[500px] p-5">
          <DottedGridFaded
            className="w-full h-full rounded-lg"
            dotSize="xs"
            faded={true}
          />
        </div>
      }
      code={unescapeCode(dottedgridcode)}
    />
    <CodePreview
      language="tsx"
      fileName="NorthernSquare.tsx"
      preview={
        <div className="w-full h-[500px] p-5">
          <NorthernSquare className="w-full h-full rounded-lg" />
        </div>
      }
      code={unescapeCode(northensquarecode)}
    />
    <CodePreview
      language="tsx"
      fileName="NorthernDotted.tsx"
      preview={
        <div className="w-full h-[500px] p-5">
          <NorthernDotted className="w-full h-full rounded-lg" dotSize="xs" />
        </div>
      }
      code={unescapeCode(northerndottedcode)}
    />
    <CodePreview
      language="tsx"
      fileName="FluxBg.tsx"
      preview={
        <div className="w-full h-[500px] p-5">
          <FluxBg className="rounded-lg" />
        </div>
      }
      code={unescapeCode(fluxbgcode)}
    />
  </>
);

export default BackGroundPreview;
