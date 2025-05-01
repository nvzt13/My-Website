import Image from "next/image";
import React from "react";
import { FaCode, FaMobileAlt, FaPaintBrush, FaSearch } from "react-icons/fa";

const About = () => {
  return (
    <section id="hakkimizda" className="bg-gray-100 dark:bg-gray-800 py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 shadow-lg scroll-mt-20">
      <div className="flex flex-col md:flex-row items-center justify-center">
        {/* Profil Fotoğrafı */}
        <Image
          src="https://images.unsplash.com/photo-1496171367470-9ed9a91ea931?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fHdlYnxlbnwwfHwwfHx8MA%3D%3D"
          alt="Nevzat"
          className="rounded-2xl w-60 h-60 object-cover shadow-md mb-6 md:mb-0 md:mr-10"
          width={500}
          height={500}
        />

        {/* Yazı İçeriği */}
        <div className="text-left">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">Hakkımızda</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4 max-w-md">
          Modern ve kullanıcı odaklı web çözümleri geliştirerek markaların dijital dünyada fark yaratmasına yardımcı oluyoruz. Tasarım, yazılım ve performans odağımızdır.
          </p>

          {/* Hizmetler */}
          <div className="grid grid-cols-2 gap-4 text-sm text-gray-600 dark:text-gray-300">
            <div className="flex items-center gap-2">
              <FaCode className="text-blue-600 dark:text-blue-400" /> Web Geliştirme
            </div>
            <div className="flex items-center gap-2">
              <FaPaintBrush className="text-blue-600 dark:text-blue-400" /> UI/UX Tasarımı
            </div>
            <div className="flex items-center gap-2">
              <FaMobileAlt className="text-blue-600 dark:text-blue-400" /> Mobil Uyumlu
            </div>
            <div className="flex items-center gap-2">
              <FaSearch className="text-blue-600 dark:text-blue-400" /> SEO Optimizasyonu
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;