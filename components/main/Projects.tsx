'use client'
import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import ProjectCard from "../sub/ProjectCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Projects = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true); // Component sadece istemci tarafında render edilecek
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };

  const Slider = dynamic(() => import('react-slick'), {
    ssr: false, // SSR devre dışı
  });

  if (!isMounted) {
    return null; // Sunucu tarafında render edilen kodu gizle
  }

  return (
    <section className="flex flex-col items-center justify-center" id="projects">
      <h1 className="font-semibold">My Projects</h1>
      <div className="flex flex-col">
        <Slider {...settings}>
          <ProjectCard
            src="/30_daysR.jpg"
            title="Modern Next.js Portfolio"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />
          <ProjectCard
            src="/NextWebsite.png"
            title="Modern Next.js Portfolio"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />
        </Slider>
      </div>
    </section>
  );
};

export default Projects;