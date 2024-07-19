import React from "react";
import { cn } from "@lib/utils/cn";
import { CardImage } from "./CardImage";

type CardCustomerProps = {
  imageSrc: string;
  name: string;
  email: string;
  className?: string;
};

export const CardCustomer = ({
  imageSrc,
  name,
  email,
  className,
}: CardCustomerProps) => {
  return (
    <div
      className={cn(
        "flex items-center justify-between border-b border-gray-700 py-2 last:border-none",
        className,
      )}
    >
      <CardImage
        src={imageSrc}
        alt={name}
        className={cn(
          "mr-3 h-10 w-10 rounded-full",
          className && className.includes("image") ? className : "",
        )}
      />
      <div
        className={cn(
          "flex-grow",
          className && className.includes("name") ? className : "",
        )}
      >
        <div
          className={cn(
            "font-bold text-white",
            className && className.includes("name-text") ? className : "",
          )}
        >
          {name}
        </div>
        <div
          className={cn(
            "text-gray-400",
            className && className.includes("email-text") ? className : "",
          )}
        >
          {email}
        </div>
      </div>
      <div
        className={cn(
          "font-bold text-[#F65571]",
          className && className.includes("amount") ? className : "",
        )}
      >
        $367
      </div>
    </div>
  );
};
