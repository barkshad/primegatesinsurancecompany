import React, { useState, useEffect } from 'react';
import { Menu, X, Shield } from 'lucide-react';
import { NAV_ITEMS } from '../constants';
import { useContent } from '../contexts/ContentContext';
import TopBar from './TopBar';

const Header: React.FC = () => {
  const { content } = useContent();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <TopBar />
      <header className={`sticky top-0 left-0 right-0 z-40 transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg py-3 top-0' : 'bg-white shadow-sm lg:bg-white/95 backdrop-blur-sm py-4 lg:py-5'}`}>
        <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
          {/* Logo */}
          <a href="#" className="flex items-center space-x-2 text-blue-900 group">
            <div className="bg-blue-50 p-1.5 rounded-lg group-hover:bg-blue-100 transition-colors">
               <Shield className="w-7 h-7 fill-blue-700 text-blue-900" />
            </div>
            <span className="font-bold text-xl md:text-2xl leading-none tracking-tight">
              {content.general.companyName.split(" ")[0]}
              <span className="block text-xs font-medium text-red-600 uppercase tracking-wider mt-0.5">Insurance Agency</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            {NAV_ITEMS.map((item) => (
              <a 
                key={item.label} 
                href={item.href} 
                className="text-sm font-semibold text-gray-700 hover:text-blue-900 relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-red-500 after:left-0 after:-bottom-1 after:transition-all hover:after:w-full"
              >
                {item.label}
              </a>
            ))}
            <a 
              href="#quote" 
              className="px-6 py-2.5 bg-red-600 text-white text-sm font-bold rounded-full hover:bg-red-700 transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
            >
              Get a Quote
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 text-gray-700 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Nav Overlay */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b shadow-xl p-4 flex flex-col space-y-4 animate-in slide-in-from-top-2">
            {NAV_ITEMS.map((item) => (
              <a 
                key={item.label} 
                href={item.href} 
                className="text-gray-800 font-medium py-3 border-b border-gray-100 last:border-0 hover:text-red-600"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a 
              href="#quote" 
              className="w-full text-center px-5 py-3 bg-red-600 text-white font-bold rounded-lg hover:bg-red-700"
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
