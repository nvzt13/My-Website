'use client';
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProjectCard from '@/components/sub/ProjectCard';
import { projectData } from '@/constants/index';

export default function Projects() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="bg-gray-100 dark:bg-gray-900 py-10 mb-52">
      <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-gray-100 mb-8">
        My Projects
      </h2>
      <p className="text-center text-lg text-gray-700 dark:text-gray-300 mb-10">
        Here are some of the projects...
      </p>
      <Slider {...settings} className="">
      {projectData.map((work, index) => (
          <ProjectCard
            key={index}
            src={work.src}
            title={work.title}
            description={work.description}
            className="flex flex-col justify-between mx-4 h-96 bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105"
          />
        ))}
      </Slider>
    </section>
  );
}