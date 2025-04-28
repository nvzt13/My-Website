"use client"
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface StatProps {
  value: string;
  title: string;
}

const StatCard: React.FC<StatProps> = ({ value, title }) => {
  return (
    <div className="border-t-4 border-primary pt-4 rounded-lg shadow-lg p-6 bg-white">
      <h3 className="text-4xl font-semibold text-primary mb-2">{value}</h3>
      <p className="text-lg font-medium text-gray-600">{title}</p>
    </div>
  );
};

const DesignAndInnovation = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const stats = [
    { value: '10k+', title: 'Complete project' },
    { value: '800+', title: 'Client review' },
  ];

  return (
    <section className="flex flex-row mx-auto py-16 bg-gray-50 w-full h-152">
     <div className="max-w-7xl mx-auto flex flex-row">
     <div className="w-1/2 m-4">
        <h1 className="text-4xl font-bold mb-6 text-center text-primary">Design and Innovation</h1>
        <p className="text-gray-600 mb-8 text-center">
          Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit auting fugit sed thisnquia consequuntur magni dolores eos designer heresm qui ratione voluptatem sequi nesciuNeque porro quisquam est, cursqui dolorem ipsum quia dolor sit amet consectetur, adipisci velit, sed quia non numquam.
        </p>
        
        <div className="h-px bg-gray-200 my-8"></div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {stats.map((stat, index) => (
            <StatCard key={index} value={stat.value} title={stat.title} />
          ))}
        </div>
        
        <div className="h-px bg-gray-200 my-8"></div>
      </div>
      
      <div className="w-1/2 m-4">
        <h2 className="text-2xl font-bold mb-6 text-center">GET TOUCH ME?</h2>
        <p className="text-gray-600 mb-8 text-center">
          For your car we will do everything advice design in us repairs and maintenance We are the some preferred.
        </p>
        
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <Input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full p-3 rounded-md border-gray-300 focus:ring-2 focus:ring-primary focus:outline-none"
            />
          </div>
          <div>
            <Input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full p-3 rounded-md border-gray-300 focus:ring-2 focus:ring-primary focus:outline-none"
            />
          </div>
          <div>
            <Input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleInputChange}
              className="w-full p-3 rounded-md border-gray-300 focus:ring-2 focus:ring-primary focus:outline-none"
            />
          </div>
          <div className="md:col-span-2">
            <textarea
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleInputChange}
              className="w-full p-3 rounded-md border-gray-300 focus:ring-2 focus:ring-primary focus:outline-none min-h-[100px]"
            />
          </div>
          <div className="md:col-span-2 text-center">
            <Button type="submit" className="px-8 py-3 bg-primary text-white rounded-md shadow-lg hover:bg-primary-dark">
              Submit Now
            </Button>
          </div>
        </form>
      </div>
     </div>
    </section>
  );
};

export default DesignAndInnovation;
