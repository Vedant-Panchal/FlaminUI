import React from 'react';
import Link from 'next/link';

interface CardDisplayProps {
  title: string;
  description: string;
  children?: React.ReactNode;
  buttonText: string;
  buttonLink: string;
  buttonIcon?: React.ReactNode;
}

const CardDisplay: React.FC<CardDisplayProps> = ({ title, description, children, buttonText, buttonLink, buttonIcon }) => {
  return (
    <div className="p-6 rounded-lg shadow-md text-white flex flex-col w-full">
      <div className="cardeffect w-full min-h-[300px] flex items-center justify-center p-4 mb-4">
        {children}
      </div>
      <div className="flex flex-row justify-between items-center">
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-slate-100 mb-1 font-geist">{title}</h3>
          <p className='mr-2 text-slate-300 font-normal'>{description}</p>
        </div>
        <div className="flex items-center">
          <Link href={buttonLink} className="pl-3 pr-1 rounded-md inline-flex items-center">
            {buttonIcon}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CardDisplay;
