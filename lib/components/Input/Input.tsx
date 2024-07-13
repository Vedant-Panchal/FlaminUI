"use client";
import React, { useState } from "react";
import { cn } from "@lib/utils/cn";
import { Label } from "./Label";
import { HelperText } from "./HelperText";
import {
  X,
  AlertCircle,
  Eye,
  EyeOff,
  ChevronUp,
  ChevronDown,
  Plus,
} from "lucide-react";

type InputVariants =
  | "default"
  | "focused"
  | "filled"
  | "disabled"
  | "error"
  | "";

type InputProps = {
  label?: string;
  helperText?: string;
  placeholder?: string;
  className?: string;
  variant?: InputVariants;
  type?: "text" | "email" | "password" | "file" | "number";
  showIcon?: boolean;
  min?: number;
  max?: number;
  step?: number;
} & React.InputHTMLAttributes<HTMLInputElement>;

export const Input = ({
  label,
  helperText,
  placeholder,
  className,
  variant = "",
  type = "text",
  showIcon = false,
  min = 0,
  max = 100,
  step = 1,
  ...props
}: InputProps) => {
  const [inputValue, setInputValue] = useState(
    type === "number" ? props.value || 0 : "",
  );
  const [showPassword, setShowPassword] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState<number | null>(null);

  const togglePasswordVisibility = () => setShowPassword((prev) => !prev);

  const evaluatePassword = (password: string) => {
    if (!password) return setPasswordStrength(null);
    if (password.length < 6) return setPasswordStrength(1);
    if (/^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/.test(password))
      return setPasswordStrength(4);
    if (/^(?=.*[A-Z])(?=.*\d).{6,}$/.test(password))
      return setPasswordStrength(3);
    return setPasswordStrength(2);
  };

  const getStrengthLabel = (strength: number | null) => {
    switch (strength) {
      case 1:
        return "Weak";
      case 2:
        return "Moderate";
      case 3:
        return "Strong";
      case 4:
        return "Very Strong";
      default:
        return "";
    }
  };

  const handleClear = () => setInputValue(type === "number" ? 0 : "");
  const handleAlert = () => alert("Error: Please check your input.");

  const handleIncrement = () => {
    setInputValue((prev) => {
      const newValue = Number(prev) + step;
      return newValue <= max ? newValue : prev;
    });
  };

  const handleDecrement = () => {
    setInputValue((prev) => {
      const newValue = Number(prev) - step;
      return newValue >= min ? newValue : prev;
    });
  };

  const getIcon = () => {
    if (!showIcon) return null;
    if (type === "password") {
      return showPassword ? (
        <EyeOff
          onClick={togglePasswordVisibility}
          className="absolute inset-y-4 right-0 flex items-center pr-3 text-white"
          width={45}
        />
      ) : (
        <Eye
          width={45}
          onClick={togglePasswordVisibility}
          className="absolute inset-y-4 right-0 flex items-center pr-3 text-white"
        />
      );
    }
    return getIconForVariant(variant, handleClear, handleAlert);
  };

  return (
    <div className="relative space-y-1 font-geist font-normal text-zinc-100">
      {label && (
        <Label
          text={label}
          htmlFor={type === "file" ? "file-input" : undefined}
        />
      )}
      <div className="relative">
        {type === "file" && (
          <>
            <input type="file" id="file-input" className="hidden" {...props} />
            <label
              htmlFor="file-input"
              className={cn(
                "flex flex-col items-center space-y-1 cursor-pointer",
                className,
              )}
            >
              <span className="flex flex-col items-center mb-2">
                <Plus />
              </span>
            </label>
            <span className="pointer-events-none">
                {placeholder || "Add a file"}
            </span>
          </>
        )}
        {type !== "file" && (
          <>
            {showIcon && (
              <span className="absolute inset-y-0 right-0 flex cursor-pointer items-center justify-center pr-3">
                {getIcon()}
              </span>
            )}
            <input
              type={type === "password" && showPassword ? "text" : type}
              placeholder={placeholder}
              value={inputValue}
              onChange={(e) => {
                setInputValue(e.target.value);
                if (type === "password") evaluatePassword(e.target.value);
              }}
              disabled={variant === "disabled"}
              pattern={type === "email" ? ".*@.*" : undefined}
              className={cn(
                "min-h-14 min-w-80 appearance-none rounded-lg bg-transparent px-3 py-2 font-geist text-base font-normal text-zinc-100 outline outline-1 outline-gray-100/10 selection:bg-gray-400/40 placeholder:text-zinc-400 focus:outline focus:outline-gray-100/80",
                className,
                showIcon ? "pr-10" : "",
                switchInputVariant(variant),
              )}
              {...props}
            />
            {type === "number" && (
              <div className="absolute inset-y-0 right-0 flex flex-col items-center justify-center pr-3">
                <ChevronUp
                  className="cursor-pointer"
                  onClick={handleIncrement}
                />
                <ChevronDown
                  className="cursor-pointer"
                  onClick={handleDecrement}
                />
              </div>
            )}
            {type === "password" && (
              <>
                <div className="mt-1 flex">
                  <div
                    className={`h-1 flex-1 ${passwordStrength !== null && passwordStrength >= 1 ? "bg-red-500" : "bg-transparent"}`}
                  ></div>
                  <div
                    className={`h-1 flex-1 ${passwordStrength !== null && passwordStrength >= 2 ? "bg-yellow-500" : "bg-transparent"}`}
                  ></div>
                  <div
                    className={`h-1 flex-1 ${passwordStrength !== null && passwordStrength >= 3 ? "bg-amber-600" : "bg-transparent"}`}
                  ></div>
                  <div
                    className={`h-1 flex-1 ${passwordStrength !== null && passwordStrength >= 4 ? "bg-green-500" : "bg-transparent"}`}
                  ></div>
                </div>
                <div className="mt-1 text-sm text-red-100">
                  {getStrengthLabel(passwordStrength)}
                </div>
              </>
            )}
          </>
        )}
      </div>
      {helperText && <HelperText text={helperText} />}
    </div>
  );
};

const getIconForVariant = (
  variant: InputVariants,
  handleClear: () => void,
  handleAlert: () => void,
) => {
  switch (variant) {
    case "focused":
    case "filled":
      return <X className="text-white" onClick={handleClear} />;
    case "error":
      return <AlertCircle className="text-white" onClick={handleAlert} />;
    default:
      return null;
  }
};

const switchInputVariant = (variant: InputVariants) => {
  switch (variant) {
    case "default":
      return "border border-gray-300 focus:border-gray-500";
    case "focused":
      return "border border-red-500 focus:border-red-500 focus:outline-red-500";
    case "filled":
      return "border border-gray-300 focus:border-gray-500";
    case "error":
      return "border border-red-500 focus:border-red-500 focus:outline-red-500";
    case "disabled":
      return "bg-white border text-gray-800 opacity-50 cursor-not-allowed";
    default:
      return "";
  }
};
