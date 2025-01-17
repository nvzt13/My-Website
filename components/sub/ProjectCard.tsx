import Image from "next/image";
import React from "react";

interface Props {
  src: string;
  title: string;
  description: string;
  className: string
}

const ProjectCard = ({ src, title, description, className }: Props) => {
  return (
    <div className={className}>
      <Image
        src={src}
        alt={title}
        width={1000}
        height={1000}
        className="w-full object-contain"
      />

      <div className="relative p-4">
        <h1 className="text-2xl">{title}</h1>
        <p className="mt-2 ">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
