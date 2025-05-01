"use client";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import Link from "next/link";
import { RxGithubLogo, RxTwitterLogo, RxLinkedinLogo } from "react-icons/rx";
import { useState } from "react";

const ContactClient = () => {
  const [loading, setLoading] = useState(false);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      alert("Formunuz başarıyla gönderildi!");
      setLoading(false);
    }, 2000);
  };

  return (
    <section className="my-32 max-w-lg mx-auto shadow-xl rounded-xl p-8 bg-background">
      <h2 className="text-3xl font-semibold text-center mb-6">
        Send me an Email
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-6">
          <label htmlFor="name" className="block text-sm font-medium">
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            className="mt-2 block w-full border border-gray-300 dark:border-gray-600 rounded-md shadow-sm p-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Your Name"
            required
          />
        </div>
        <div className="mb-6">
          <label htmlFor="email" className="block text-sm font-medium">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="mt-2 block w-full border border-gray-300 dark:border-gray-600 rounded-md shadow-sm p-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="you@example.com"
            required
          />
        </div>
        <div className="mb-6">
          <label htmlFor="message" className="block text-sm font-medium">
            Message
          </label>
          <textarea
            name="message"
            id="message"
            className="mt-2 block w-full border border-gray-300 dark:border-gray-600 rounded-md shadow-sm p-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Your message"
            rows={4}
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 py-3 px-6 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 flex items-center justify-center"
        >
          {loading ? (
            <AiOutlineLoading3Quarters className="animate-spin" />
          ) : (
            "Send"
          )}
        </button>
      </form>
      <div className="mt-10 text-center">
        <h3 className="text-xl text-gray-800 dark:text-gray-100 mb-4">
          Or reach out via social media
        </h3>
        <div className="flex justify-center space-x-6">
          <Link
            href="https://x.com/nvzt_atly"
            className="flex items-center text-lg hover:text-blue-400 transition-all duration-300 group"
            target="_blank"
          >
            <RxTwitterLogo className="text-4xl group-hover:scale-110 transition-transform duration-300" />
            <span className="ml-3 group-hover:underline">Twitter</span>
          </Link>
          <Link
            href="https://www.linkedin.com/in/nevzat-atalay-6b5164335/"
            className="flex items-center text-lg hover:text-blue-600 transition-all duration-300 group"
            target="_blank"
          >
            <RxLinkedinLogo className="text-4xl group-hover:scale-110 transition-transform duration-300" />
            <span className="ml-3 group-hover:underline">LinkedIn</span>
          </Link>
          <Link
            href="https://github.com/nvzt13"
            className="flex items-center text-lg hover:text-blue-400 transition-all duration-300 group"
            target="_blank"
          >
            <RxGithubLogo className="text-4xl group-hover:scale-110 transition-transform duration-300" />
            <span className="ml-3 group-hover:underline">GitHub</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ContactClient;
