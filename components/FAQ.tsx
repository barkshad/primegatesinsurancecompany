import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { FAQS } from '../constants';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row gap-12">
          {/* Header Section */}
          <div className="md:w-1/3">
            <span className="text-blue-600 font-bold tracking-wider uppercase text-sm">Common Questions</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600 mb-8">
              Can't find what you're looking for? Reach out to our support team directly.
            </p>
            <a 
              href="#quote" 
              className="inline-flex items-center text-blue-700 font-bold hover:text-red-600 transition-colors"
            >
              Contact Support
              <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>

          {/* Accordion Section */}
          <div className="md:w-2/3">
            <div className="space-y-4">
              {FAQS.map((faq, index) => (
                <div 
                  key={index} 
                  className={`bg-white rounded-xl overflow-hidden border transition-all duration-300 ${openIndex === index ? 'border-blue-200 shadow-md' : 'border-gray-200 hover:border-blue-200'}`}
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full flex justify-between items-center p-6 text-left focus:outline-none"
                  >
                    <span className={`font-bold text-lg ${openIndex === index ? 'text-blue-900' : 'text-gray-800'}`}>
                      {faq.question}
                    </span>
                    <div className={`flex-shrink-0 ml-4 p-1 rounded-full ${openIndex === index ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-500'}`}>
                      {openIndex === index ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                    </div>
                  </button>
                  <div 
                    className={`transition-all duration-300 ease-in-out overflow-hidden ${openIndex === index ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'}`}
                  >
                    <div className="p-6 pt-0 text-gray-600 leading-relaxed border-t border-gray-50 bg-gray-50/50">
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