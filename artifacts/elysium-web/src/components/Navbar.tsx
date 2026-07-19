import React, { useState, useEffect } from 'react';
import { Link } from 'wouter';

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-background/80 backdrop-blur-md border-b border-[rgba(60,255,20,0.1)]' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/">
          <div className="flex items-center gap-2 group cursor-pointer">
            <img
              src="/logo.jpg"
              alt="Elysium Intelligence"
              className="w-8 h-8 object-contain group-hover:drop-shadow-[0_0_8px_rgba(60,255,20,0.8)] transition-all duration-300"
            />
            <span className={`text-xl text-white tracking-tight ${scrolled ? 'glow-green' : ''} transition-all duration-300`}>
              <strong className="font-bold">Elysium</strong><span className="font-normal">Intelligence</span>
            </span>
          </div>
        </Link>
        
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
          <a href="#platform" className="hover:text-white transition-colors hover:glow-green">Platform</a>
          <a href="#solutions" className="hover:text-white transition-colors hover:glow-green">Solutions</a>
          <a href="#how-it-works" className="hover:text-white transition-colors hover:glow-green">How It Works</a>
          <a href="#pricing" className="hover:text-white transition-colors hover:glow-green">Pricing</a>
          <a href="#research" className="hover:text-white transition-colors hover:glow-green">Research</a>
        </div>

        <div>
          <button className="bg-elysium-green text-black px-5 py-2.5 rounded text-sm font-semibold hover:bg-[#32e610] transition-colors shadow-[0_0_15px_rgba(60,255,20,0.4)] hover:shadow-[0_0_25px_rgba(60,255,20,0.6)] cursor-pointer">
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
};