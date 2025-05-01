'use client';

import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const SideBar = () => {
  const router = useRouter();

  const handleLogout = async () => {
    // Token'ı silmek için logout API'sini çağır
    await fetch('/api/logout', {
      method: 'POST',
    });

    // Kullanıcıyı login sayfasına yönlendir
    router.push('/login');
  };

  return (
    <div className="w-64 h-full bg-gray-800 text-gray-100 p-5 shadow-lg">
      <Link href="/admin">
        <h2 className="border-b border-gray-700 pb-2 mb-4">Nevzat Atalay</h2>
      </Link>
      <ul className="list-none p-0">
        <li className="my-4">
          <Link href="/admin/add-project" className="text-gray-100 no-underline">
            Proje Ekle
          </Link>
        </li>
        <li className="my-4">
          <button
            onClick={handleLogout}
            className="text-gray-100 no-underline bg-transparent border-none cursor-pointer"
          >
            Logout
          </button>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
