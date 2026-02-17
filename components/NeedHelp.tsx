import React from 'react';
import { useContent } from '../contexts/ContentContext';
import { ArrowRight } from 'lucide-react';
import DynamicIcon from './DynamicIcon';

const NeedHelp: React.FC = () => {
  const { content } = useContent();

  return (
    <section className="py-20 bg-gray-50 border-t border-gray-100">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-10">
           <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-0">Need Quick Assistance?</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {content.quickLinks.map((link) => {
            return (
              <a key={link.title} href={link.href} className="group bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-md hover:border-blue-300 transition-all flex items-start">
                <div className="bg-blue-50 p-3 rounded-lg text-blue-700 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <DynamicIcon name={link.icon} className="w-6 h-6" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-700 flex items-center">
                    {link.title}
                    <ArrowRight className="w-4 h-4 ml-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </h3>
                  <p className="text-gray-500 text-sm mt-1">{link.description}</p>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default NeedHelp;
