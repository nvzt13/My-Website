import React from 'react';

interface ProgProps {
  completed: number;
  title: string;
  className: string;
}

const Prog: React.FC<ProgProps> = ({ completed, title, className }) => {
  return (
    <div className="bg-card w-full max-w-md p-6 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
      <div className="mb-4 text-dark">
        <h3 className="text-xl font-bold text-center uppercase tracking-wide">
          {title}
        </h3>
        <span className="block text-sm text-center">{`${completed}%`}</span>
      </div>
      <div className="w-full rounded-full h-4 overflow-hidden">
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
    <section className="flex flex-col items-center justify-center bg-background p-8">
    <div>
    <h2 className="text-4xl pt-12 sm:text-5xl font-extrabold text-center mb-8">
      Competency Advances
      </h2>
      
      <hr className="border-b-2 border-border mb-24 w-24 mx-auto" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 w-full">
        <Prog completed={80} title="Web Development" className="bg-gradient-to-r from-purple-400 to-purple-900 "/>
        <Prog completed={40} title="Backend" className="bg-gradient-to-r from-green-300 to-green-700" />
        <Prog completed={50} title="Network" className="bg-gradient-to-r from-red-400 to-red-600"/>
      </div>
    </div>
    </section>
  );
};

export default Progress;