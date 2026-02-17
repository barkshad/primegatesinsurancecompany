import React from 'react';
import { PARTNERS } from '../constants';

const Partners: React.FC = () => {
  return (
    <section id="partners" className="py-16 bg-white border-b border-gray-100">
      <div className="container mx-auto px-4 md:px-6">
        <p className="text-center text-sm font-bold text-gray-400 uppercase tracking-widest mb-10">
          Trusted Partners & Underwriters
        </p>
        
        <div className="flex flex-wrap justify-center gap-6">
          {PARTNERS.map((partner) => (
            <div 
              key={partner.name} 
              className="group flex items-center justify-center w-40 h-20 bg-gray-50 rounded-lg border border-gray-100 hover:border-blue-200 hover:shadow-md transition-all duration-300"
            >
              {/* Simulate a logo with text styling */}
              <span className="text-lg font-bold text-gray-400 group-hover:text-blue-900 transition-colors text-center px-2 leading-tight">
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