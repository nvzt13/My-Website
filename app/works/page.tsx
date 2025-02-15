"use client";
import React, { useState } from "react";
import { projectData } from "@/constants/index";
import ProjectCard from "@/components/sub/ProjectCard";

const Works = () => {
  return (
    <section className="mx-auto my-32 bg-background p-8">
      <h2 className="text-5xl font-bold text-center mb-6 text-dark dark:text-light font-sans">
        My Works
      </h2>
      <hr className="border-t-2 border-dark dark:border-lighr mb-12" />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mx-auto mt-5 px-4 md:px-8">
              {projects.length > 0 ? (
          projects.map((work, index) => (
            <div key={index} className="group px-2">
              <ProjectCard
                title={work.title}
                address={work.address}
                technologies={work.technologies}
                date={work.date}
                file={work.file}
              />
            </div>
          ))
        ) : (
          <div>loading</div>
        )}
      </div>
    </section>
  );
};

export default Works;
