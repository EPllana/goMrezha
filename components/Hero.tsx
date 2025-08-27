
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center text-center overflow-hidden">
      <div className="absolute inset-0 bg-gray-900 opacity-60 z-10"></div>
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute z-0 w-auto min-w-full min-h-full max-w-none"
      >
        <source src="https://assets.mixkit.co/videos/preview/mixkit-abstract-video-of-a-dark-sphere-with-flashes-of-light-39893-large.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="relative z-20 container mx-auto px-6">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-4 animate-fade-in-down">
          We Design Digital Experiences
          <br />
          That <span className="text-indigo-400">Inspire</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-8 animate-fade-in-up animation-delay-300">
          goMrezha is a creative agency that blends strategy, design, and technology to build beautiful and impactful digital products for brands that dare to be different.
        </p>
        <a 
          href="#work"
          className="inline-block bg-indigo-600 text-white font-bold text-lg py-4 px-10 rounded-lg hover:bg-indigo-700 transition duration-300 transform hover:scale-105 animate-fade-in-up animation-delay-600"
        >
          View Our Work
        </a>
      </div>
      <style>{`
        @keyframes fade-in-down {
          0% { opacity: 0; transform: translateY(-20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes fade-in-up {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-down { animation: fade-in-down 0.8s ease-out forwards; }
        .animate-fade-in-up { animation: fade-in-up 0.8s ease-out forwards; }
        .animation-delay-300 { animation-delay: 0.3s; }
        .animation-delay-600 { animation-delay: 0.6s; }
      `}</style>
    </section>
  );
};

export default Hero;
