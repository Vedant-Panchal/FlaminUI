"use client";
import FluxBgSetUp from "@lib/components/Backgrounds/FluxBgSetUp";

const generateRandomColor = (): string => {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  return `${red}, ${green}, ${blue}`;
};

const generateRandomSize = (): string => {
  const size = Math.floor(Math.random() * 101);
  return `${size}%`;
};

const generateRandomPosition = (): { top: string; left: string } => {
  const top = `${Math.floor(Math.random() * 100)}%`;
  const left = `${Math.floor(Math.random() * 100)}%`;
  return { top, left };
};

const generateRandomAnimation = (): string => {
  const animations = ["moveVertical", "moveHorizontal", "moveInCircle"];
  const randomIndex = Math.floor(Math.random() * animations.length);
  return animations[randomIndex];
};

const generateRandomDuration = (): string => {
  const duration = Math.floor(Math.random() * 20);
  return `${duration}s`;
};

const generateRandomObject = (): {
  color: string;
  size: string;
  top?: string;
  left?: string;
  animation: string;
  duration: string;
} => {
  return {
    color: generateRandomColor(),
    size: generateRandomSize(),
    ...generateRandomPosition(),
    animation: generateRandomAnimation(),
    duration: generateRandomDuration(),
  };
};

function FluxBg() {
  const gradients = [
    {
      color: "18, 113, 255",
      size: "80%",
      animation: "moveVertical",
      duration: "30s",
    },
    {
      color: "221, 74, 255",
      size: "70%",
      top: "40%",
      left: "60%",
      animation: " move",
      duration: "10s",
      timing: "linear",
    },
    {
      color: "100, 220, 255",
      size: "90%",
      top: "60%",
      left: "30%",
      animation: "moveHorizontal",
      duration: "10s",
    },
    ...Array.from({ length: 3 }, () => generateRandomObject()),
  ];

  return (
    <div className="h-full w-full">
      <FluxBgSetUp
        gradients={gradients}
        backgroundColor1="rgb(36, 45, 57)"
        backgroundColor2="rgb(16, 37, 60)"
        backgroundColor3="rgb(0, 0, 0)"
        interactiveColor="200, 100, 200"
        blendingMode="screen"
      />
      {/* You can add other components here */}
    </div>
  );
}

export default FluxBg;
