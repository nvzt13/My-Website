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
    <section className="flex justify-center flex-col bg-foreground p-8">
      <div className="max-w-7xl mx-auto">
      <h2 className="text-4xl pt-12 sm:text-5xl font-extrabold text-center mb-8">
        My Projects
      </h2>
      <hr className="border-b-2 border-border mb-24 w-24 mx-auto"/>

      </div>
      {/* Slider öğeleri arasındaki boşlukları optimize ettik */}
      <Slider {...settings} className="mx-auto max-w-full sm:max-w-[710px]">
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
