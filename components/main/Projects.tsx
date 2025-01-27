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
    speed: 3000, // Geçiş hızını optimize ettik
    autoplaySpeed: 4000,
    cssEase: "ease", // Geçişleri yumuşattık
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
    <section className="flex items-between justify-center flex-col opacity-90">
      {/* Başlık ve alt metin arasındaki boşluğu azalttık */}
      <h2 className="text-4xl pt-12 sm:text-5xl font-extrabold text-center text-dark dark:text-gray-100 mb-8">
        My Projects
      </h2>
      <hr className="w-24 border-b-2 border-dark dark:border-light mb-24 mx-auto"/>

      {/* Slider öğeleri arasındaki boşlukları optimize ettik */}
      <Slider {...settings} className="mx-auto max-w-5xl px-4">
        {projectData.map((work, index) => (
          <ProjectCard
            key={index}
            src={work.src}
            title={work.title}
            description={work.description}
            className="flex flex-col justify-between mx-4 h-96 bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105"
            href={work.href}
          />
        ))}
      </Slider>
    </section>
  );
}