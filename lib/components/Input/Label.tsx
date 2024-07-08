// import React from "react";

type LabelProps = {
  text: string;
  htmlFor?: string;
  className?: string;
};

export const Label = ({ text, htmlFor, className }: LabelProps) => {
  return (
    <label
      htmlFor={htmlFor}
      className={`block font-geist text-sm font-normal text-primary-100 ${className}`}
    >
      {text}
    </label>
  );
};
