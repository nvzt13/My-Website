import React from "react";
import { FaEnvelope, FaPhone } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-700 py-10 border-t">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8 text-sm">
        
        {/* Marka */}
        <div>
          <h3 className="font-bold text-lg mb-2">Nevzat</h3>
          <p>Profesyonel web tasarım ve yazılım hizmetleri.</p>
        </div>

        {/* Hizmetler */}
        <div>
          <h4 className="font-semibold mb-2">Hizmetler</h4>
          <ul className="space-y-1">
            <li><a href="#" className="hover:text-blue-600">Kişisel Web Sitesi</a></li>
            <li><a href="#" className="hover:text-blue-600">Kurumsal Web Sitesi</a></li>
            <li><a href="#" className="hover:text-blue-600">E-Ticaret Sitesi</a></li>
          </ul>
        </div>

        {/* Bağlantılar */}
        <div>
          <h4 className="font-semibold mb-2">Hızlı Bağlantılar</h4>
          <ul className="space-y-1">
            <li><a href="#" className="hover:text-blue-600">Portfolyo</a></li>
            <li><a href="#" className="hover:text-blue-600">Hakkımda</a></li>
            <li><a href="#" className="hover:text-blue-600">Blog</a></li>
          </ul>
        </div>

        {/* İletişim */}
        <div>
          <h4 className="font-semibold mb-2">İletişim</h4>
          <ul className="space-y-1">
            <li className="flex items-center gap-2">
              <FaEnvelope /> info@nevzat.com
            </li>
            <li className="flex items-center gap-2">
              <FaPhone /> +90 555 123 4567
            </li>
          </ul>
        </div>
      </div>

      <div className="text-center text-xs text-gray-500 mt-10 border-t pt-4">
        © 2025 Nevzat. Tüm hakları saklıdır.
      </div>
    </footer>
  );
};

export default Footer;
