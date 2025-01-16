'use client';
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProjectCard from '@/components/sub/ProjectCard';

export default function Projects() {
  const settings = {
    dots: true,
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
    <div className="bg-gray-100 dark:bg-gray-900 py-10 mb-[120px]">
      <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-gray-100 mb-8">
        My Projects
      </h2>
      <p className="text-center text-lg text-gray-700 dark:text-gray-300 mb-10">
        Here are some of the projects I've worked on. Click on the cards to learn more!
      </p>
      <Slider {...settings} className="my-10">
        <div className="px-4">
          <ProjectCard 
            src="/30_daysR.jpg"
            title="30 Days of React"
            description="A 30-day challenge to learn React"
          />
        </div>
        <div className="px-4">
          <ProjectCard 
            src="/my-website.png"
            title="My Personal Website"
            description="A portfolio website to showcase my projects"
          />
        </div>
        <div className="px-4">
          <ProjectCard 
            src="/javascript.png"
            title="JavaScript Fundamentals"
            description="A project focused on mastering JavaScript basics"
          />
        </div>
      </Slider>
      <style jsx>{`
        .slick-dots li button:before {
          font-size: 12px;
          color: #4A5568; /* Tailwind gray-600 */
        }
        .slick-dots li.slick-active button:before {
          color: #2B6CB0; /* Tailwind blue-600 */
        }
      `}</style>
    </div>
  );
}