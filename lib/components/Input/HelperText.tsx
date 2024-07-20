type HelperTextProps = {
  text: string;
  variant?: "default" | "error";
  className?: string;
};

export const HelperText = ({
  text,
  variant = "default",
  className,
}: HelperTextProps) => {
  return (
    <p
      className={`mt-2 text-sm ${variant === "error" ? "text-red-500" : "text-rose-200"} ${className}`}
    >
      {text}
    </p>
  );
};
