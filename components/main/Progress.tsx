import React from 'react';

const Download = ({ bgcolor, completed, title }) => {
  return (
    <div className="mb-8">
      <div className="flex justify-between items-center mb-2">
        <span className="text-white font-semibold">{title}</span>
        <span className="text-white text-sm">{`${completed}%`}</span>
      </div>
      <div className="w-full bg-gray-700 rounded-full h-3 shadow-inner">
        <div
          className={`h-3 rounded-full ${bgcolor} shadow-lg`}
          style={{ width: `${completed}%`, transition: 'width 0.5s ease-in-out' }}
        ></div>
      </div>
    </div>
  );
};

const Progress = () => {
  return (
    <div
      className="p-8 rounded-xl shadow-lg w-full mx-auto"
      style={{
        backgroundImage: 'url("/path/to/your/image.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <h2 className="text-white text-2xl font-bold mb-6 text-center">Yetkinlik İlerlemesi</h2>
      <Download bgcolor="bg-red-500" completed={80} title="Web Geliştirme" />
      <Download bgcolor="bg-green-500" completed={40} title="Network" />
      <Download bgcolor="bg-blue-500" completed={60} title="Backend" />
    </div>
  );
};
export default Progress;