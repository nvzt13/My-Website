"use client";
import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProjectCard from "@/components/sub/ProjectCard";

import { fetchAllProjects } from "@/app/api/fetch-projects";
import { ProjectCardProps } from "@/type/types";

export default function Projects() {
  const [projects, setProjects] = useState<ProjectCardProps[]>([]);
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000, // 0 yerine 3000 ms (3 saniye) bekleme süresi
    speed: 1000, // 10000 ms yerine daha uygun bir hız (1000 ms)
    cssEase: "ease-in-out", // Daha doğal bir geçiş
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

  useEffect(() => {
    const getProjects = async () => {
      try {
        const res = await fetchAllProjects();
        if (res && res.success) {
          setProjects(res.allProjects || []);
        } else {
          console.log("File can't be fetch.");
        }
      } catch (error) {
        console.log(error);
      }
    };
    getProjects();
  }, []);

  return (
    <section className="flex justify-center flex-col bg-foreground p-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl pt-12 sm:text-5xl font-extrabold text-center mb-8">
          My Projects
        </h2>
        <hr className="border-b-2 border-border mb-24 w-24 mx-auto" />
      </div>

      <Slider {...settings} className="mx-auto max-w-full sm:max-w-[710px]">
        {projects.length > 0 ? (
          projects.map((work, index) => (
            <div key={index} className="group px-2">
              <ProjectCard
                title={work.title}
                address={work.address}
                technologies={work.technologies}
                date={work.date}
                file={work.file}
              />
            </div>
          ))
        ) : (
          <div>loading</div>
        )}
      </Slider>
    </section>
  );
}
