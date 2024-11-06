import React from "react";
import Link from "next/link";

const Sidebar: React.FC = () => {
  return (
    <div className="absolute mt-12 md:mt-0 md:relative md:w-max md:overflow-y-hidden font-geist text-white custom-scrollbar bg-black z-20 md:z-0 w-screen h-screen md:h-max p-8">
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
          {/* <li className="mb-2 hover:text-[#F65571] hover:pl-4 transition-all p-2 rounded-md">
            <Link href="/docs/card">Card</Link>
          </li> */}
          <li className="mb-2 hover:text-[#F65571] hover:pl-4 transition-all p-2 rounded-md">
            <Link href="/docs/checkbox">Checkbox</Link>
          </li>
          {/* <li className="mb-2 hover:text-[#F65571] hover:pl-4 transition-all p-2 rounded-md">
            <Link href="/docs/dropdown">Dropdown</Link>
          </li> */}
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
