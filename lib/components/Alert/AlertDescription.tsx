import React from "react";
import { cn } from "@lib/utils/cn";

interface AlertDescriptionProps
  extends React.HTMLAttributes<HTMLParagraphElement> {}

const AlertDescription: React.FC<AlertDescriptionProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <p className={cn("font-geist text-rose-50", className)} {...props}>
      {children}
    </p>
  );
};

export default AlertDescription;
