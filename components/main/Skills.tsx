'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { skillsData } from '@/constants/index';
import Skill from '@/components/sub/Skill';

const Skills = () => {
  return (
    <section className="my-8 opacity-90">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <motion.h2
          className="text-4xl pt-12 sm:text-5xl font-extrabold text-center text-dark dark:text-gray-100 mb-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Explore My Expertise
        </motion.h2>

        <hr className="border-b-2 border-dark dark:border-light mb-24 w-24 mx-auto" />
        
        {/* Skills Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10 md:gap-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          {skillsData.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 * index }}
            >
              <Skill
                name={skill.skill_name}
                level={skill.level}
                icon={skill.Image}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;