import React from "react";
import { CardContainer } from "./CardContainer";
import { CardHeader } from "./CardHeader";
import { CardTitle } from "./CardTitle";
import { CardBody } from "./CardBody";
import { CardButton } from "./CardButton";
import { CardImage } from "./CardImage";
import { CardIcon } from "./CardIcon";
import { CardLink } from "./CardLink";
import { CardFooter } from "./CardFooter";

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
};

type CardProps = {
  children: React.ReactNode;
  className?: string;
};

export const Card = ({ children, className }: CardProps) => {
  return <CardContainer className={className}>{children}</CardContainer>;
};
