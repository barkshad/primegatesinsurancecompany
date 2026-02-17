import React from 'react';
import { PARTNERS } from '../constants';

const Partners: React.FC = () => {
  return (
    <section id="partners" className="py-12 bg-white border-b border-gray-100">
      <div className="container mx-auto px-4 md:px-6">
        <p className="text-center text-sm font-semibold text-gray-500 uppercase tracking-widest mb-8">
          We Partner with Kenya's Best Underwriters
        </p>
        
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
          {PARTNERS.map((partner) => (
            <div key={partner.name} className="flex items-center justify-center">
              {/* In a real scenario, these would be <img> tags with actual logos. 
                  Using styled text placeholders for now to keep it copy-pasteable without broken images. */}
              <span className="text-xl md:text-2xl font-bold text-gray-700 hover:text-blue-800 transition-colors cursor-default">
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