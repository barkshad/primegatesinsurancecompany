import React from 'react';
import { useContent } from '../contexts/ContentContext';
import DynamicIcon from './DynamicIcon';

const Features: React.FC = () => {
  const { content } = useContent();

  return (
    <section id="why-us" className="py-24 bg-slate-50 border-t border-slate-200">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl font-bold text-slate-900 mb-6 tracking-tight">Why Choose Primegates?</h2>
            <p className="text-lg text-slate-600 mb-10 leading-relaxed">
              We simplify insurance by offering clarity, speed, and genuine advocacy. Our focus is on building long-term relationships through trust.
            </p>
            
            <div className="space-y-8">
              {content.features.map((feature) => (
                <div key={feature.id} className="flex gap-5">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-white rounded-lg border border-slate-200 flex items-center justify-center text-brand-600 shadow-sm">
                      <DynamicIcon name={feature.icon} className="w-6 h-6" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-slate-900 mb-2">{feature.title}</h4>
                    <p className="text-slate-600 leading-relaxed text-sm">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="w-full lg:w-1/2">
            <div className="relative rounded-2xl overflow-hidden shadow-xl ring-1 ring-black/5">
              <img 
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=2000&auto=format&fit=crop" 
                alt="Professional Consultant" 
                className="w-full h-full object-cover aspect-[4/3]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent">
                <div className="absolute bottom-0 left-0 p-8">
                  <p className="text-white font-medium text-lg italic border-l-4 border-brand-500 pl-4">
                    "We don't just sell policies; we build long-term relationships based on trust."
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Features;