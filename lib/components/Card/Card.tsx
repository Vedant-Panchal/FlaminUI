import React from "react";
import { cn } from "@/utils/cn";

type CardContainerProps = {
  className?: string;
  children: React.ReactNode;
};

const CardContainer = ({ className, children }: CardContainerProps) => {
  return <div className={cn("min-h-40 max-w-80", className)}>{children}</div>;
};

type CardHeaderProps = {
  children: React.ReactNode;
  className?: string;
};

const CardHeader = ({ children, className }: CardHeaderProps) => {
  return <div className={"card-header" + className}>{children}</div>;
};

type CardTitleProps = {
  children: React.ReactNode;
  className?: string;
};

const CardTitle = ({ children, className }: CardTitleProps) => {
  return (
    <h2 className={cn("mb-2 text-xl font-semibold text-white", className)}>
      {children}
    </h2>
  );
};

type CardBodyProps = {
  children: React.ReactNode;
  className?: string;
};

const CardBody = ({ children, className }: CardBodyProps) => {
  return <div className={cn("mb-4 text-gray-400", className)}>{children}</div>;
};

type CardButtonProps = {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
};

const CardButton = ({ children, className, onClick }: CardButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "mb-2 flex items-center justify-between gap-2 rounded-lg bg-[#F65571] px-4 py-2 text-rose-100 hover:bg-rose-500",
        className
      )}
      style={{ opacity: 1 }}
    >
      {children}
    </button>
  );
};

type ImageProps = {
  src: string;
  alt: string;
  className?: string;
};

const CardImage = ({ src, alt, className }: ImageProps) => {
  //eslint-disable-next-line
  return <img src={src} alt={alt} className={cn("", className)} />;
};

// !! Card Icon
type CardIconProps = {
  children: React.ReactNode;
  className?: string;
};

const CardIcon = ({ children, className }: CardIconProps) => {
  return <div className={cn("mb-2 text-[#F65571]", className)}>{children}</div>;
};

type CardLinkProps = {
  children: React.ReactNode;
  className?: string;
  href: string;
};

const CardLink = ({ children, className, href }: CardLinkProps) => {
  return (
    <a
      className={cn(
        "mb-2 flex flex-row items-center text-base text-[#F65571] after:text-[#F65571] hover:underline",
        className
      )}
      href={href}
    >
      {children}
    </a>
  );
};

type CardFooterProps = {
  children: React.ReactNode;
  className?: string;
};

const CardFooter = ({ children, className }: CardFooterProps) => {
  return <div className={"card-footer" + className}>{children}</div>;
};

type CardCustomerProps = {
  imageSrc: string;
  name: string;
  email: string;
  className?: string;
};

const CardCustomer = ({
  imageSrc,
  name,
  email,
  className,
}: CardCustomerProps) => {
  return (
    <div
      className={cn(
        "flex items-center justify-between border-b border-gray-700 py-2 last:border-none",
        className
      )}
    >
      <CardImage
        src={imageSrc}
        alt={name}
        className={cn(
          "mr-3 h-10 w-10 rounded-full",
          className && className.includes("image") ? className : ""
        )}
      />
      <div
        className={cn(
          "flex-grow",
          className && className.includes("name") ? className : ""
        )}
      >
        <div
          className={cn(
            "font-bold text-white",
            className && className.includes("name-text") ? className : ""
          )}
        >
          {name}
        </div>
        <div
          className={cn(
            "text-gray-400",
            className && className.includes("email-text") ? className : ""
          )}
        >
          {email}
        </div>
      </div>
      <div
        className={cn(
          "font-bold text-[#F65571]",
          className && className.includes("amount") ? className : ""
        )}
      >
        $367
      </div>
    </div>
  );
};

type CardRatingProps = {
  children: React.ReactNode;
  className?: string;
};

const CardRating = ({ children, className }: CardRatingProps) => {
  return (
    <h3
      className={cn(
        "ml-4 flex h-5 w-9 items-center justify-center rounded-full border border-transparent bg-rose-100 px-2 text-center text-base text-[#F65571]",
        className
      )}
    >
      {children}
    </h3>
  );
};

export {
  CardContainer,
  CardHeader,
  CardTitle,
  CardBody,
  CardButton,
  CardImage,
  CardIcon,
  CardLink,
  CardFooter,
  CardCustomer,
  CardRating,
};

type CardProps = {
  children: React.ReactNode;
  className?: string;
};

export const Card = ({ children, className }: CardProps) => {
  return <CardContainer className={className}>{children}</CardContainer>;
};
