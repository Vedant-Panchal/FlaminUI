import React from "react";
import Link from "next/link";

const Sidebar: React.FC = () => {
  return (
    <div className="fixed top-[90px] md:mt-6 md:mb-8 md:left-8 md:w-64 md:bottom-16 overflow-y-auto md:p-4 z-10 text-white custom-scrollbar md:bg-transparent bg-black w-screen h-full md:h-4/5 p-8 -mt-[40px]">
      <h2 className="text-2xl font-bold mb-8">All Components</h2>
      <div className="flex-grow bottom-16 md:bottom-0">
        <ul>
          <li className="mb-2 hover:text-[#F65571] hover:pl-4 transition-all p-2 rounded-md">
            <Link href="/docs/accordion">Accordion</Link>
          </li>
          <li className="mb-2 hover:text-[#F65571] hover:pl-4 transition-all p-2 rounded-md">
            <Link href="/docs/alert">Alert</Link>
          </li>
          <li className="mb-2 hover:text-[#F65571] hover:pl-4 transition-all p-2 rounded-md">
            <Link href="/docs/avatar">Avatar</Link>
          </li>
          <li className="mb-2 hover:text-[#F65571] hover:pl-4 transition-all p-2 rounded-md">
            <Link href="/docs/backgrounds">Backgrounds</Link>
          </li>
          <li className="mb-2 hover:text-[#F65571] hover:pl-4 transition-all p-2 rounded-md">
            <Link href="/docs/button">Button</Link>
          </li>
          <li className="mb-2 hover:text-[#F65571] hover:pl-4 transition-all p-2 rounded-md">
            <Link href="/docs/card">Card</Link>
          </li>
          <li className="mb-2 hover:text-[#F65571] hover:pl-4 transition-all p-2 rounded-md">
            <Link href="/docs/checkbox">Checkbox</Link>
          </li>
          <li className="mb-2 hover:text-[#F65571] hover:pl-4 transition-all p-2 rounded-md">
            <Link href="/docs/dropdown">Dropdown</Link>
          </li>
          <li className="mb-2 hover:text-[#F65571] hover:pl-4 transition-all p-2 rounded-md">
            <Link href="/docs/input">Input</Link>
          </li>
          <li className="mb-2 hover:text-[#F65571] hover:pl-4 transition-all p-2 rounded-md">
            <Link href="/docs/radio">Radio</Link>
          </li>
          <li className="mb-2 hover:text-[#F65571] hover:pl-4 transition-all p-2 rounded-md">
            <Link href="/docs/textarea">Textarea</Link>
          </li>
          <li className="mb-2 hover:text-[#F65571] hover:pl-4 transition-all p-2 rounded-md">
            <Link href="/docs/toggle">Toggle</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Sidebar;
