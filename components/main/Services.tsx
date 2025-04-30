'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaUser, FaBuilding, FaShoppingCart } from 'react-icons/fa';

const services = [
  {
    id:"kisisel-web-sitesi",
    title: 'Kişisel Web Sitesi',
    description:
      'Profesyonel kimliğinizi yansıtan, modern ve etkileyici kişisel web siteleri.',
    icon: <FaUser size={40} className="text-blue-600" />,
  },
  {
    id:"kurumsal-web-sitesi",
    title: 'Kurumsal Web Sitesi',
    description:
      'Kurumsal kimliğinizi güçlendiren, profesyonel ve kullanıcı dostu web siteleri.',
    icon: <FaBuilding size={40} className="text-blue-600" />,
  },
  {
    id:"e-ticaret-sitesi",
    title: 'E-Ticaret Sitesi',
    description:
      'Online satış için optimize edilmiş, güvenli ve kullanıcı dostu e-ticaret çözümleri.',
    icon: <FaShoppingCart size={40} className="text-blue-600" />,
  },
];

const Services = () => {
  return (
    <section id="services" className="py-16 dark:bg-gray-900 max-w-7xl mx-auto shadow-lg bg-[#f9fafb]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Başlık */}
        <motion.h2
          className="text-3xl sm:text-4xl font-bold text-center text-gray-800 dark:text-white mb-4"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Hizmetlerimiz
        </motion.h2>

        <p className="text-center text-gray-600 dark:text-gray-300 mb-12">
          Size özel dijital çözümler sunuyoruz
        </p>

        {/* Kartlar */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-gray-800 shadow-md p-6 rounded-lg hover:shadow-xl transition"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 * index }}
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {service.description}
              </p>
              <a
                href={`/services/${service.id}`}
                className="text-blue-600 hover:underline flex items-center gap-1 font-medium"
              >
                Detaylı Bilgi →
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
