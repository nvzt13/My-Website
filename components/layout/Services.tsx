'use client';
import React from 'react';
import { motion } from 'framer-motion';

const Services = () => {
  const services = [
    {
      title: 'Kurumsal Web Sitesi',
      description: 'Şirketinizi en doğru şekilde temsil edecek güvenli ve modern web siteleri geliştiriyoruz.',
    },
    {
      title: 'E-Ticaret Çözümleri',
      description: 'Ürünlerinizi internet üzerinden kolayca satabileceğiniz güçlü ve ölçeklenebilir platformlar kuruyoruz.',
    },
    {
      title: 'Özel Yazılım Geliştirme',
      description: 'İşinize özel ihtiyaçlarınızı karşılayacak, esnek ve güvenli yazılım çözümleri sunuyoruz.',
    },
    {
      title: 'SEO ve Performans Optimizasyonu',
      description: 'Web sitenizin arama motorlarında üst sıralarda yer alması ve hızlı çalışması için optimize ediyoruz.',
    },
  ];

  return (
    <section className="bg-primary py-52 ">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        
        <motion.h2
          className="text-4xl sm:text-5xl font-extrabold text-center text-white mb-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Modern teknolojilerle, ihtiyacınıza uygun web çözümleri sunuyoruz
        </motion.h2>

        <p className="text-center text-gray-300 max-w-2xl mx-auto mb-16">
          İhtiyacınıza göre tasarlanmış, güvenli, hızlı ve kaliteli web siteleri ile dijital dünyada güçlü bir varlık oluşturun.
        </p>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 cursor-pointer group"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 * index }}
            >
              <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-primary">
                {service.title}
              </h3>
              <p className="text-gray-600 group-hover:text-gray-800">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
