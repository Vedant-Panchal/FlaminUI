import React from "react";
import { EllipseLeft, EllipseRight } from "@src/Sections/Section1/Ellipse";
import { ColoredEllipse } from "./ColoredEllipse";
import Noise from "./Noise";
import { Button } from "@/lib";
import { SpinningSVG } from "./SpinSvg";
import Link from "next/link";

function Section1() {
  return (
    <div className="w-full overflow-clip relative h-screen flex items-center justify-center">
      <div className="absolute inset-0 h-full w-full ">
        {/* 34 upper and 45 lower */}
        <EllipseRight className="absolute -top-96 z-20 -right-[calc(100%-45em)] w-fit h-fit rotate-[10.311deg] " />
        <EllipseRight className="absolute -top-96 z-50 -right-[calc(100%-34rem)] w-fit h-fit rotate-[10.311deg] " />
        <EllipseLeft className="absolute -top-96 z-20 -left-[calc(100%-45em)] w-fit h-fit -rotate-[10.311deg] " />
        <EllipseLeft className="absolute -top-96 z-50 -left-[calc(100%-34rem)] w-fit h-fit -rotate-[10.311deg] " />
        <ColoredEllipse className="blur-[100px] absolute right-0 -bottom-20 z-[1] scale-75" />
        <ColoredEllipse className="blur-[100px] absolute -right-28 -top-36 z-40 scale-50 rotate-12" />
        <ColoredEllipse className="blur-[100px] absolute left-0 -bottom-20 z-[1] scale-75" />
        <ColoredEllipse className="blur-[100px] absolute -left-40 -top-36 z-40 scale-50 rotate-12" />
        <div className="absolute h-dvh inset-0 z-[50] bg-noise mix-blend-darken bg-repeat object-cover pointer-events-none"></div>
      </div>

      <div className="relative z-[100] flex flex-col items-center justify-center h-full">
        <h1 className="text-6xl font-geist  text-transparent  leading-[70px] font-bold text-center">
          <span className="bg-clip-text bg-gradient-to-b from-[#fffff7] to-[#727267]">Redifing Component Flexibility</span> <br />
          <span className="bg-clip-text bg-gradient-to-b from-[#fffff7] to-[#727267]">&quot;Make Your Interfaces 10x Unique&quot;</span>
        </h1>
        <div className="flex items-center justify-center space-x-5 mt-10">
          <Link href={'/components'} className="bg-gradient-to-b from-[#D9D9D9] to-[#B9B9B9] text-black font-geist px-5 py-3 flex items-center gap-3 rounded-lg  font-semibold">
            Explore Components
          </Link>
          <Link href="/docs/guide/introduction"
            className="px-0.5 py-0.5 rounded-[9px] flex items-center gap-3  font-semibold text-white font-geist bg-white/[5%] relative overflow-hidden shadow-md duration-200 ease-in-out hover:shadow-lg hover:brightness-95"
          >
            <div className="absolute inset-0 z-0 flex items-center justify-center">
              <SpinningSVG />
            </div>
            <span className="relative z-10 w-full h-full bg-black px-7 py-3 rounded-lg">Docs</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Section1;
