import React from 'react';
import Link from 'next/link';

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
  const linkClasses = "mb-2 hover:text-[#F65571] hover:pl-4 transition-all p-2 rounded-md";

  return (
    <div className="fixed top-28 mt-6 mb-8 left-8 w-64 bottom-16 overflow-y-auto p-4 z-10 text-white custom-scrollbar">
      <h2 className="text-2xl font-bold mb-8">All Components</h2>
      <div className="flex-grow">
        <ul>
          {components.map((component) => (
            <li key={component.href} className={linkClasses}>
              <Link href={component.href}>{component.label}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
