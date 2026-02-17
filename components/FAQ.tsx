import React, { useState } from 'react';
import { Plus, Minus, ArrowRight } from 'lucide-react';
import { useContent } from '../contexts/ContentContext';

const FAQ: React.FC = () => {
  const { content } = useContent();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-slate-50 border-t border-slate-200">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Header Section */}
          <div className="lg:w-1/3">
            <span className="text-brand-600 font-bold tracking-wider uppercase text-xs mb-3 block">Support</span>
            <h2 className="text-3xl font-bold text-slate-900 mb-6 tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-slate-600 mb-8 leading-relaxed">
              Find answers to common questions about our policies, claims process, and coverage options.
            </p>
            <a 
              href="#quote" 
              className="inline-flex items-center text-brand-700 font-semibold hover:text-brand-800 transition-colors"
            >
              Contact Support
              <ArrowRight className="w-4 h-4 ml-2" />
            </a>
          </div>

          {/* Accordion Section */}
          <div className="lg:w-2/3">
            <div className="space-y-4">
              {content.faqs.map((faq, index) => (
                <div 
                  key={index} 
                  className={`bg-white rounded-lg border transition-all duration-200 ${
                    openIndex === index ? 'border-brand-200 ring-1 ring-brand-100 shadow-sm' : 'border-slate-200'
                  }`}
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full flex justify-between items-center p-6 text-left focus:outline-none"
                  >
                    <span className={`font-semibold text-lg ${openIndex === index ? 'text-brand-900' : 'text-slate-800'}`}>
                      {faq.question}
                    </span>
                    <div className={`flex-shrink-0 ml-4 p-1 rounded-full transition-colors ${
                      openIndex === index ? 'bg-brand-50 text-brand-600' : 'bg-slate-50 text-slate-400'
                    }`}>
                      {openIndex === index ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                    </div>
                  </button>
                  <div 
                    className={`transition-all duration-300 ease-in-out overflow-hidden ${
                      openIndex === index ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="p-6 pt-0 text-slate-600 leading-relaxed border-t border-transparent">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;