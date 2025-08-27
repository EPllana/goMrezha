import React from 'react';
import { TESTIMONIALS } from '../constants';

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 bg-gray-800/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Words From Our Clients</h2>
          <p className="text-lg text-gray-400 mt-2">Discover why leading brands trust goMrezha.</p>
          <div className="mt-4 w-24 h-1 bg-indigo-500 mx-auto rounded"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {TESTIMONIALS.map((testimonial, index) => (
            <figure key={index} className="bg-gray-800 p-8 rounded-lg border border-gray-700 flex flex-col h-full">
              <div className="flex-grow">
                 <svg className="w-10 h-10 text-indigo-500 mb-4" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
                    <path d="M9.333 22.583c0-3.333-2.667-6-6-6v-5.833h9.167v9.166h-5.833c.833 1.667 1.667 3.333 1.667 5.834v.833h-5.834c3.333 0 6-2.667 6-5.833zM25.333 22.583c0-3.333-2.667-6-6-6v-5.833h9.167v9.166h-5.833c.833 1.667 1.667 3.333 1.667 5.834v.833h-5.834c3.333 0 6-2.667 6-5.833z"></path>
                  </svg>
                <blockquote className="text-gray-300 italic">
                  <p>"{testimonial.quote}"</p>
                </blockquote>
              </div>
              <figcaption className="mt-6 flex items-center">
                <img src={testimonial.imageUrl} alt={testimonial.author} className="w-12 h-12 rounded-full object-cover mr-4" />
                <div>
                  <cite className="font-semibold text-white not-italic">{testimonial.author}</cite>
                  <p className="text-sm text-gray-400">{testimonial.company}</p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;