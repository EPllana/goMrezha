import React, { useState, useCallback } from 'react';
import { generateWebsiteIdea } from '../services/geminiService';
import type { GeneratedIdea } from '../types';

const IdeaGenerator: React.FC = () => {
    const [businessType, setBusinessType] = useState('');
    const [idea, setIdea] = useState<GeneratedIdea | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    const handleGenerate = useCallback(async () => {
        if (!businessType.trim()) {
            setError('Please enter a business type.');
            return;
        }
        setIsLoading(true);
        setError('');
        setIdea(null);
        try {
            const responseText = await generateWebsiteIdea(businessType);
            const parsedIdea: GeneratedIdea = JSON.parse(responseText);
            setIdea(parsedIdea);
        } catch (err) {
            setError(err instanceof Error ? err.message : 'An unknown error occurred.');
        } finally {
            setIsLoading(false);
        }
    }, [businessType]);

    return (
        <section className="bg-gray-800 p-8 rounded-lg border border-gray-700">
            <h3 className="text-2xl font-bold text-white mb-1">Need Inspiration?</h3>
            <p className="text-gray-400 mb-6">Use our AI Idea Generator to spark your next big thing.</p>
            <div className="flex flex-col sm:flex-row gap-4 mb-4">
                <input
                    type="text"
                    value={businessType}
                    onChange={(e) => setBusinessType(e.target.value)}
                    placeholder="e.g., Artisan Bakery, Tech Startup"
                    className="flex-grow bg-gray-900 border border-gray-600 text-white rounded-md px-4 py-3 focus:ring-2 focus:ring-indigo-500 focus:outline-none transition disabled:opacity-50 disabled:cursor-not-allowed"
                    disabled={isLoading}
                />
                <button
                    onClick={handleGenerate}
                    disabled={isLoading}
                    className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-md transition duration-300 disabled:bg-indigo-800 disabled:cursor-not-allowed flex items-center justify-center"
                >
                    {isLoading ? (
                        <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                    ) : (
                        'Generate Idea'
                    )}
                </button>
            </div>
            {error && <p className="text-red-400 text-sm mt-2">{error}</p>}
            {idea && (
                <div className="mt-6 p-6 bg-gray-900/50 rounded-lg border border-indigo-500/30 animate-fade-in">
                    <h4 className="font-bold text-indigo-400 text-lg">"{idea.tagline}"</h4>
                    <p className="text-gray-300 mt-2">{idea.concept}</p>
                </div>
            )}
            <style>{`.animate-fade-in { animation: fadeIn 0.5s ease-in-out; } @keyframes fadeIn { 0% { opacity: 0; transform: translateY(10px); } 100% { opacity: 1; transform: translateY(0); }}`}</style>
        </section>
    );
};


const ContactForm: React.FC = () => {
    return (
        <section className="bg-gray-800 p-8 rounded-lg border border-gray-700 h-full">
            <h3 className="text-2xl font-bold text-white mb-1">Let's Build Together</h3>
            <p className="text-gray-400 mb-6">Fill out the form or contact us directly.</p>

            <div className="mb-8 space-y-4">
                 <a href="mailto:info.gomrezha@gmail.com" className="flex items-center text-gray-300 hover:text-indigo-400 transition-colors duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-400 mr-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span>info.gomrezha@gmail.com</span>
                </a>
                <a href="tel:+38344595003" className="flex items-center text-gray-300 hover:text-indigo-400 transition-colors duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-400 mr-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span>+383 44 595 003</span>
                </a>
            </div>

            <form>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <input type="text" placeholder="Your Name" className="bg-gray-900 border border-gray-600 text-white rounded-md px-4 py-3 focus:ring-2 focus:ring-indigo-500 focus:outline-none transition" />
                    <input type="email" placeholder="Your Email" className="bg-gray-900 border border-gray-600 text-white rounded-md px-4 py-3 focus:ring-2 focus:ring-indigo-500 focus:outline-none transition" />
                </div>
                <div className="mb-4">
                    <input type="text" placeholder="Subject" className="w-full bg-gray-900 border border-gray-600 text-white rounded-md px-4 py-3 focus:ring-2 focus:ring-indigo-500 focus:outline-none transition" />
                </div>
                <div className="mb-6">
                    <textarea placeholder="Your Message" rows={5} className="w-full bg-gray-900 border border-gray-600 text-white rounded-md px-4 py-3 focus:ring-2 focus:ring-indigo-500 focus:outline-none transition"></textarea>
                </div>
                <button type="submit" className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-md transition duration-300">
                    Send Message
                </button>
            </form>
        </section>
    );
}

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white">Have a Project in Mind?</h2>
            <p className="text-lg text-gray-400 mt-2">Let's turn your idea into a digital reality.</p>
            <div className="mt-4 w-24 h-1 bg-indigo-500 mx-auto rounded"></div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <ContactForm />
            <IdeaGenerator />
        </div>
      </div>
    </section>
  );
};

export default Contact;