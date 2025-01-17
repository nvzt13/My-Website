import React from "react";
import { projectData } from '@/constants/index';
import ProjectCard from '@/components/sub/ProjectCard';

const Works = () => {
  return (
    <div className="my-52 py-16 bg-gradient-to-b from-gray-50 to-gray-200">
      <h2 className="text-5xl font-extrabold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-indigo-600 animate-text">
        My Works
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-7xl mx-auto px-6">
        {projectData.map((work, index) => (
          <ProjectCard
            key={index}
            src={work.src}
            title={work.title}
            description={work.description}
            className="transition-transform transform hover:-translate-y-2 hover:shadow-xl rounded-lg overflow-hidden"
          />
        ))}
      </div>
    </div>
  );
};

export default Works;