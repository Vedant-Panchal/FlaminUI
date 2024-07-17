"use client";
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
        interBubbleRef.current.style.transform = `translate(${Math.round(curX)}px, ${Math.round(curY)}px)`;
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
        background: `radial-gradient(circle at center, rgba(${gradient.color}, 0.8) 0, rgba(${gradient.color}, 0) 50%) no-repeat`,
        mixBlendMode: blendingMode,
        width: gradient.size || "80%",
        height: gradient.size || "80%",
        top: gradient.top || "50%",
        left: gradient.left || "50%",
        transform: "translate(-50%, -50%)",
        animation: `${gradient.animation} ${gradient.duration || "30s"} ${gradient.timing || "ease"} infinite`,
        opacity: gradient.opacity || 1,
      };

      return <div key={index} className={``} style={style}></div>;
    });
  };

  return (
    <div
      className={cn("h-full w-full relative overflow-hidden", className)}
      ref={containerRef}
      style={{
        background: `linear-gradient(109.6deg, ${backgroundColor1} 11.2%, ${backgroundColor2} 51.2%, ${backgroundColor3} 98.6%)`,
      }}
    >
      <div className="absolute inset-0 p-2 z-[1000] m-auto h-fit w-fit bg-gradient-to-b from-slate-200 to-slate-50/60 bg-clip-text text-center font-geist text-7xl font-extrabold tracking-tight text-transparent">
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
      <div className="w-full h-full" style={{ filter: `url(#goo) blur(40px)` }}>
        {generateGradients()}
        <div
          className="interactive"
          ref={interBubbleRef}
          style={{
            background: `radial-gradient(circle at center, rgba(${interactiveColor}, 0.8) 0, rgba(${interactiveColor}, 0) 50%) no-repeat`,
            mixBlendMode: blendingMode,
          }}
        ></div>
      </div>
    </div>
  );
};

export default FluxBg;
