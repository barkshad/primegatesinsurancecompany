import React, { useState, useEffect } from 'react';
import { Menu, X, Shield } from 'lucide-react';
import { useContent } from '../contexts/ContentContext';
import TopBar from './TopBar';

const Header: React.FC = () => {
  const { content } = useContent();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <TopBar />
      <header 
        className={`sticky top-0 left-0 right-0 z-40 w-full transition-all duration-300 border-b ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-md border-slate-200 py-3 shadow-sm' 
            : 'bg-white border-transparent py-5'
        }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          {/* Logo */}
          <a href="#" className="flex items-center space-x-3 group">
            <div className="bg-brand-50 p-2 rounded-lg text-brand-700 group-hover:bg-brand-100 transition-colors duration-200">
               <Shield className="w-6 h-6 fill-brand-700" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-xl text-slate-900 leading-tight tracking-tight">
                {content.general.companyName.split(" ")[0]}
              </span>
              <span className="text-[10px] font-bold text-brand-600 uppercase tracking-widest leading-none">
                Insurance Agency
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {content.navigation.map((item) => (
              <a 
                key={item.label} 
                href={item.href} 
                className="text-sm font-medium text-slate-600 hover:text-brand-700 transition-colors duration-200"
              >
                {item.label}
              </a>
            ))}
            <a 
              href="#quote" 
              className="px-5 py-2.5 bg-brand-700 text-white text-sm font-semibold rounded-lg hover:bg-brand-800 transition-colors duration-200 focus:ring-2 focus:ring-brand-500 focus:ring-offset-2"
            >
              Get a Quote
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 text-slate-600 hover:bg-slate-100 rounded-lg transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Nav Overlay */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-slate-200 shadow-lg p-4 flex flex-col gap-2 animate-in slide-in-from-top-2 duration-200">
            {content.navigation.map((item) => (
              <a 
                key={item.label} 
                href={item.href} 
                className="text-slate-700 font-medium px-4 py-3 rounded-lg hover:bg-slate-50 hover:text-brand-700 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <div className="h-px bg-slate-100 my-2"></div>
            <a 
              href="#quote" 
              className="w-full text-center px-5 py-3 bg-brand-700 text-white font-semibold rounded-lg hover:bg-brand-800 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Get a Quote
            </a>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;