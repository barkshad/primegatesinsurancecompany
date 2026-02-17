import React, { useState } from 'react';
import { Send, CheckCircle2 } from 'lucide-react';
import { FormData } from '../types';
import { useContent } from '../contexts/ContentContext';

const QuoteForm: React.FC = () => {
  const { content } = useContent();
  const { quoteSection } = content;
  
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    insuranceType: 'Motor Insurance (Private)',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTimeout(() => setSubmitted(true), 1000);
  };

  return (
    <section id="quote" className="py-24 bg-white border-t border-slate-200">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-xl shadow-slate-200/50 overflow-hidden border border-slate-100 flex flex-col md:flex-row">
          
          <div className="w-full md:w-5/12 bg-brand-900 p-10 lg:p-12 text-white">
            <h3 className="text-2xl font-bold mb-6 tracking-tight">{quoteSection.title}</h3>
            <p className="text-brand-100 mb-10 leading-relaxed opacity-90">
              {quoteSection.description}
            </p>
            <ul className="space-y-5">
              {quoteSection.benefits.map((benefit, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <span className="text-sm font-medium">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="w-full md:w-7/12 p-10 lg:p-12 bg-white">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center space-y-4 py-8">
                <div className="w-16 h-16 bg-emerald-50 rounded-full flex items-center justify-center mb-2">
                  <CheckCircle2 className="w-8 h-8 text-emerald-600" />
                </div>
                <h4 className="text-2xl font-bold text-slate-900">Request Received</h4>
                <p className="text-slate-600 max-w-sm">
                  Thank you, {formData.name}. Our team will contact you shortly on {formData.phone}.
                </p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="mt-6 px-6 py-2.5 text-brand-700 font-semibold bg-brand-50 hover:bg-brand-100 rounded-lg transition-colors text-sm"
                >
                  Submit Another Request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-1.5">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all text-slate-900 bg-slate-50 focus:bg-white placeholder:text-slate-400"
                    placeholder="e.g. John Kamau"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-slate-700 mb-1.5">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all text-slate-900 bg-slate-50 focus:bg-white placeholder:text-slate-400"
                    placeholder="07XX XXX XXX"
                  />
                </div>

                <div>
                  <label htmlFor="insuranceType" className="block text-sm font-semibold text-slate-700 mb-1.5">Insurance Type</label>
                  <select
                    id="insuranceType"
                    name="insuranceType"
                    value={formData.insuranceType}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all text-slate-900 bg-slate-50 focus:bg-white"
                  >
                    <option value="Motor Private">Motor Insurance (Private)</option>
                    <option value="Motor Commercial / PSV">Motor Commercial / PSV</option>
                    <option value="Medical Cover">Medical Cover (Individual/Family)</option>
                    <option value="Corporate Medical">Corporate Medical</option>
                    <option value="Life & Education">Life & Education Policies</option>
                    <option value="SME / Business">SME / Business</option>
                    <option value="WIBA">WIBA / Employee Liability</option>
                    <option value="Money Market / Investment">Investments (MMF)</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-1.5">Message (Optional)</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={3}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all text-slate-900 bg-slate-50 focus:bg-white placeholder:text-slate-400 resize-none"
                    placeholder="Tell us about your requirements..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 bg-brand-600 hover:bg-brand-700 text-white font-bold rounded-lg shadow-sm transition-colors flex items-center justify-center space-x-2 focus:ring-2 focus:ring-brand-500 focus:ring-offset-2"
                >
                  <span>Request Free Quote</span>
                  <Send className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuoteForm;