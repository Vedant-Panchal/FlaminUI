import React, { useState, useEffect, ReactNode } from "react";
import { cn } from "@/utils/cn";
import { motion } from "framer-motion";

interface AlertProps {
  onClose?: () => void;
  dismissAfter?: number;
  children?: ReactNode;
  className?: string;
}

const Alert: React.FC<AlertProps> = ({
  children,
  className,
  onClose,
  dismissAfter = 1000,
  ...props
}) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleClose = () => {
    setIsVisible(false);
    if (onClose) onClose();
  };

  useEffect(() => {
    setIsVisible(true);

    const timer = setTimeout(() => {
      setIsVisible(false);
      if (onClose) onClose();
    }, dismissAfter);

    return () => clearTimeout(timer);
  }, [dismissAfter, onClose]);

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : -10 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3 }}
      className={cn(
        "flex min-w-80 items-center rounded-lg border border-rose-50 bg-zinc-950 p-5",
        className,
      )}
      {...props}
    >
      <div className="flex flex-col space-y-2">{children}</div>
      <button
        onClick={handleClose}
        className="ml-auto text-3xl leading-none text-rose-50"
      >
        ×
      </button>
    </motion.div>
  );
};

export default Alert;
