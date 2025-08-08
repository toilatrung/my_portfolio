import React from 'react';

interface SingleProjectProps {
  name: string;
  title: string;
  year: number;
  align: 'left' | 'right';
  image: string;
  link: string;
}

const SingleProject: React.FC<SingleProjectProps> = ({
  name,
  title,
  year,
  align,
  image,
  link,
}) => {
  const isRight = align === 'right';

  return (
    <div className={`flex flex-col md:flex-row ${isRight ? 'md:flex-row-reverse' : ''} items-center gap-6`}>
      <img src={image} alt={`${name} thumbnail`} className="max-h-[220px] max-w-[400px] rounded overflow-hidden hover:scale-110 transform-all duration-500 relative border-yellow border-2" />
      <div className="text-center md:text-left m-5">
        <h3 className="text-xl text-yellow">{name}</h3>
        <p className="text-sm text-white">{title} • {year}</p>
        <a href={link} target="_blank" rel="noopener noreferrer" className="text-black-500 underline mt-2 inline-block hover:text-yellow">
          View Project →
        </a>
      </div>
    </div>
  );
};

export default SingleProject;
