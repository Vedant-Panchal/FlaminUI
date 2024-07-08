"use client";
import React, { useEffect, useRef, useState } from "react";
import { Variants } from "framer-motion";
import DropdownButton from "./DropdownButton";
import DropdownContent from "./DropdownContent";
import DropdownItem from "./DropdownItem";
import DropdownLabel from "./DropdownLabel";
import { DropdownContext } from "./DropdownContext";

interface DropdownProps {
  children: React.ReactNode;
  dropdownAnimation?: "default" | "slideUp" | Variants;
  itemAnimation?: "default" | "slideUp" | Variants;
  staggerItems?: boolean;
}

export const Dropdown: React.FC<DropdownProps> = ({
  children,
  dropdownAnimation,
  itemAnimation,
  staggerItems,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Select an option");
  const [dropdownPosition, setDropdownPosition] = useState<"top" | "bottom">(
    "bottom",
  );
  const [currentDropdownAnimation, setDropdownAnimation] = useState<
    Variants | "default" | "slideUp"
  >("default");
  const [currentItemAnimation, setItemAnimation] = useState<
    Variants | "default" | "slideUp"
  >("default");
  const containerRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [staggerChildren, setStaggerChildren] = useState(false);

  useEffect(() => {
    if (dropdownAnimation) {
      setDropdownAnimation(dropdownAnimation);
    }
    if (itemAnimation) {
      setItemAnimation(itemAnimation);
    }
    if (staggerItems) {
      setStaggerChildren(staggerItems);
    }
  }, [dropdownAnimation, itemAnimation, staggerItems]);

  const updatePosition = () => {
    if (buttonRef.current && contentRef.current) {
      const buttonRect = buttonRef.current.getBoundingClientRect();
      const contentHeight = contentRef.current.scrollHeight;
      const windowHeight = window.innerHeight;
      const spaceBelow = windowHeight - buttonRect.bottom;
      setDropdownPosition(
        spaceBelow < contentHeight && buttonRect.top > spaceBelow
          ? "top"
          : "bottom",
      );
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (isOpen) {
      updatePosition();
      window.addEventListener("resize", updatePosition);
      return () => window.removeEventListener("resize", updatePosition);
    }
  }, [isOpen]);

  return (
    <DropdownContext.Provider
      value={{
        isOpen,
        setIsOpen,
        selectedOption,
        setSelectedOption,
        dropdownPosition,
        containerRef,
        buttonRef,
        contentRef,
        dropdownAnimation: currentDropdownAnimation,
        itemAnimation: currentItemAnimation,
        setDropdownAnimation,
        setItemAnimation,
        staggerChildren,
        setStaggerChildren,
      }}
    >
      <div ref={containerRef} className="relative">
        {children}
      </div>
    </DropdownContext.Provider>
  );
};

export { DropdownButton, DropdownContent, DropdownItem, DropdownLabel };
