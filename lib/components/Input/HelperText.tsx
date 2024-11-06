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
  const variantClass = variant === "error" ? "text-red-500" : "text-rose-200";
  const combinedClass =
    "mt-2 text-sm " + variantClass + " " + (className || "");
  return <p className={combinedClass}>{text}</p>;
};
