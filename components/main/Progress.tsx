import React from 'react';

interface ProgProps {
  bgcolor: string;
  completed: number;
  title: string;
}

const Prog: React.FC<ProgProps> = ({ bgcolor, completed, title }) => {
  return (
    <div className="w-full max-w-md p-4 bg-transparent dark:bg-gray-800 rounded-lg shadow-lg">
      <div className="flex justify-between items-center mb-2">
        <span className="text-gray-800 dark:text-white font-semibold">{title}</span>
        <span className="text-gray-600 dark:text-gray-300 text-sm">{`${completed}%`}</span>
      </div>
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-6 shadow-inner">
        <div
          className={`h-6 rounded-full ${bgcolor} shadow-lg transition-all duration-300`}
          style={{ width: `${completed}%`, transition: 'width 0.7s ease-in-out' }}
        ></div>
      </div>
    </div>
  );
};

const Progress = () => {
  return (
    <section className="py-16 px-8 shadow-lg w-full flex flex-col items-center justify-center bg-gradient-to-r from-blue-200 to-white dark:from-gray-800 dark:to-black">
      <h2 className="text-3xl font-bold mb-10 text-center text-gray-900 dark:text-gray-100">Yetkinlik İlerlemesi</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
      <Prog bgcolor="bg-blue-500" completed={80} title="Web Geliştirme" />
      <Prog bgcolor="bg-blue-600" completed={60} title="Backend" />
      <Prog bgcolor="bg-green-500" completed={40} title="Network" />
      </div>
    </section>
  );
};

export default Progress;