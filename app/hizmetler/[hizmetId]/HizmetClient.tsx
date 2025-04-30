"use client";

import { servicesData } from '@/constants/index';
import { notFound } from 'next/navigation';
import { motion } from 'framer-motion';
import Image from 'next/image';

type Props = {
  hizmetId: string;
};

export default function SingleServicePage({ hizmetId }: Props) {
  const service = servicesData.find((item) => item.id === hizmetId);
  if (!service) return notFound();

  return (
    <main className="max-w-6xl mx-auto px-6 py-12 space-y-16 bg-white dark:bg-gray-900 my-12">
      {/* Üst Kısım: Görsel + Tanıtım Yazısı */}
      <section className="grid md:grid-cols-2 gap-10 items-center">
        <div className="bg-gray-200 dark:bg-gray-700 h-64 w-full rounded-2xl shadow-md" >
          <Image
            src={service.image}
            alt={service.title}
            className="h-full w-full object-cover rounded-2xl"
            width={500}
            height={500}
          />
        </div>
        <motion.p
          className="text-lg leading-relaxed text-gray-800 dark:text-gray-200"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {service.description}
        </motion.p>
      </section>

      {/* Alt Kısım: İki Blok Yan Yana */}
      <section className="grid md:grid-cols-2 gap-12">
        {/* Neler Sunuyorum */}
        <div>
          <h2 className="text-2xl font-semibold text-indigo-600 dark:text-indigo-400 mb-4">
            Neler Sunuyorum?
          </h2>
          <div className="grid gap-4 pl-2">
            {service.features.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-gray-100 dark:bg-gray-800 p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <li className="text-gray-800 dark:text-gray-100">{feature}</li>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Kimler İçin Uygun */}
        <div>
          <h2 className="text-2xl font-semibold text-indigo-600 dark:text-indigo-400 mb-4">
            Kimler İçin Uygun?
          </h2>
          <div className="grid gap-4 pl-2">
            {service.targetAudience.map((audience, index) => (
              <motion.div
                key={index}
                className="bg-gray-100 dark:bg-gray-800 p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow"
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <li className="text-gray-800 dark:text-gray-100">{audience}</li>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
