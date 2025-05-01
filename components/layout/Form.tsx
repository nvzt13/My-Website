"use client";
import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form verileri:", formData);
    // Buraya form gönderme işlemleri (API, e-posta vs.) eklenebilir
  };

  return (
    <section
      id="iletisim"
      className="bg-white dark:bg-gray-800 py-20 max-w-7xl shadow-lg scroll-mt-20"
    >
      <div className="mx-auto py-12 px-4 w-full">
        <h2 className="text-2xl font-semibold text-center mb-8 text-gray-800 dark:text-white">
          İletişime Geçin
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4 max-w-2xl mx-auto">
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">
              Ad Soyad
            </label>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-400 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-black dark:text-white focus:outline-none focus:ring focus:ring-blue-300"
            />
          </div>
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">
              E-posta
            </label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-400 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-black dark:text-white focus:outline-none focus:ring focus:ring-blue-300"
            />
          </div>
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">
              Mesaj
            </label>
            <textarea
              name="message"
              rows="5"
              required
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-400 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-black dark:text-white focus:outline-none focus:ring focus:ring-blue-300"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-black dark:bg-blue-600 text-white py-2 rounded-md hover:bg-gray-800 dark:hover:bg-blue-700 transition"
          >
            Gönder
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;