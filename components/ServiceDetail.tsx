import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, CheckCircle2, Shield, FileCheck, Phone } from 'lucide-react';
import { useContent } from '../contexts/ContentContext';
import DynamicIcon from './DynamicIcon';
import QuoteForm from './QuoteForm';

const ServiceDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { content } = useContent();
  const navigate = useNavigate();

  // Find service in either array
  const service = [...content.personalServices, ...content.businessServices].find(s => s.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Service Not Found</h2>
          <Link to="/" className="text-brand-600 hover:underline">Return Home</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-slate-50 min-h-screen pt-20">
      {/* Hero Header */}
      <div className="bg-brand-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-brand-950 via-brand-900/95 to-transparent z-10"></div>
        
        <div className="container mx-auto px-6 py-16 md:py-24 relative z-20">
          <button 
            onClick={() => navigate('/')} 
            className="flex items-center text-brand-200 hover:text-white mb-8 transition-colors text-sm font-medium"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to All Services
          </button>
          
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-accent-600 p-3 rounded-xl shadow-lg">
              <DynamicIcon name={service.icon} className="w-8 h-8 text-white" />
            </div>
            <span className="text-accent-400 font-bold tracking-wider uppercase text-xs">Premium Coverage</span>
          </div>

          <h1 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">{service.title}</h1>
          <p className="text-lg md:text-xl text-brand-100 max-w-2xl leading-relaxed opacity-90">
            {service.description}
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Main Info */}
          <div className="lg:col-span-2 space-y-12">
            
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 md:p-10">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">About This Service</h2>
              <div className="prose prose-slate max-w-none text-slate-600 leading-relaxed">
                <p>{service.longDescription || service.description}</p>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 md:p-10">
              <h3 className="text-xl font-bold text-slate-900 mb-6">Key Benefits</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {(service.benefits || ['Comprehensive Protection', 'Competitive Rates', 'Fast Claims Settlement']).map((benefit, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-4 bg-slate-50 rounded-xl border border-slate-100">
                    <CheckCircle2 className="w-5 h-5 text-accent-600 shrink-0 mt-0.5" />
                    <span className="text-slate-700 font-medium text-sm">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-8">
            <div className="bg-white rounded-2xl shadow-lg border border-slate-100 p-8 sticky top-24">
              <h3 className="text-lg font-bold text-slate-900 mb-6">Why Choose Us?</h3>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-center gap-4">
                  <div className="bg-brand-50 p-2.5 rounded-lg text-brand-600">
                    <Shield className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 text-sm">IRA Regulated</h4>
                    <p className="text-xs text-slate-500">Licensed & Trusted</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-brand-50 p-2.5 rounded-lg text-brand-600">
                    <FileCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 text-sm">Fast Claims</h4>
                    <p className="text-xs text-slate-500">98% Settlement Rate</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-brand-50 p-2.5 rounded-lg text-brand-600">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 text-sm">24/7 Support</h4>
                    <p className="text-xs text-slate-500">Always here for you</p>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-slate-100">
                <p className="text-sm text-slate-500 mb-4 text-center">Ready to get covered?</p>
                <a 
                  href="#quote" 
                  className="block w-full py-3.5 bg-accent-600 hover:bg-accent-700 text-white font-bold rounded-lg text-center transition-colors shadow-sm"
                >
                  Get a Free Quote
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Quote Form Section */}
      <div id="quote">
        <QuoteForm />
      </div>
    </div>
  );
};

export default ServiceDetail;