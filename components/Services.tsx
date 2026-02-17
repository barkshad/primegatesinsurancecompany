import React, { useState } from 'react';
import { useContent } from '../contexts/ContentContext';
import { User, Building2 } from 'lucide-react';
import DynamicIcon from './DynamicIcon';

const Services: React.FC = () => {
  const { content } = useContent();
  const [activeTab, setActiveTab] = useState<'personal' | 'business'>('personal');

  const activeServices = activeTab === 'personal' ? content.personalServices : content.businessServices;

  return (
    <section id="solutions" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Tailored Insurance Solutions</h2>
          <p className="text-gray-600 text-lg">
            Whether you are protecting your family's future or securing your business assets, we have the right plan for you.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-gray-100 p-1 rounded-xl">
            <button
              onClick={() => setActiveTab('personal')}
              className={`flex items-center px-6 py-3 rounded-lg text-sm font-bold transition-all ${
                activeTab === 'personal' 
                ? 'bg-white text-blue-900 shadow-md' 
                : 'text-gray-500 hover:text-gray-900'
              }`}
            >
              <User className="w-4 h-4 mr-2" />
              For You & Family
            </button>
            <button
              onClick={() => setActiveTab('business')}
              className={`flex items-center px-6 py-3 rounded-lg text-sm font-bold transition-all ${
                activeTab === 'business' 
                ? 'bg-white text-blue-900 shadow-md' 
                : 'text-gray-500 hover:text-gray-900'
              }`}
            >
              <Building2 className="w-4 h-4 mr-2" />
              For Business
            </button>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {activeServices.map((service) => {
            return (
              <div key={service.id} className="bg-gray-50 rounded-2xl overflow-hidden border border-gray-100 hover:border-blue-200 hover:shadow-xl transition-all duration-300 group flex flex-col h-full">
                <div className="h-48 overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent z-10"></div>
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute bottom-4 left-4 z-20">
                     <div className="w-10 h-10 bg-white/90 backdrop-blur rounded-lg flex items-center justify-center text-blue-700">
                        <DynamicIcon name={service.icon} className="w-5 h-5" />
                     </div>
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-700 transition-colors">{service.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow">
                    {service.description}
                  </p>
                  <a href="#quote" className="inline-flex items-center text-blue-700 font-bold text-sm hover:text-red-600 transition-colors">
                    Get a Quote
                    <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
