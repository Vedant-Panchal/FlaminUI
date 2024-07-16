import React from 'react';

const Sidebar: React.FC = () => {
  return (
    <div className="w-64 h-full text-white p-4 ml-8">
      <h2 className="text-2xl font-bold mb-4">All Components</h2>
      <ul>
        <li className="mb-2"><a href="docs/accordion" className="hover:underline">Accordion</a></li>
        <li className="mb-2"><a href="docs/alert" className="hover:underline">Alert</a></li>
        <li className="mb-2"><a href="docs/avatar" className="hover:underline">Avatar</a></li>
        <li className="mb-2"><a href="docs/backgrounds" className="hover:underline">Backgrounds</a></li>
        <li className="mb-2"><a href="docs/button" className="hover:underline">Button</a></li>
        <li className="mb-2"><a href="docs/card" className="hover:underline">Card</a></li>
        <li className="mb-2"><a href="docs/checkbox" className="hover:underline">Checkbox</a></li>
        <li className="mb-2"><a href="docs/dropdown" className="hover:underline">Dropdown</a></li>
        <li className="mb-2"><a href="docs/input" className="hover:underline">Input</a></li>
        <li className="mb-2"><a href="docs/radio" className="hover:underline">Radio</a></li>
        <li className="mb-2"><a href="docs/textarea" className="hover:underline">Textarea</a></li>
        <li className="mb-2"><a href="docs/toggle" className="hover:underline">Toggle</a></li>
      </ul>
    </div>
  );
}

export default Sidebar;
