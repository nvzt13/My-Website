'use client'
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProjectCard from '@/components/sub/ProjectCard'
export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings} className="my-10">
        <ProjectCard 
        src="/30_daysR.jpg"
        title="30 Days of React"
        description="A 30-day challenge to learn React"
        />
        <ProjectCard 
        src="/30_daysR.jpg"
        title="30 Days of React"
        description="A 30-day challenge to learn React"
        />
        <ProjectCard 
        src="/30_daysR.jpg"
        title="30 Days of React"
        description="A 30-day challenge to learn React"
        />
    </Slider>
  );
}