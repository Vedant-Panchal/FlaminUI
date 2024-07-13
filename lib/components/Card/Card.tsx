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
import { CardCustomer } from "./CardCustomer";
import { CardRating } from "./CardRating";

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
