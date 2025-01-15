import {
  Skill_data
} from "@/constants";
import React from "react";
import SkillDataProvider from "../sub/SkillDataProvider";
const Skills = () => {
  return (
    <section
      id="skills"
      className="mx-auto flex flex-col items-center justify-center "
    >
      <h1 className=" text-7xl my-auto">My Skills</h1>
      <div className="flex flex-row justify-around flex-wrap items-center">
        {Skill_data.map((image, index) => (
          <SkillDataProvider
            key={index}
            src={image.Image}
            width={image.width}
            height={image.height}
            index={index}
          />
        ))}
      </div>
    </section>
  );
};

export default Skills;
