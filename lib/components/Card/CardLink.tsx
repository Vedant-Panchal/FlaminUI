import React from "react";
import { cn } from "@lib/utils/cn";
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
        "mb-2 flex flex-row items-center text-base text-primary-550 after:text-primary-550 hover:underline",
        className,
      )}
      href={href}
    >
      {children}
    </Link>
  );
};
