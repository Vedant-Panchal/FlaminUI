import React from "react";
import { cn } from "@lib/utils/cn";

interface AlertTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {}

const AlertTitle: React.FC<AlertTitleProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <h2
      className={cn("font-geist font-extrabold text-rose-50", className)}
      {...props}
    >
      {children}
    </h2>
  );
};

export default AlertTitle;
