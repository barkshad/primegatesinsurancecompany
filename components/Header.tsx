import React, { useState, useEffect } from 'react';
import { Menu, X, Shield } from 'lucide-react';
import { useContent } from '../contexts/ContentContext';
import { Link, useLocation } from 'react-router-dom';
import TopBar from './TopBar';

const Header: React.FC = () => {
  const { content } = useContent();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Check if link is active
  const isActive = (path: string) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

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
          <Link to="/" className="flex items-start space-x-3 group">
            <div className="bg-brand-50 p-2 rounded-lg text-brand-700 group-hover:bg-brand-100 transition-colors duration-200 mt-1">
               <Shield className="w-8 h-8 fill-brand-900 text-accent-600" />
            </div>
            <div className="flex flex-col justify-center">
              <span className="font-bold text-2xl text-accent-700 leading-none tracking-tight uppercase">
                {content.general.companyName.split(" ")[0]}
              </span>
              <span className="text-[10px] font-bold text-brand-900 uppercase tracking-[0.2em] leading-tight">
                Insurance Agency
              </span>
              <span className="text-[11px] font-semibold text-accent-600 italic leading-tight mt-0.5">
                {content.general.tagline}
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {content.navigation.map((item) => (
              <Link
                key={item.label} 
                to={item.href}
                className={`text-sm font-medium transition-colors duration-200 ${
                  isActive(item.href) ? 'text-brand-700 font-bold' : 'text-slate-600 hover:text-brand-700'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link 
              to="/contact" 
              className="px-5 py-2.5 bg-accent-600 text-white text-sm font-semibold rounded-lg hover:bg-accent-700 transition-colors duration-200 focus:ring-2 focus:ring-accent-500 focus:ring-offset-2"
            >
              Get a Quote
            </Link>
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
               <Link
                key={item.label}
                to={item.href}
                onClick={() => setIsOpen(false)}
                className={`text-slate-700 font-medium px-4 py-3 rounded-lg hover:bg-slate-50 hover:text-brand-700 transition-colors ${
                  isActive(item.href) ? 'bg-slate-50 text-brand-700' : ''
                }`}
              >
                {item.label}
              </Link>
            ))}
            <div className="h-px bg-slate-100 my-2"></div>
            <Link 
              to="/contact" 
              className="w-full text-center px-5 py-3 bg-accent-600 text-white font-semibold rounded-lg hover:bg-accent-700 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Get a Quote
            </Link>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;