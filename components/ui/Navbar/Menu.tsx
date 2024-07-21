"use client"
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const MenuItem: React.FC<{ label: string }> = ({ label }) => (
  <li className="mb-4 py-2 px-4 hover:bg-gray-100 cursor-pointer rounded transition-colors duration-200">
    {label}
  </li>
);

const Navigation: React.FC = () => (
  <ul className="p-4">
    {['Home', 'About', 'Services', 'Contact', 'FAQ'].map((item) => (
      <MenuItem key={item} label={item} />
    ))}
  </ul>
);

const MenuToggle: React.FC<{ toggle: () => void; isOpen: boolean }> = ({ toggle, isOpen }) => (
  <button 
    onClick={toggle} 
    className="fixed top-4 right-4 z-30 p-2 bg-white rounded-full shadow-md focus:outline-none"
  >
    <svg 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      {isOpen ? (
        <path 
          d="M6 18L18 6M6 6L18 18" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        />
      ) : (
        <path 
          d="M4 6H20M4 12H20M4 18H20" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        />
      )}
    </svg>
  </button>
);

export const Menu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const sidebarVariants = {
    open: {
      x: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30
      }
    },
    closed: {
      x: "100%",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30
      }
    }
  };

  return (
    <div className="w-screen h-screen">
      <MenuToggle toggle={toggleMenu} isOpen={isOpen} />
      <motion.nav
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        variants={sidebarVariants}
        className="fixed top-0 right-0 bottom-0 w-64 bg-white shadow-lg z-20"
      >
        <Navigation />
      </motion.nav>
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-10"
          onClick={toggleMenu}
        />
      )}
    </div>
  );
};
