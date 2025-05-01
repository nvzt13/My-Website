import React from 'react';
import { blogPosts } from '@/constants/index';

const renderContent = (content: string) => {
  const lines = content.split('\n').filter(line => line.trim() !== '');

  return lines.map((line, index) => {
    if (line.startsWith('### ')) {
      return <h2 key={index} className="text-xl font-semibold mt-6 mb-2 text-gray-900 dark:text-white">{line.replace('### ', '')}</h2>;
    } else if (line.startsWith('- ')) {
      const items = line.split('- ').filter(Boolean);
      return (
        <ul key={index} className="list-disc list-inside pl-4 text-gray-700 dark:text-gray-300">
          {items.map((item, i) => <li key={i}>{item.trim()}</li>)}
        </ul>
      );
    } else {
      return <p key={index} className="mb-4 text-gray-700 dark:text-gray-300">{line}</p>;
    }
  });
};

const BlogClient = ({ id }: { id: string }) => {
  const post = blogPosts.find((post) => post.id.toString() === id);

  if (!post) {
    return <div className="text-center py-20 text-gray-600 dark:text-gray-300">Blog gönderisi bulunamadı.</div>;
  }

  return (
    <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <article className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg overflow-hidden transition-all">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-60 object-cover sm:h-72 md:h-80"
        />
        <div className="p-6 sm:p-8">
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
            {new Date(post.date).toLocaleDateString('tr-TR')}
          </p>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-6">{post.title}</h1>
          <div className="prose dark:prose-invert max-w-none">
            {renderContent(post.content)}
          </div>
        </div>
      </article>
    </section>
  );
};

export default BlogClient;
