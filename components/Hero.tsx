import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { WHATSAPP_NUMBER, TAGLINE } from '../constants';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative pt-12 pb-20 lg:pt-32 lg:pb-32 overflow-hidden bg-blue-900">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2070&auto=format&fit=crop" 
          alt="Kenyan Family and Professional" 
          className="w-full h-full object-cover opacity-30 mix-blend-overlay"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900 via-blue-900/90 to-blue-900/40"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 flex flex-col md:flex-row items-center">
        <div className="w-full md:w-2/3 lg:w-1/2 text-white">
          <div className="inline-flex items-center space-x-2 bg-blue-800/50 rounded-full px-4 py-1.5 mb-6 border border-blue-700 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
            <span className="text-xs font-semibold tracking-wide uppercase text-blue-100">IRA Regulated • Reg No: 11000506</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
            Live Free. <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-white">We've Got You Covered.</span>
          </h1>

          <div className="mb-6">
            <span className="inline-block bg-white text-blue-900 font-bold px-3 py-1 rounded text-sm tracking-widest uppercase transform -skew-x-12">
              "{TAGLINE}"
            </span>
          </div>
          
          <p className="text-lg md:text-xl text-blue-100 mb-8 leading-relaxed max-w-lg">
            Experience peace of mind with Primegates. We simplify insurance for Medical, Life, Corporate, and Investments so you can focus on what matters most.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#quote" 
              className="inline-flex items-center justify-center px-8 py-4 bg-red-600 text-white font-bold rounded-lg hover:bg-red-700 transition-all shadow-lg shadow-red-900/20 transform hover:-translate-y-1"
            >
              Get a Free Quote
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
            <a 
              href="#solutions" 
              className="inline-flex items-center justify-center px-8 py-4 bg-transparent border border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-900 transition-all"
            >
              View Our Plans
            </a>
          </div>

          <div className="mt-10 flex items-center space-x-6 text-sm font-medium text-blue-200">
            <div className="flex items-center">
              <CheckCircle2 className="w-5 h-5 mr-2 text-green-400" />
              <span>Fast Claims</span>
            </div>
            <div className="flex items-center">
              <CheckCircle2 className="w-5 h-5 mr-2 text-green-400" />
              <span>Investment Advice</span>
            </div>
          </div>
        </div>
        
        {/* Abstract shape or image for desktop visual balance */}
        <div className="hidden lg:block w-1/2 relative">
             {/* Could add a floating card element here if desired */}
        </div>
      </div>
    </section>
  );
};

export default Hero;