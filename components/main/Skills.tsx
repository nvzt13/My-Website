import React from "react";
import { skillsData } from '@/constants/index';

const Skill = ({ name, level, icon }) => {
  return (
    <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 shadow-md hover:shadow-lg transition duration-300 transform hover:scale-105 flex flex-col items-center justify-center">
      <img src={icon} alt={`${name} icon`} className="w-12 h-12 mb-2" />
      <h3 className="text-lg font-bold text-gray-800 dark:text-gray-200">{name}</h3>
      <p className="text-sm text-gray-600 dark:text-gray-400">{level}</p>
    </div>
  );
};

const Skills = () => {
  return (
    <section className="py-12 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 text-center mb-8">
          My Skills
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {skillsData.map((skill, index) => (
            <Skill key={index} name={skill.skill_name} level={skill.level} icon={skill.Image} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;