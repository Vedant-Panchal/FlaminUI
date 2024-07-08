"use client"
import { NorthernDotted } from "@components/Backgrounds/NorthernDotted";
import { NorthernSquare } from "@components/Backgrounds/NorthernSquare";
import { DottedGridFaded } from "@components/Backgrounds/DottedGridFaded";
import { SquareGridFaded } from "@components/Backgrounds/SquareGridFaded";
import React from "react";
import { FluxBgSetUp } from "@lib/index";

function Backgrounds() {
  return (
    <>
      <div className="h-max w-screen">
        <SquareGridFaded squareSize={"sm"} faded={true} />
        <DottedGridFaded faded={true} />
        <NorthernDotted dotSize="sm" />
        <NorthernSquare squareSize="md" />
        <FluxBgSetUp />
      </div>
    </>
  );
}

export default Backgrounds;
