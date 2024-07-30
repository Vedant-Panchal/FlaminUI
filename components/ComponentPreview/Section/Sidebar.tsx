import React, { useState } from "react";
import Link from "next/link";
import ToggleSwitch from "./ToggleSwitch";

const components = [
  { href: "/docs/accordion", label: "Accordion" },
  { href: "/docs/alert", label: "Alert" },
  { href: "/docs/avatar", label: "Avatar" },
  { href: "/docs/backgrounds", label: "Backgrounds" },
  { href: "/docs/button", label: "Button" },
  { href: "/docs/card", label: "Card" },
  { href: "/docs/checkbox", label: "Checkbox" },
  { href: "/docs/dropdown", label: "Dropdown" },
  { href: "/docs/input", label: "Input" },
  { href: "/docs/radio", label: "Radio" },
  { href: "/docs/textarea", label: "Textarea" },
  { href: "/docs/toggle", label: "Toggle" },
];

const Sidebar: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(true);
  const linkClasses =
    "mb-2 hover:text-[#F65571] hover:pl-4 transition-all p-2 rounded-md";

  const handleToggle = (checked: boolean) => {
    setIsExpanded(checked);
  };

  return (
    <div
      className={`fixed top-0 left-0 h-full overflow-y-auto p-4 z-10 text-white bg-black custom-scrollbar transition-all duration-300 ${
        isExpanded ? "w-full md:w-64" : "w-16"
      }`}
    >
      <div className="flex items-center justify-between mb-8 mt-[90px]">
        {isExpanded && <h2 className="text-2xl font-bold">Components</h2>}
        <ToggleSwitch onChange={handleToggle} />
      </div>
      {isExpanded && (
        <div className="flex-grow">
          <ul>
            {components.map((component) => (
              <li key={component.href} className={linkClasses}>
                <Link href={component.href}>{component.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
