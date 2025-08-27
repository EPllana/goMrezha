import React from 'react';
import { PROJECTS } from '../constants';

const Portfolio: React.FC = () => {
  return (
    <section id="work" className="py-20 bg-gray-800/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Our Recent Work</h2>
          <p className="text-lg text-gray-400 mt-2">A glimpse into the digital masterpieces we've crafted.</p>
          <div className="mt-4 w-24 h-1 bg-indigo-500 mx-auto rounded"></div>
        </div>
        <div className="columns-1 md:columns-2 lg:columns-3 gap-8">
          {PROJECTS.map((project) => (
            <article key={project.id} className="group relative overflow-hidden rounded-lg shadow-lg cursor-pointer break-inside-avoid mb-8">
              <img src={project.imageUrl} alt={project.title} className="w-full h-auto transform group-hover:scale-110 transition-transform duration-500" />
              <div className="absolute inset-0 bg-black bg-opacity-50 group-hover:bg-opacity-70 transition-all duration-300 flex flex-col justify-end p-6">
                <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                    <p className="text-sm font-semibold text-indigo-400 mb-1">{project.category}</p>
                    <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                    <p className="text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300 h-0 group-hover:h-auto">{project.description}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;