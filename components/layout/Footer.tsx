'use client';

import React from 'react';
import Link from 'next/link';
import { FaEnvelope, FaPhone } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 py-10 border-t border-gray-200 dark:border-gray-700">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8 text-sm">
        
        {/* Marka */}
        <div>
          <h3 className="font-bold text-lg text-gray-800 dark:text-white mb-2">Nevzat Atalay</h3>
          <p className="text-gray-600 dark:text-gray-400">
            Profesyonel web tasarım ve yazılım hizmetleri.
          </p>
          <Link href={"/login"} className="mt-4 inline-block text-indigo-600 dark:text-indigo-400 hover:underline">
            Admin
          </Link>
        </div>

        {/* Hizmetler */}
        <div>
          <h4 className="font-semibold text-gray-800 dark:text-white mb-2">Hizmetler</h4>
          <ul className="space-y-1">
            <li>
              <Link href="#" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                Kişisel Web Sitesi
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                Kurumsal Web Sitesi
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                E-Ticaret Sitesi
              </Link>
            </li>
          </ul>
        </div>

        {/* Bağlantılar */}
        <div>
          <h4 className="font-semibold text-gray-800 dark:text-white mb-2">Hızlı Bağlantılar</h4>
          <ul className="space-y-1">
            <li>
              <Link href="#projeler" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                Portfolyo
              </Link>
            </li>
            <li>
              <Link href="#hakkimizda" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                Hakkımda
              </Link>
            </li>
            <li>
              <Link href="#blog" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                Blog
              </Link>
            </li>
          </ul>
        </div>

        {/* İletişim */}
        <div>
          <h4 className="font-semibold text-gray-800 dark:text-white mb-2">İletişim</h4>
          <ul className="space-y-2 text-gray-700 dark:text-gray-300">
            <li className="flex items-center gap-2">
              <FaEnvelope className="text-indigo-600 dark:text-indigo-400" />
              <span>info@nevzat.com</span>
            </li>
            <li className="flex items-center gap-2">
              <FaPhone className="text-indigo-600 dark:text-indigo-400" />
              <span>+90 555 123 4567</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="text-center text-xs text-gray-500 dark:text-gray-400 mt-10 border-t pt-4 border-gray-200 dark:border-gray-700">
        © 2025 Nevzat Atalay. Tüm hakları saklıdır.
      </div>
    </footer>
  );
};

export default Footer;
