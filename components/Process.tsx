
import React from 'react';
import { PROCESS_STEPS } from '../constants';

const Process: React.FC = () => {
  return (
    <section id="process" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Our Creative Process</h2>
          <p className="text-lg text-gray-400 mt-2">A streamlined journey from concept to creation.</p>
          <div className="mt-4 w-24 h-1 bg-indigo-500 mx-auto rounded"></div>
        </div>
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 -translate-x-1/2 h-full w-0.5 bg-gray-700 hidden md:block" aria-hidden="true"></div>

          <ol className="flex flex-col md:grid md:grid-cols-2 gap-y-12 md:gap-x-16">
            {PROCESS_STEPS.map((step, index) => (
              <li key={step.id} className={`flex items-start gap-6 ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                <div className="relative">
                  <div className="hidden md:flex items-center justify-center w-12 h-12 bg-gray-800 border-2 border-indigo-500 rounded-full text-indigo-400 font-bold text-xl">
                    {step.id}
                  </div>
                   <div className="md:hidden flex items-center justify-center w-12 h-12 bg-indigo-600 rounded-full text-white font-bold text-xl">
                    {step.id}
                  </div>
                </div>
                <div className={`flex-1 ${index % 2 === 1 ? 'md:text-right' : 'md:text-left'}`}>
                  <h3 className="text-2xl font-semibold text-white mb-2">{step.title}</h3>
                  <p className="text-gray-400">{step.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
};

export default Process;