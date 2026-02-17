import React, { useState, useEffect } from 'react';
import { Menu, X, Shield, Phone, Mail, MapPin } from 'lucide-react';
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
            : 'bg-white border-transparent py-4 md:py-5'
        }`}
      >
        <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-start space-x-2 md:space-x-3 group shrink-0">
            <div className="bg-brand-50 p-1.5 md:p-2 rounded-lg text-brand-700 group-hover:bg-brand-100 transition-colors duration-200 mt-1">
               <Shield className="w-6 h-6 md:w-8 md:h-8 fill-brand-900 text-accent-600" />
            </div>
            <div className="flex flex-col justify-center">
              <span className="font-bold text-xl md:text-2xl text-accent-700 leading-none tracking-tight uppercase">
                {content.general.companyName.split(" ")[0]}
              </span>
              <span className="text-[9px] md:text-[10px] font-bold text-brand-900 uppercase tracking-[0.2em] leading-tight mt-0.5">
                Insurance Agency
              </span>
              <span className="text-[10px] md:text-[11px] font-semibold text-accent-600 italic leading-tight mt-0.5">
                {content.general.tagline}
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
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
              className="px-5 py-2.5 bg-accent-600 text-white text-sm font-semibold rounded-lg hover:bg-accent-700 transition-colors duration-200 focus:ring-2 focus:ring-accent-500 focus:ring-offset-2 whitespace-nowrap"
            >
              Get a Quote
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden p-2 text-slate-600 hover:bg-slate-100 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-brand-500"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Nav Overlay */}
        {isOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-b border-slate-200 shadow-xl max-h-[85vh] overflow-y-auto animate-in slide-in-from-top-2 duration-200 flex flex-col">
            <div className="p-4 flex flex-col gap-2">
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

            {/* Mobile Contact Info */}
            <div className="bg-slate-50 p-6 space-y-4 border-t border-slate-100">
               <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Contact Us</h4>
               <a href={`tel:${content.general.phoneNumber}`} className="flex items-center text-slate-600 text-sm">
                 <Phone className="w-4 h-4 mr-3 text-brand-500" />
                 {content.general.phoneNumber}
               </a>
               <a href={`mailto:${content.general.email}`} className="flex items-center text-slate-600 text-sm">
                 <Mail className="w-4 h-4 mr-3 text-brand-500" />
                 {content.general.email}
               </a>
               <div className="flex items-start text-slate-600 text-sm">
                 <MapPin className="w-4 h-4 mr-3 text-brand-500 shrink-0 mt-0.5" />
                 <span>{content.general.location}</span>
               </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;