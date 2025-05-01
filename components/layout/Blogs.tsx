'use client';

import { blogPosts } from "@/constants";
import Image from "next/image";
import React from "react";


const BlogSection = () => {
  return (
    <section id="blog" className="bg-gradient-to-r from-white to-gray-100 dark:from-gray-900 dark:to-gray-800 py-12 px-6 text-center max-w-7xl mx-auto shadow-lg scroll-mt-20">
      <div className="py-12 px-4 sm:px-6 lg:px-12 text-center max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-1">Blog</h2>
        <p className="text-gray-500 dark:text-gray-400 mb-10">Son Yazılar ve Güncellemeler</p>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {blogPosts.map((post, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl shadow hover:shadow-lg transition p-4 text-left"
            >
              <Image
                src={post.image}
                alt={post.title}
                className="rounded-lg mb-4 h-40 w-full object-cover"
                width={400}
                height={200}
              />
              <h3 className="font-semibold text-lg text-gray-800 dark:text-white mb-2">
                {post.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                {post.description}
              </p>
              <a
                href={`/blog/${post.id}`}
                className="text-blue-600 dark:text-blue-400 hover:underline text-sm font-medium"
              >
                Devamını Oku →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
