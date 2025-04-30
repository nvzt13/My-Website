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
    <section className="py-16 dark:bg-gray-900 flex flex-col items-center max-w-7xl mx-auto shadow-lg  px-4 sm:px-6 lg:px-12 bg-gray-100">
      <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 dark:text-white mb-2">Projeler</h2>
      <p className="text-gray-600 dark:text-gray-300 text-center mb-10">Başarıyla tamamladığımız projeler</p>
      <div className="mb-24">
      </div>
      {/* Slider öğeleri arasındaki boşlukları optimize ettik */}
      <Slider {...settings} className="mx-auto max-w-full sm:max-w-[768px]">
        {projectData.map((work, index) => (
          <div key={index} className="group px-2">  {/* Kartlar arasındaki boşluk azaltıldı */}
            <ProjectCard
              id={work.id}
              src={work.src}
              title={work.title}
              date={work.date}
              href={work.href}
              technologies={work.technologies}
            />
          </div>
        ))}
      </Slider>
    </section>
  );
}
