import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface ProjectCardProps {
  src: string;
  title: string;
  description: string;
  className?: string; 
  href: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ src, title, description, className = '', href }) => {
  return (
    <div className={`${className}`}>
      <div className="img-wrapper overflow-hidden">
        <Image 
          src={src} 
          alt={title} 
          width={500}
          height={500}
          objectFit="cover"
          className="w-full object-[50%_8%] h-40 object-cover"
        />
      </div>
      <div className="p-4 flex flex-col">
        <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2">{title}</h3>
<p className="text-gray-600 dark:text-gray-400 mb-4 max-h-12 overflow-hidden text-ellipsis whitespace-nowrap">{description}</p>
        <Link href={href} target="_blank" className="w-full py-3 bg-gradient-to-r from-blue-500 to-teal-400 text-white font-semibold rounded-lg shadow-lg hover:from-blue-600 hover:to-teal-500 focus:ring-4 focus:ring-blue-300 transition duration-300 text-center">
            View Project
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;