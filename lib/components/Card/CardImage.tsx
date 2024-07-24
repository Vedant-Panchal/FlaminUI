import React from "react";
import { cn } from "@/utils/cn";

type ImageProps = {
  src: string;
  alt: string;
  className?: string;
};

export const CardImage = ({ src, alt, className }: ImageProps) => {
  return <img src={src} alt={alt} className={cn("", className)} />;
};
