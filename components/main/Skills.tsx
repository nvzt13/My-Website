import React from "react";
import { skillsData } from '@/constants/index';
import Image from 'next/image'

interface SkillProps {
  name: string;
  level: string;
  icon: string;
}

const Skill: React.FC<SkillProps> = ({ name, level, icon }) => {
  return (
    <div className="bg-white bg-opacity-80 dark:bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition duration-300 transform hover:scale-105 flex flex-col items-center justify-center">
      <Image 
        width={60} 
        height={60} 
        src={icon} 
        alt={`${name} icon`} 
        className="w-14 h-14 mb-3 brightness-110" // Boyutu artırdık ve parlaklığı değiştirdik
      />
      <h3 className="text-lg font-bold text-gray-800 dark:text-gray-200">{name}</h3>
      <p className="text-sm text-gray-600 dark:text-gray-400">{level}</p>
    </div>
  );
};

const Skills = () => {
  return (
    <section className="bg-blue-100 py-12 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100 text-center mb-12">
          My Skills
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {skillsData.map((skill, index) => (
            <Skill key={index} name={skill.skill_name} level={skill.level} icon={skill.Image} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;