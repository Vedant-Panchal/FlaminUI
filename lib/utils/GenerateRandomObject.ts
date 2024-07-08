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
