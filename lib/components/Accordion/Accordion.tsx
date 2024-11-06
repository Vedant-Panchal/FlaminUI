"use client"
import React, {
  useState,
  useRef,
  createContext,
  useContext,
  ReactNode,
  useLayoutEffect,
} from "react";
import { cn } from "@/utils/cn";
import { motion, AnimatePresence, Spring } from "framer-motion";
import { ClassNameValue } from "tailwind-merge";
import { ChevronDown } from "lucide-react";

type AccordionContextType = {
  activeIndex: number | null;
  toggleAccordion: (index: number) => void;
  itemVariant: "default" | "bordered" | "rounded" | "rectangle" | " ";
  borderVariant?: boolean;
};

const AccordionContext = createContext<AccordionContextType | null>(null);

interface AccordionProps {
  children: ReactNode;
  className?: ClassNameValue;
  variant?: "default" | "rounded" | "rectangle";
  border?: boolean;
}

const Accordion: React.FC<AccordionProps> = ({
  children,
  className,
  variant,
  border,
}) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  const itemVariant = variant || " ";
  const borderVariant = border || false;
  return (
    <AccordionContext.Provider
      value={{ activeIndex, toggleAccordion, itemVariant, borderVariant }}
    >
      <div
        className={cn(
          "flex h-max flex-col items-center justify-center font-geist",
          className,
        )}
      >
        {children}
      </div>
    </AccordionContext.Provider>
  );
};

interface AccordionItemProps {
  index: number;
  children: React.ReactNode;
  className?: ClassNameValue;
}

const springConfig: Spring = {
  type: "spring",
  stiffness: 250,
  damping: 25,
};

const AccordionItem: React.FC<AccordionItemProps> = ({
  index,
  children,
  className,
}) => {
  const context = useContext(AccordionContext);
  if (!context) {
    throw new Error("AccordionItem must be used within an Accordion");
  }
  const { activeIndex, toggleAccordion, itemVariant, borderVariant } = context;
  const isActive = activeIndex === index;
  const contentRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [height, setHeight] = useState<number | string>("auto");

  useLayoutEffect(() => {
    if (contentRef.current && buttonRef.current) {
      const buttonHeight = buttonRef.current.offsetHeight;
      setHeight(
        isActive
          ? contentRef.current.scrollHeight + buttonHeight
          : buttonHeight,
      );
    }
  }, [isActive]);

  return (
    <motion.div
    className={cn(
      "h-max w-full overflow-hidden bg-zinc-950",
      { "border border-white/20": borderVariant },
      { "rounded-lg": itemVariant === "rounded" },
      { "rounded-none": itemVariant === "rectangle" },
      { "rounded-sm": itemVariant === "default" },
      className,
    )}
    
      animate={{ height }}
      transition={springConfig}
    >
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          if (child.type === AccordionButton) {
            return React.cloneElement(
              child as React.ReactElement<AccordionButtonProps>,
              {
                ref: buttonRef,
                isActive: isActive,
                onClick: () => toggleAccordion(index),
              },
            );
          } else if (child.type === AccordionContent) {
            return (
              <div ref={contentRef} className={child.props.className}>
                <AnimatePresence initial={false}>
                  {isActive &&
                    React.cloneElement(
                      child as React.ReactElement<AccordionContentProps>,
                      {
                        key: "content",
                      },
                    )}
                </AnimatePresence>
              </div>
            );
          }
        }
        return child;
      })}
    </motion.div>
  );
};

interface AccordionButtonProps {
  isActive?: boolean;
  onClick?: () => void;
  className?: ClassNameValue;
  children: React.ReactNode;
  ref?: React.Ref<HTMLButtonElement>;
}

const AccordionButton = React.forwardRef<
  HTMLButtonElement,
  AccordionButtonProps
>(({ isActive, onClick, className, children }, ref) => {
  return (
    <button
      ref={ref}
      onClick={onClick}
      className={cn(
        "flex w-full items-center justify-between p-5 text-left font-geist font-semibold text-white transition-colors duration-300 hover:underline focus:outline-none",
        className,
      )}
    >
      <span>{children}</span>
      <motion.div
        animate={{ rotate: isActive ? 180 : 0 }}
        transition={springConfig}
      >
        <ChevronDown className="h-6 w-6" />
      </motion.div>
    </button>
  );
});

AccordionButton.displayName = "AccordionButton";

interface AccordionContentProps {
  className?: string;
  children: React.ReactNode;
}

const AccordionContent: React.FC<AccordionContentProps> = ({
  className,
  children,
}) => {
  return (
    <motion.div
      key="content"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className={cn(
        "h-full w-full text-wrap px-5 py-4 font-geist text-sm font-normal text-gray-200",
        className,
      )}
    >
      {children}
    </motion.div>
  );
};

export { Accordion, AccordionItem, AccordionButton, AccordionContent };
