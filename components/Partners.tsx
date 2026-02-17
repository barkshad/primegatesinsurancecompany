import React from 'react';
import { useContent } from '../contexts/ContentContext';

const Partners: React.FC = () => {
  const { content } = useContent();

  return (
    <section id="partners" className="py-16 bg-slate-50 border-b border-slate-200">
      <div className="container mx-auto px-6">
        <div className="text-center mb-10">
          <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">
            Trusted Partners & Underwriters
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8 items-center opacity-70">
          {content.partners.map((partner) => (
            <div 
              key={partner.name} 
              className="flex items-center justify-center"
            >
              <span className="text-sm font-semibold text-slate-400 hover:text-brand-800 transition-colors duration-300 cursor-default">
                {partner.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;