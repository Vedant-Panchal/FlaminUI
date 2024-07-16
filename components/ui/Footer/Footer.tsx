import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <div className="relative md:h-24 px-32 py-4 flex w-full items-center justify-center gap-2 backdrop-blur-xl  bg-[rgb(77,77,77)]/[0.1%] after:content-[''] after:absolute after:w-full after:h-[0.5px] after:bg-gradient-to-r from-[#787878]/0 via-[#DEDEDE] to-[#787878]/0 after:top-0 after:right-0 after:opacity-50">
      <Link href={"/"} className="flex-1">
        <p>
          <span className="bg-gradient-to-br from-[#FFF] to-[#999] bg-clip-text font-fira text-2xl font-bold text-transparent">
            {"<"}Proto{">"}
          </span>
          <span className="bg-gradient-to-r from-[#FB7185] to-[#F43F5E] bg-clip-text font-sans text-xl font-black text-transparent">
            UI
          </span>
        </p>
      </Link>
      <div className="flex gap-2">
        <div>
          <p className="text-white/20 mt-14 font-fira text-xs font-semibold">
            &copy; 2024 ProtoUI. All rights reserved.
          </p>
        </div>
        <div>
          <p className="text-white/20 mt-14 font-fira text-xs font-semibold">
            Made with <span className="text-white/70">❤️</span> by ProtoUI Team
          </p>
        </div>
      </div>
      <div className="flex gap-3 flex-1 justify-end font-geist">
        <Link href={"/components"} className="text-white/80 font-semibold text-sm">
          Components
        </Link>
        <Link href={"/categories"} className="text-white/80 font-semibold text-sm">
          Categories
        </Link>
        <Link href={"https://x.com/home"} target="_blank" className="text-white/80 font-semibold text-sm">
          Twitter
        </Link>
      </div>
    </div>
  );
}

export default Footer;
