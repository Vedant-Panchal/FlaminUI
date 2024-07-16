import React from 'react';
import Link from 'next/link';

interface CardDisplayProps {
  title: string;
  description: string;
  children?: React.ReactNode;
  buttonText: string;
  buttonLink: string;
}

const CardDisplay: React.FC<CardDisplayProps> = ({ title, description, children, buttonText, buttonLink }) => {
  return (
    <div className="p-6 rounded-lg shadow-md">
      <div className="mb-4">
        {children}
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="mb-4">{description}</p>
      <Link href={buttonLink} className="mt-2 px-4 py-2 bg-white text-black rounded-md inline-block">
        {buttonText}
      </Link>
    </div>
  );
}

export default CardDisplay;
