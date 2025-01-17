import React from 'react';

interface ProgressProps {
  bgcolor: string;
  completed: number;
  title: string;
}

const Download: React.FC<ProgressProps> = ({ bgcolor, completed, title }) => {
  return (
    <div className="w-full max-w-md p-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
      <div className="flex justify-between items-center mb-2">
        <span className="text-gray-800 dark:text-white font-semibold">{title}</span>
        <span className="text-gray-600 dark:text-gray-300 text-sm">{`${completed}%`}</span>
      </div>
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-4 shadow-inner">
        <div
          className={`h-4 rounded-full ${bgcolor} shadow-lg`}
          style={{ width: `${completed}%`, transition: 'width 0.7s ease-in-out' }}
        ></div>
      </div>
    </div>
  );
};

const Progress = () => {
  return (
    <section
      className="p-8 rounded-xl shadow-lg w-full flex flex-col items-center justify-center bg-gradient-to-r from-indigo-900 via-pink-500 to-yellow-500 dark:from-gray-900 dark:via-gray-700 dark:to-gray-500 flex flex-col items-center overflow-hidden"
    >
      <h2 className="text-3xl font-bold mb-10 text-center text-white">Yetkinlik İlerlemesi</h2>
      <Download bgcolor="bg-red-500" completed={80} title="Web Geliştirme" />
      <Download bgcolor="bg-green-500" completed={40} title="Network" />
      <Download bgcolor="bg-blue-500" completed={60} title="Backend" />
    </section>
  );
};

export default Progress;