import React, { useState, useEffect } from 'react';

const Hero: React.FC = () => {
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="home" className="relative h-screen flex items-center justify-center text-center overflow-hidden">
      <div className="absolute inset-0 bg-gray-900 opacity-60 z-10"></div>
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute z-0 w-auto min-w-full min-h-full max-w-none"
        style={{ transform: `translateY(${offsetY * 0.5}px)` }}
      >
        <source src="https://assets.mixkit.co/videos/preview/mixkit-abstract-video-of-a-dark-sphere-with-flashes-of-light-39893-large.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="relative z-20 container mx-auto px-6 flex flex-col items-center">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-4 animate-fade-in-down animation-delay-200">
          We Design Digital Experiences
          <br />
          That <span className="text-indigo-400">Inspire</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-8 animate-fade-in-up animation-delay-500">
          goMrezha is a creative agency that blends strategy, design, and technology to build beautiful and impactful digital products for brands that dare to be different.
        </p>
        <a 
          href="#work"
          className="inline-block bg-indigo-600 text-white font-bold text-lg py-4 px-10 rounded-lg hover:bg-indigo-700 transition duration-300 transform hover:scale-105 animate-fade-in-up animation-delay-800"
        >
          View Our Work
        </a>

        <div className="mt-20 w-full max-w-4xl animate-fade-in-up animation-delay-1000">
            <div className="flex flex-col md:flex-row justify-around items-center gap-8 md:gap-0 bg-gray-800/30 backdrop-blur-sm p-6 rounded-lg border border-white/10">
                <div className="text-center">
                    <h3 className="text-3xl lg:text-4xl font-bold text-indigo-400">5+</h3>
                    <p className="text-gray-300 mt-1">Years of Experience</p>
                </div>
                <div className="w-px h-12 bg-white/10 hidden md:block"></div>
                <div className="text-center">
                    <h3 className="text-3xl lg:text-4xl font-bold text-indigo-400">185+</h3>
                    <p className="text-gray-300 mt-1">Projects Completed</p>
                </div>
                 <div className="w-px h-12 bg-white/10 hidden md:block"></div>
                <div className="text-center">
                    <h3 className="text-3xl lg:text-4xl font-bold text-indigo-400">99%</h3>
                    <p className="text-gray-300 mt-1">Client Satisfaction</p>
                </div>
            </div>
        </div>

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
        .animation-delay-200 { animation-delay: 0.2s; }
        .animation-delay-500 { animation-delay: 0.5s; }
        .animation-delay-800 { animation-delay: 0.8s; }
        .animation-delay-1000 { animation-delay: 1.0s; }
      `}</style>
    </section>
  );
};

export default Hero;