'use client';
import React, {useState, useEffect} from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProjectCard from '@/components/sub/ProjectCard';
import { projectData } from '@/constants/index';
import {fetchAllProjects} from '@/actions/fetch-projects'
export default function Projects() {
  const [projects, setProjects] = useState([])
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
useEffect(()=>{
  const getProjects = async () => {
    

  try {
      const res = await fetchAllProjects();
      if (res.success) {
        console.log(res);
        setProjects(res.allProjects)
        alert("File fetch successfully!");
      } else {
        console.log(res);
        alert("File can't be fetch.");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };
getProjects()
},[])
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
        {projects.map((work, index) => (
          <div key={index} className="group px-2">
              {work.file}

      
          
          </div>
        ))}
      </Slider>
    </section>
  );
}
