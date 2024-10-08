import React from "react";
import { cn } from "@/utils/cn";
import Link from "next/link";

type CardLinkProps = {
  children: React.ReactNode;
  className?: string;
  href: string;
};

export const CardLink = ({ children, className, href }: CardLinkProps) => {

  return (
    <Link
      className={cn(
        "mb-2 flex flex-row items-center text-base text-[#F65571] after:text-[#F65571] hover:underline",
        className,
      )}
      href={href}
    >
      {children}
    </Link>
  );
};
