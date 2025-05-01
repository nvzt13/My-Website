'use client';
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProjectCard from '@/components/sub/ProjectCard';
import { useAppSelector } from "@/lib/redux/hooks";

export default function Projects() {
    const projectData = useAppSelector((state) => state.projects.projects);
    console.log(projectData);
    const settings = {
      dots: false,
      infinite: projectData.length > 2, // en az 3 proje varsa sonsuz olsun
      slidesToShow: 2,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000, // 3 saniyede bir
      speed: 800,          // 0.8 saniyede geçiş yapsın
      cssEase: "ease-in-out",
      arrows: false,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 640,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    
  return (
    <section id="projeler" className="py-16 dark:bg-gray-900 flex flex-col items-center max-w-7xl mx-auto shadow-lg  px-4 sm:px-6 lg:px-12 bg-gray-100 scroll-mt-20">
      <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 dark:text-white mb-2">Projeler</h2>
      <p className="text-gray-600 dark:text-gray-300 text-center mb-10">Başarıyla tamamladığımız projeler</p>
      {/* Slider öğeleri arasındaki boşlukları optimize ettik */}
      <Slider {...settings} className="mx-auto w-full">
        {projectData.map((work, index) => (
          <div key={index}>
            <ProjectCard
            id={work.id}
            title={work.title}
            address={work.address}
            technologies={work.technologies}
            date={work.date}
            image={work.image}
            createdAt={work.createdAt}
            updatedAt={work.updatedAt}
                />
          </div>
        ))}
      </Slider>
    </section>
  );
}
