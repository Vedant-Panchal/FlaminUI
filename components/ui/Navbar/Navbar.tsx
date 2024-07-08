import Link from "next/link";
import React from "react";


const Navbar = () => {
  return (
    <header className="fixed left-0 right-0 top-0 z-[9999] flex h-max w-full items-center justify-start space-x-8 border-b border-rose-100/20 px-8 py-4 backdrop-blur-3xl">
      <Link href={"/"}>
        <p>
          <span className="bg-gradient-to-br from-[#FFF] to-[#999] bg-clip-text font-fira text-2xl font-bold text-transparent">
            {"<"}Proto{">"}
          </span>
          <span className="bg-gradient-to-r from-[#FB7185] to-[#F43F5E] bg-clip-text font-sans text-xl font-black text-transparent">
            UI
          </span>
        </p>
      </Link>
      <div className="flex h-max w-full flex-1 items-center justify-start space-x-5 text-rose-50/70">
        <Link
          href="/docs/guide/introduction"
          className="text-center font-geist text-sm font-medium hover:underline"
        >
          Docs
        </Link>
        <Link
          href="/components"
          className="text-center font-geist text-sm font-medium hover:underline"
        >
          Components
        </Link>
        <Link
          href="/backgrounds"
          className="text-center font-geist text-sm font-medium hover:underline"
        >
          Backgrounds
        </Link>
        <Link
          href="/"
          className="text-center font-geist text-sm font-medium hover:underline"
        >
          Customise
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
