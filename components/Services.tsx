import React, { useState } from 'react';
import { useContent } from '../contexts/ContentContext';
import { User, Building2, ArrowRight } from 'lucide-react';
import DynamicIcon from './DynamicIcon';

const Services: React.FC = () => {
  const { content } = useContent();
  const [activeTab, setActiveTab] = useState<'personal' | 'business'>('personal');
  const activeServices = activeTab === 'personal' ? content.personalServices : content.businessServices;

  return (
    <section id="solutions" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4 tracking-tight">Tailored Insurance Solutions</h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            Whether you are protecting your family's future or securing your business assets, we have the right plan for you.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-slate-100 p-1.5 rounded-lg border border-slate-200">
            <button
              onClick={() => setActiveTab('personal')}
              className={`flex items-center px-5 py-2.5 rounded-md text-sm font-semibold transition-all duration-200 ${
                activeTab === 'personal' 
                ? 'bg-white text-brand-900 shadow-sm ring-1 ring-slate-200' 
                : 'text-slate-500 hover:text-slate-900'
              }`}
            >
              <User className="w-4 h-4 mr-2" />
              Personal & Family
            </button>
            <button
              onClick={() => setActiveTab('business')}
              className={`flex items-center px-5 py-2.5 rounded-md text-sm font-semibold transition-all duration-200 ${
                activeTab === 'business' 
                ? 'bg-white text-brand-900 shadow-sm ring-1 ring-slate-200' 
                : 'text-slate-500 hover:text-slate-900'
              }`}
            >
              <Building2 className="w-4 h-4 mr-2" />
              Business & Corporate
            </button>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {activeServices.map((service) => (
            <div key={service.id} className="group bg-white rounded-xl border border-slate-200 overflow-hidden hover:border-brand-200 hover:shadow-lg transition-all duration-300 flex flex-col">
              <div className="relative h-48 bg-slate-100 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <div className="w-10 h-10 bg-white/95 backdrop-blur rounded-lg flex items-center justify-center text-brand-600 shadow-sm">
                    <DynamicIcon name={service.icon} className="w-5 h-5" />
                  </div>
                </div>
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-brand-700 transition-colors">
                  {service.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-grow">
                  {service.description}
                </p>
                <div className="pt-4 border-t border-slate-100">
                  <a href="#quote" className="inline-flex items-center text-sm font-semibold text-brand-600 hover:text-brand-700 transition-colors">
                    Request Quote
                    <ArrowRight className="w-4 h-4 ml-1.5 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;