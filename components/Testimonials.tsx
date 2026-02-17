import React from 'react';
import { useContent } from '../contexts/ContentContext';
import { Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  const { content } = useContent();

  return (
    <section id="testimonials" className="py-24 bg-blue-900 text-white relative overflow-hidden">
        {/* Background Patterns */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
            <div className="absolute top-10 left-10 w-32 h-32 rounded-full border-4 border-white"></div>
            <div className="absolute bottom-10 right-10 w-64 h-64 rounded-full bg-white blur-3xl"></div>
        </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="text-blue-300 font-semibold tracking-wider uppercase text-sm">Our Happy Clients</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">Trusted by Kenyans Everywhere</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {content.testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-colors">
              <Quote className="w-10 h-10 text-blue-400 mb-6 opacity-50" />
              <p className="text-blue-50 leading-relaxed italic mb-8">"{testimonial.content}"</p>
              
              <div className="flex items-center">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="w-12 h-12 rounded-full object-cover border-2 border-blue-400 mr-4"
                />
                <div>
                  <h4 className="font-bold text-white">{testimonial.name}</h4>
                  <p className="text-xs text-blue-300 uppercase tracking-wide">{testimonial.role}</p>
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
