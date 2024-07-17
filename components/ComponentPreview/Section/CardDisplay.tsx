import React from 'react';
import Link from 'next/link';

interface CardDisplayProps {
  title: string;
  description: string;
  children?: React.ReactNode;
  buttonText: string;
  buttonLink: string;
  buttonIcon: React.ReactNode;
}

const CardDisplay: React.FC<CardDisplayProps> = ({ title, description, children, buttonText, buttonLink, buttonIcon }) => {
  return (
    <div className="p-6 rounded-lg shadow-md text-white flex flex-col w-full">
      <div className="cardeffect w-full min-h-[300px] flex items-center justify-center p-4 mb-4">
        {children}
      </div>
      <div className="flex flex-row justify-between items-start">
        <div className="flex-1">
          <h3 className="text-xl font-bold mb-2">{title}</h3>
          <p>{description}</p>
        </div>
        <div className="mt-4 flex items-center">
          <Link href={buttonLink} className="px-4 py-2 bg-white text-black rounded-md inline-flex items-center">
            {buttonText}
            {buttonIcon}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CardDisplay;
