import React, { createContext, useContext } from "react";
import { Variants } from "framer-motion";

interface DropdownContextType {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  selectedOption: string;
  setSelectedOption: React.Dispatch<React.SetStateAction<string>>;
  dropdownPosition: "top" | "bottom";
  containerRef: React.RefObject<HTMLDivElement>;
  buttonRef: React.RefObject<HTMLButtonElement>;
  contentRef: React.RefObject<HTMLDivElement>;
  itemAnimation: Variants | "default" | "slideUp";
  dropdownAnimation: Variants | "default" | "slideUp";
  setDropdownAnimation: React.Dispatch<
    React.SetStateAction<Variants | "default" | "slideUp">
  >;
  setItemAnimation: React.Dispatch<
    React.SetStateAction<Variants | "default" | "slideUp">
  >;
  staggerChildren: boolean;
  setStaggerChildren: React.Dispatch<React.SetStateAction<boolean>>;
}

export const DropdownContext = createContext<DropdownContextType | undefined>(
  undefined,
);

export const useDropdown = () => {
  const context = useContext(DropdownContext);
  if (context === undefined) {
    throw new Error("useDropdown must be used within a Dropdown component");
  }
  return context;
};
