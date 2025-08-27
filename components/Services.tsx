
import React from 'react';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Our Expertise</h2>
          <p className="text-lg text-gray-400 mt-2">We offer a complete suite of services to bring your ideas to life.</p>
          <div className="mt-4 w-24 h-1 bg-indigo-500 mx-auto rounded"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICES.map((service, index) => (
            <div 
              key={index} 
              className="bg-gray-800 p-8 rounded-lg border border-gray-700 transform hover:-translate-y-2 transition-transform duration-300 ease-in-out shadow-lg hover:shadow-indigo-500/20"
            >
              <div className="mb-6">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
              <p className="text-gray-400">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
