import React, { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';
import { FormData } from '../types';

const QuoteForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    insuranceType: 'Motor Insurance',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Simulate API call
    setTimeout(() => {
      setSubmitted(true);
    }, 1000);
  };

  return (
    <section id="quote" className="py-20 bg-blue-900 text-white relative overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute -top-20 -right-20 w-64 h-64 bg-blue-800 rounded-full opacity-50 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-800 rounded-full opacity-30 blur-3xl"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row">
          
          <div className="w-full md:w-5/12 bg-gradient-to-br from-blue-600 to-blue-800 p-8 md:p-12 text-white flex flex-col justify-center">
            <h3 className="text-3xl font-bold mb-6">Get Your Free Quote Today</h3>
            <p className="text-blue-100 mb-8 leading-relaxed">
              Fill out the form and one of our expert consultants will get back to you within 24 hours with a personalized insurance plan.
            </p>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span>No obligation quotes</span>
              </li>
              <li className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span>Competitive market rates</span>
              </li>
              <li className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span>Confidential data handling</span>
              </li>
            </ul>
          </div>

          <div className="w-full md:w-7/12 p-8 md:p-12 bg-white">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center space-y-4 py-12">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-8 h-8 text-green-600" />
                </div>
                <h4 className="text-2xl font-bold text-gray-900">Request Sent!</h4>
                <p className="text-gray-600">
                  Thank you, {formData.name}. We have received your details and will contact you shortly on {formData.phone}.
                </p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="mt-4 px-6 py-2 text-blue-700 font-semibold hover:bg-blue-50 rounded transition-colors"
                >
                  Send another request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all text-gray-900"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all text-gray-900"
                    placeholder="+254 700 000 000"
                  />
                </div>

                <div>
                  <label htmlFor="insuranceType" className="block text-sm font-medium text-gray-700 mb-1">Interested In</label>
                  <select
                    id="insuranceType"
                    name="insuranceType"
                    value={formData.insuranceType}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all text-gray-900 bg-white"
                  >
                    <option value="Motor Insurance">Motor Insurance</option>
                    <option value="Medical Cover">Medical Cover</option>
                    <option value="Life Insurance">Life & Education</option>
                    <option value="Business Insurance">SME & Business</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message (Optional)</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={3}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all text-gray-900"
                    placeholder="Tell us more about your needs..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-blue-700 hover:bg-blue-800 text-white font-bold rounded-lg shadow-md transition-colors flex items-center justify-center space-x-2"
                >
                  <span>Request Quote</span>
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