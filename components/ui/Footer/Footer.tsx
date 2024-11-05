import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <div className="relative md:h-24 h-max bottom-0 md:px-32 px-4 py-8 flex w-full md:items-center items-start md:justify-center gap-2 backdrop-blur-xl  bg-black/50 after:content-[''] after:absolute after:w-full after:h-[1px] after:bg-gradient-to-r from-[#787878]/0 via-[#DEDEDE] to-[#787878]/0 after:top-[0] after:right-0 after:opacity-50">
      <Link href={"/"} className="flex-1">
        <p>
          <span className="bg-gradient-to-br from-[#FFF] to-[#999] bg-clip-text font-geist text-2xl font-bold text-transparent">
            Flamin
          </span>
          <span className="bg-gradient-to-r from-[#FB7185] to-[#F43F5E] bg-clip-text font-sans text-xl font-black text-transparent">
            UI
          </span>
        </p>
      </Link>
      <div className="md:flex md:flex-row flex-col absolute bottom-3 gap-2">
        <div>
          <p className="text-white/20 md:mt-14 font-fira md:text-xs text-[9px] font-semibold">
            &copy; 2024 FlaminUI. All rights reserved.
          </p>
        </div>
        <div>
          <p className="text-white/20 md:mt-14 mt-1 font-fira md:text-xs text-[9px] font-semibold">
            Made with <span className="text-white/70">❤️</span> by FlaminUI Team
          </p>
        </div>
      </div>
      <div className="flex gap-3 md:flex-1 justify-end  w-max font-geist md:flex-row flex-col ">
        <Link href={"/components"} className="text-white/80 font-semibold md:text-sm text-xs">
          Components
        </Link>
        <Link href={"/categories"} className="text-white/80 font-semibold md:text-sm text-xs">
          Categories
        </Link>
        <Link href={"https://x.com/FlaminUI"} target="_blank" className="text-white/80 font-semibold md:text-sm text-xs">
          Twitter
        </Link>
      </div>
    </div>
  );
}

export default Footer;
