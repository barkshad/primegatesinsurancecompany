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

  // Helper to handle hash links when on different pages
  const getHref = (href: string) => {
    if (href.startsWith('/#')) {
      // If we are already on home, standard hash jump works (but React Router might need help)
      // Since we use HashRouter in App, the path is actually /#/service/123.
      // A link to /#hero means /#/hero. 
      // If we are on /service/123, clicking /#hero goes to root.
      return href.replace(/^\//, ''); // removes leading slash for HashRouter compatibility if needed, or keeping it depends on router setup.
      // With HashRouter: <Link to="/#hero"> works if we handle scroll.
      // Let's just use standard anchor tags for home sections if we are on home.
    }
    return href;
  };
  
  const isHome = location.pathname === '/';

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    if (href.startsWith('/#') && !isHome) {
      // Let Link handle it
    } else if (href.startsWith('/#') && isHome) {
       // We are on home, just scroll
       const elementId = href.substring(2);
       const el = document.getElementById(elementId);
       if(el) el.scrollIntoView({ behavior: 'smooth' });
    }
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
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="bg-brand-50 p-2 rounded-lg text-brand-700 group-hover:bg-brand-100 transition-colors duration-200">
               <Shield className="w-6 h-6 fill-brand-900 text-accent-600" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-xl text-accent-700 leading-tight tracking-tight uppercase">
                {content.general.companyName.split(" ")[0]}
              </span>
              <span className="text-[10px] font-bold text-brand-800 uppercase tracking-widest leading-none">
                Insurance Agency
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {content.navigation.map((item) => {
               // Logic: if on home, use anchor scroll. If not, use Link to home + hash.
               if (item.href.startsWith('/#')) {
                 if (isHome) {
                   return (
                     <a 
                       key={item.label} 
                       href={item.href.substring(1)} // Remove leading slash -> #hero
                       className="text-sm font-medium text-slate-600 hover:text-brand-700 transition-colors duration-200"
                     >
                       {item.label}
                     </a>
                   );
                 } else {
                   return (
                      <Link
                        key={item.label}
                        to="/"
                        onClick={() => setTimeout(() => {
                           const el = document.getElementById(item.href.substring(2));
                           if(el) el.scrollIntoView({ behavior: 'smooth' });
                        }, 100)}
                        className="text-sm font-medium text-slate-600 hover:text-brand-700 transition-colors duration-200"
                      >
                        {item.label}
                      </Link>
                   );
                 }
               }
               return (
                  <a 
                    key={item.label} 
                    href={item.href}
                    className="text-sm font-medium text-slate-600 hover:text-brand-700 transition-colors duration-200"
                  >
                    {item.label}
                  </a>
               )
            })}
            <a 
              href="#quote"
              onClick={(e) => {
                 if (!isHome) {
                    e.preventDefault();
                    // If not on home, we might need to scroll to bottom of detail page or go home
                    // Current detail page has a quote form at bottom with id="quote", so standard hash works
                 }
              }} 
              className="px-5 py-2.5 bg-accent-600 text-white text-sm font-semibold rounded-lg hover:bg-accent-700 transition-colors duration-200 focus:ring-2 focus:ring-accent-500 focus:ring-offset-2"
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
               <Link
                key={item.label}
                to="/"
                onClick={() => {
                   setIsOpen(false);
                   if (item.href.startsWith('/#')) {
                      setTimeout(() => {
                         const el = document.getElementById(item.href.substring(2));
                         if(el) el.scrollIntoView({ behavior: 'smooth' });
                      }, 100);
                   }
                }}
                className="text-slate-700 font-medium px-4 py-3 rounded-lg hover:bg-slate-50 hover:text-brand-700 transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <div className="h-px bg-slate-100 my-2"></div>
            <a 
              href="#quote" 
              className="w-full text-center px-5 py-3 bg-accent-600 text-white font-semibold rounded-lg hover:bg-accent-700 transition-colors"
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