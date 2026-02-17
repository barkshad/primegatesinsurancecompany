import React from 'react';
import { useContent } from '../contexts/ContentContext';
import { ArrowRight } from 'lucide-react';
import DynamicIcon from './DynamicIcon';

const NeedHelp: React.FC = () => {
  const { content } = useContent();

  return (
    <section className="py-24 bg-white border-t border-slate-200">
      <div className="container mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-10 tracking-tight">Need Quick Assistance?</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {content.quickLinks.map((link) => (
            <a 
              key={link.title} 
              href={link.href} 
              className="group bg-slate-50 p-8 rounded-xl border border-slate-200 hover:border-brand-200 hover:shadow-md transition-all duration-200 flex items-start"
            >
              <div className="bg-white p-3 rounded-lg border border-slate-200 text-brand-600 group-hover:bg-brand-600 group-hover:border-brand-600 group-hover:text-white transition-colors duration-200 shadow-sm">
                <DynamicIcon name={link.icon} className="w-6 h-6" />
              </div>
              <div className="ml-5">
                <h3 className="text-lg font-bold text-slate-900 group-hover:text-brand-700 flex items-center transition-colors">
                  {link.title}
                  <ArrowRight className="w-4 h-4 ml-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
                </h3>
                <p className="text-slate-500 text-sm mt-2 leading-relaxed">{link.description}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NeedHelp;