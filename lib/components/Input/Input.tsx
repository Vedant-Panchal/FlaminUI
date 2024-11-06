import React, { useState } from "react";
import { cn } from "@/utils/cn";
import { Label } from "./Label";
import { HelperText } from "./HelperText";
import {
  X,
  AlertCircle,
  Eye,
  EyeOff,
  ChevronUp,
  ChevronDown,
  Paperclip,
} from "lucide-react";
import { ClassNameValue } from "tailwind-merge";

// !! button for file upload

type ButtonProps = {
  children?: React.ReactNode;
  className?: ClassNameValue;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({ children, className, ...props }: ButtonProps) => {
  return (
    <button
      className={cn(
        "flex items-center gap-3 rounded-lg bg-rose-500 px-6 py-2 font-geist font-semibold text-rose-100 shadow-md duration-200 ease-in-out hover:shadow-lg hover:brightness-95",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

// !! button for file upload

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
    type === "number" ? props.value || 0 : ""
  );
  const [showPassword, setShowPassword] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState<number | null>(null);
  const [fileName, setFileName] = useState<string | null>(null);

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

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setFileName(file.name);
    } else {
      setFileName(null);
    }
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

  const inputVariantClass = switchInputVariant(variant);
  const iconClass = showIcon ? "pr-10" : "";

  return (
    <div className="relative space-y-1 font-geist font-normal text-zinc-100">
      {label && (
        <Label
          text={label}
          htmlFor={type === "file" ? "file-input" : undefined}
        />
      )}
      <div className="relative flex flex-col items-start">
        {type === "file" && (
          <>
            <input
              type="file"
              id="file-input"
              className="hidden"
              onChange={handleFileChange}
              {...props}
            />
            <div className="flex min-h-14 min-w-80 items-center rounded-lg bg-transparent px-3 py-2 font-geist text-base font-normal text-zinc-100 outline outline-1 outline-gray-100/10 selection:bg-gray-400/40 placeholder:text-zinc-400 focus:outline focus:outline-gray-100/80 space-x-2">
              <label htmlFor="file-input" className="cursor-pointer">
                <Paperclip className="text-white" />
              </label>
              <span className="flex-1 text-zinc-400">
                {fileName || "Add a file"}
              </span>
              <Button
                className="p-2 bg-white text-black rounded-lg"
                onClick={() => document.getElementById("file-input")?.click()}
              >
                Upload
              </Button>
            </div>
          </>
        )}
        {type !== "file" && (
          <>
            {showIcon && (
              <span className="absolute inset-y-0 z-10 right-0 flex cursor-pointer items-center justify-center pr-3 mb-9">
                {getIcon()}
              </span>
            )}
            <div
              style={{
                minHeight: "6rem" /* Adjust height as needed */,
                position: "relative",
              }}
            >
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
                  iconClass,
                  inputVariantClass
                )}
                {...props}
              />
              {type === "number" && (
                <div className="absolute inset-y-0 right-0 flex flex-col items-center justify-center pr-3 mb-9">
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
                  <div className="mt-2 flex w-full">
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
            </div>
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
  handleAlert: () => void
) => {
  switch (variant) {
    case "focused":
    case "filled":
      return <X className="text-rose-100" onClick={handleClear} />;
    case "error":
      return <AlertCircle className="text-red-500" onClick={handleAlert} />;
    default:
      return null;
  }
};

const switchInputVariant = (variant: InputVariants) => {
  switch (variant) {
    case "focused":
      return "focus:ring-2 focus:ring-primary";
    case "filled":
      return "bg-gray-800";
    case "disabled":
      return "opacity-50 cursor-not-allowed";
    case "error":
      return "border-rose-600";
    default:
      return "";
  }
};
