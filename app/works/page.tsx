import React from "react";
import { projectData } from '@/constants/index';
import ProjectCard from '@/components/sub/ProjectCard';

const Works = () => {
  return (
    <div className="my-24 py-16 mx-auto">
      <h2 className="text-5xl font-extrabold text-center text-transparent bg-clip-text bg-dark mb-6">
        My Works
      </h2>
      <hr />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto mt-5 px-8">
        {projectData.map((work, index) => (
          <ProjectCard
            key={index}
            src={work.src}
            title={work.title}
            description={work.description}
            className="flex flex-col m-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105"
          />
        ))}
      </div>
    </div>
  );
};

export default Works;