"use client";
import React, { useState } from "react";
import { projectData } from "@/constants/index";
import ProjectCard from "@/components/sub/ProjectCard";

const Works = () => {

  const [expandedCardId, setExpandedCardId] = useState<number | null>(null);

  const handleExpandClick = (id: number) => {
    setExpandedCardId((prevId) => (prevId === id ? null : id));
  };

  return (
    <section className="mx-auto my-12">
      <h2 className="text-5xl font-bold text-center mb-6 text-dark dark:text-light font-sans">
        My Works
      </h2>
      <hr className="border-t-2 border-dark dark:border-lighr mb-12" />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mx-auto mt-5 px-4 md:px-8">
        {projectData.map((work) => (
          <ProjectCard
            key={work.id}
            id={work.id}
            src={work.src}
            title={work.title}
            date={work.date}
            href={work.href}
            technologies={work.technologies}
          />
        ))}
      </div>
    </section>
  );
};

export default Works;
