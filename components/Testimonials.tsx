import React from 'react';
import { useContent } from '../contexts/ContentContext';
import { Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  const { content } = useContent();

  return (
    <section id="testimonials" className="py-24 bg-brand-950 text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-brand-200 font-semibold tracking-wider uppercase text-xs mb-3 block">Testimonials</span>
          <h2 className="text-3xl font-bold text-white tracking-tight">Trusted by Kenyans</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {content.testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white/5 border border-white/10 p-8 rounded-xl flex flex-col">
              <Quote className="w-8 h-8 text-brand-400 mb-6 opacity-80" />
              <p className="text-slate-300 leading-relaxed italic mb-8 flex-grow">"{testimonial.content}"</p>
              
              <div className="flex items-center pt-6 border-t border-white/10">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="w-10 h-10 rounded-full object-cover ring-2 ring-brand-500 mr-3"
                />
                <div>
                  <h4 className="font-bold text-white text-sm">{testimonial.name}</h4>
                  <p className="text-xs text-brand-300 uppercase tracking-wide font-medium">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;