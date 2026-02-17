import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { useContent } from '../contexts/ContentContext';

const Hero: React.FC = () => {
  const { content } = useContent();
  const { hero, general } = content;

  return (
    <section id="hero" className="relative pt-16 pb-24 lg:pt-32 lg:pb-40 overflow-hidden bg-brand-950">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={hero.backgroundImage}
          alt="Kenyan Family and Professional" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-950 via-brand-950/95 to-brand-900/50"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl">
          <div className="inline-flex items-center space-x-2.5 bg-brand-900/50 rounded-full px-4 py-1.5 mb-8 border border-brand-800 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
            <span className="text-xs font-semibold tracking-wide uppercase text-brand-100">{hero.subHeadline}</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-white tracking-tight">
            {hero.headline}
          </h1>
          
          <p className="text-lg md:text-xl text-slate-300 mb-10 leading-relaxed max-w-2xl font-light">
            {hero.description}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <a 
              href="#quote" 
              className="inline-flex items-center justify-center px-8 py-4 bg-brand-600 text-white font-semibold rounded-lg hover:bg-brand-500 transition-colors duration-200 focus:ring-2 focus:ring-brand-500 focus:ring-offset-2 focus:ring-offset-brand-950"
            >
              Get a Free Quote
              <ArrowRight className="ml-2 w-4 h-4" />
            </a>
            <a 
              href="#solutions" 
              className="inline-flex items-center justify-center px-8 py-4 bg-white/5 border border-white/10 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors duration-200"
            >
              View Our Plans
            </a>
          </div>

          <div className="flex flex-wrap gap-8 pt-8 border-t border-white/10">
             <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                <span className="text-sm font-medium text-slate-300">Fast Claims Processing</span>
             </div>
             <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                <span className="text-sm font-medium text-slate-300">Expert Investment Advice</span>
             </div>
             <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                <span className="text-sm font-medium text-slate-300">Regulated by IRA</span>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;