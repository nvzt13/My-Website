import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface ProjectCardProps {
  src: string;
  title: string;
  description: string;
  className?: string; // className opsiyonel hale getirildi
}

const ProjectCard: React.FC<ProjectCardProps> = ({ src, title, description, className = '' }) => {
  return (
    <div className={`${className}`}>
      <div className="img-wrapper overflow-hidden">
        <Image 
          src={src} 
          alt={title} 
          layout="responsive" // Duyarlı yükseklik
          width={1250} 
          height={1000} 
          className="object-cover w-full h-auto" // Duyarlı yükseklik
        />
      </div>
      <div className="p-4 flex flex-col">
        <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2">{title}</h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4">{description}</p>
        <Link href="sdfg">
          <button className="w-full py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition duration-300">
            View Project
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;