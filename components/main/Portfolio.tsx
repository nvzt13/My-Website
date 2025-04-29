'use client';

import Image from 'next/image';
import React from 'react';

const projects = [
  {
    title: 'Welcome',
    image: '/images/welcome.png',
  },
  {
    title: 'Kurumsal Web Sitesi',
    image: '/images/kurumsal.png',
  },
  {
    title: 'E-Ticaret Sitesi',
    image: '/images/eticaret.png',
  },
];

const ProjectGallery = () => {
  return (
    <section className="py-16 dark:bg-gray-900 flex flex-col items-center max-w-7xl mx-auto shadow-lg  px-4 sm:px-6 lg:px-12 bg-[#f9fafb]">
      <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 dark:text-white mb-2">Portfolyo</h2>
      <p className="text-gray-600 dark:text-gray-300 text-center mb-10">Başarıyla tamamladığımız projeler</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {projects.map((project, index) => (
          <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden flex items-center justify-center h-56">
            <Image
              src={project.image}
              alt={project.title}
              width={500}
              height={300}
              className="object-contain w-full h-full"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectGallery;
