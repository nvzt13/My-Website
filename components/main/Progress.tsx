import React from 'react';

interface ProgProps {
  completed: number;
  title: string;
  className: string;
}

const Prog: React.FC<ProgProps> = ({ completed, title, className }) => {
  return (
    <div className="w-full max-w-md p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
      <div className="mb-4">
        <h3 className="text-xl font-bold text-gray-800 dark:text-white text-center uppercase tracking-wide">
          {title}
        </h3>
        <span className="block text-sm text-gray-600 dark:text-gray-300 text-center">{`${completed}%`}</span>
      </div>
      <div className="w-full bg-gray-300 dark:bg-gray-700 rounded-full h-4 overflow-hidden">
        <div
          className={`${className} h-4 transition-all duration-1000 ease-out rounded-full`}
          style={{ width: `${completed}%` }}
        ></div>
      </div>
    </div>
  );
};

const Progress = () => {
  return (
    <section className="rounded-lg my-8 px-8 w-full flex flex-col items-center justify-center bg-gradient-to-r from-white-300 to-sky-500 dark:from-gray-800 dark:to-gray-900 opacity-90">
      <h2 className="text-4xl sm:text-5xl font-extrabold text-center text-gray-800 dark:text-gray-100 mb-8 opacity-80">
        Yetkinlik İlerlemesi
      </h2>
      <hr className="border-b-2 border-gray-800 dark:border-gray-100 mb-12 w-24 mx-auto" />
      
      <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
        <Prog completed={80} title="Web Geliştirme" className="bg-gradient-to-r from-purple-400 to-purple-900 dark:from-purple-600 dark:to-purple-900"/>
        <Prog completed={40} title="Backend" className="bg-gradient-to-r from-green-300 to-green-700 dark:from-green-500 dark:to-green-700" />
        <Prog completed={50} title="Network" className="bg-gradient-to-r from-red-400 to-red-600 dark:from-red-500 dark:to-red-700"/>
      </div>
    </section>
  );
};

export default Progress;