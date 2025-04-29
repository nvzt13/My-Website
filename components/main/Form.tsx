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
    <section className="bg-gray-50 flex flex-col md:flex-row items-center justify-between md:px-16 bg-gradient-to-r from-[#eff4ff] to-[#55bded] py-20 max-w-7xl mx-auto shadow-lg">
    <div className="max-w-7xl mx-auto py-12 px-4">
      <h2 className="text-2xl font-semibold text-center mb-8 ">İletişime Geçin</h2>
      <form onSubmit={handleSubmit} className="space-y-4 max-w-5xl">
        <div>
          <label className="block mb-1 text-sm font-medium">Ad Soyad</label>
          <input
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
          />
        </div>
        <div>
          <label className="block mb-1 text-sm font-medium">E-posta</label>
          <input
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
          />
        </div>
        <div>
          <label className="block mb-1 text-sm font-medium">Mesaj</label>
          <textarea
            name="message"
            rows="5"
            required
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-800 transition"
        >
          Gönder
        </button>
      </form>
    </div>
    </section>
  );
};

export default ContactForm;
