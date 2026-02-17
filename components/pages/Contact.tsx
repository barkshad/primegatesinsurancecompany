import React, { useEffect } from 'react';
import PageHeader from '../PageHeader';
import QuoteForm from '../QuoteForm';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { useContent } from '../../contexts/ContentContext';

const Contact: React.FC = () => {
  const { content } = useContent();
  const { general } = content;

  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div>
      <PageHeader 
        title="Get in Touch" 
        subtitle="Our team is ready to assist you with quotes, claims, and any inquiries you may have."
      />
      
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-200 text-center">
                <div className="w-12 h-12 bg-brand-50 rounded-full flex items-center justify-center mx-auto mb-4 text-brand-600">
                    <Phone className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">Call Us</h3>
                <p className="text-slate-600">{general.phoneNumber}</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-200 text-center">
                <div className="w-12 h-12 bg-brand-50 rounded-full flex items-center justify-center mx-auto mb-4 text-brand-600">
                    <Mail className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">Email Us</h3>
                <p className="text-slate-600">{general.email}</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-200 text-center">
                <div className="w-12 h-12 bg-brand-50 rounded-full flex items-center justify-center mx-auto mb-4 text-brand-600">
                    <MapPin className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">Visit Us</h3>
                <p className="text-slate-600">{general.location}</p>
            </div>
        </div>
      </div>

      <QuoteForm />
    </div>
  );
};

export default Contact;