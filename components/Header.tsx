
import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 10;
            if (isScrolled !== scrolled) {
                setScrolled(isScrolled);
            }
        };

        document.addEventListener('scroll', handleScroll);
        return () => {
            document.removeEventListener('scroll', handleScroll);
        };
    }, [scrolled]);

    const navLinks = [
        { name: 'Services', href: '#services' },
        { name: 'Work', href: '#work' },
        { name: 'Process', href: '#process' },
        { name: 'Testimonials', href: '#testimonials' },
    ];

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-gray-900/80 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                <a href="#home" className="text-2xl font-bold text-white tracking-wider">
                    goMREZHA
                    <span className="text-indigo-400">.</span>
                </a>
                <nav className="hidden md:flex items-center space-x-8">
                    {navLinks.map((link) => (
                        <a key={link.name} href={link.href} className="text-gray-300 hover:text-indigo-400 transition duration-300 font-medium">
                            {link.name}
                        </a>
                    ))}
                </nav>
                <a href="#contact" className="hidden md:inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-6 rounded-md transition duration-300 transform hover:scale-105">
                    Let's Talk
                </a>
                <button className="md:hidden text-white focus:outline-none">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                    </svg>
                </button>
            </div>
        </header>
    );
};

export default Header;
