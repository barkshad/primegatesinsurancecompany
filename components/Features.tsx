import React from 'react';
import { FEATURES } from '../constants';

const Features: React.FC = () => {
  return (
    <section id="why-us" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Why Trust Primegates?</h2>
            <p className="text-lg text-gray-600 mb-8">
              Navigating insurance policies can be complex. We simplify the process, offering you clarity, speed, and genuine advocacy when you need it most.
            </p>
            
            <div className="space-y-8">
              {FEATURES.map((feature) => {
                const Icon = feature.icon;
                return (
                  <div key={feature.id} className="flex">
                    <div className="flex-shrink-0 mr-4">
                      <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                        <Icon className="w-6 h-6" />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h4>
                      <p className="text-gray-600 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="w-full lg:w-1/2">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=2000&auto=format&fit=crop" 
                alt="Professional Consultant" 
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-8 text-white">
                <p className="font-medium text-lg">"We don't just sell policies; we build long-term relationships based on trust and reliability."</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Features;