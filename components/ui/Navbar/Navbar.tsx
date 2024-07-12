import Link from "next/link";
import React from "react";
import { Tabs } from "@src/ui/Navbar/Tabs";

const Navbar = () => {
  return (
    <header className="fixed left-0 right-0 top-0 z-[9999] flex h-max w-full items-center justify-center  px-32 py-4 backdrop-blur-xl  bg-[rgb(77,77,77)]/[0.1%] after:content-[''] after:absolute after:w-full after:h-[0.5px] after:bg-gradient-to-r from-[#787878]/0 via-[#DEDEDE] to-[#787878]/0 after:bottom-0 after:right-0 after:opacity-50">
      
      <Link href={"/"} className="absolute left-32">
        <p>
          <span className="bg-gradient-to-br from-[#FFF] to-[#999] bg-clip-text font-fira text-2xl font-bold text-transparent">
            {"<"}Proto{">"}
          </span>
          <span className="bg-gradient-to-r from-[#FB7185] to-[#F43F5E] bg-clip-text font-sans text-xl font-black text-transparent">
            UI
          </span>
        </p>
      </Link>
      <Tabs />
    </header>
  );
};

export default Navbar;
