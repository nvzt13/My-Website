'use client';
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProjectCard from '@/components/sub/ProjectCard';
import { useAppSelector } from "@/lib/redux/hooks";

export default function Projects() {
    const projectData = useAppSelector((state) => state.projects.projects);
  const settings = {
    dots: false,
    infinite: true,  // Sonsuz kaydırma
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,  // Otomatik oynatma
    autoplaySpeed: 0,  // Geçişler arasındaki süreyi artırdık
    speed: 10000,  // Geçişin yavaş olması için daha uzun süre ayarladık
    cssEase: "linear",  // Geçişi daha yumuşak hale getirdik
    arrows:false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640, // "sm" ekranlar için ek bir breakpoint
        settings: {
          slidesToShow: 1, // Küçük ekranlarda bir kart gösterilecek
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
            file={work.file}
            createdAt={work.createdAt}
            updatedAt={work.updatedAt}
                />
          </div>
        ))}
      </Slider>
    </section>
  );
}
