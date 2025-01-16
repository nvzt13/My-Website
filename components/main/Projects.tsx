'use client'
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProjectCard from '@/components/sub/ProjectCard'
export default function Projects() {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 2000,
    cssEase: "linear"
  };
  return (
    <Slider {...settings} className="my-10">
        <ProjectCard 
        src="/30_daysR.jpg"
        title="30 Days of React"
        description="A 30-day challenge to learn React"
        />
        <ProjectCard 
        src="/my-website.png"
        title="30 Days of React"
        description="A 30-day challenge to learn React"
        />
        <ProjectCard 
        src="/javascript.png"
        title="30 Days of React"
        description="A 30-day challenge to learn React"
        />
    </Slider>
  );
}