import React from "react";
import { projectData } from '@/constants/index';
import ProjectCard from '@/components/sub/ProjectCard';

const Works = () => {
  return (
    <section className="mx-auto  my-12">
      <h2 className="text-5xl font-bold text-center mb-6 text-dark dark:text-light font-sans">
        My Works
      </h2>
      <hr className="border-t-2 border-gray-300 mb-12" />
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto mt-5 px-4 md:px-8">
  {projectData.map((work, index) => (
    <ProjectCard
      key={index}
      src={work.src}
      title={work.title}
      description={work.description}
      className="flex flex-col bg-white dark:bg-gray-800 rounded-lg shadow-xl overflow-hidden transition-transform transform hover:scale-105 hover:shadow-2xl hover:bg-gray-50 dark:hover:bg-gray-700"
      href={work.href}
    />
  ))}
</div>
    </section>
  );
};

export default Works;