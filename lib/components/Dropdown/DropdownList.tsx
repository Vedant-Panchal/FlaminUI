import { motion, HTMLMotionProps } from "framer-motion";
import React from "react";

type DropdownListProps = HTMLMotionProps<"div">;

const DropdownList = React.forwardRef<HTMLDivElement, DropdownListProps>(
  ({ className, ...props }, ref) => (
    <motion.div
      ref={ref}
      className={`z-10 flex max-h-[40vh] w-full appearance-none flex-col items-start justify-start overflow-y-auto rounded-md border border-gray-100/20 bg-transparent p-1 shadow-sm focus:appearance-none focus:border-transparent focus:outline-none ${className || ""}`}
      style={{
        scrollbarWidth: "none",
        msOverflowStyle: "none",
      }}
      {...props}
    />
  ),
);

DropdownList.displayName = "DropdownList";
export default DropdownList;
