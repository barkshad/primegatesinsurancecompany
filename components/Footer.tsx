import React, { useState } from 'react';
import { Shield, Phone, Mail, MapPin, Lock } from 'lucide-react';
import { useContent } from '../contexts/ContentContext';
import AdminPanel from './AdminPanel';

const Footer: React.FC = () => {
  const { content } = useContent();
  const { general, footer, navigation } = content;
  const [showAdmin, setShowAdmin] = useState(false);

  return (
    <>
      <footer className="bg-slate-900 text-slate-400 py-16 border-t border-slate-800">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            
            {/* Brand */}
            <div className="col-span-1 md:col-span-2 max-w-sm">
              <div className="flex items-center space-x-2 text-white mb-4">
                <Shield className="w-6 h-6 fill-current text-brand-600" />
                <span className="font-bold text-xl tracking-tight">{general.companyName}</span>
              </div>
              <p className="text-slate-300 font-medium italic text-sm mb-6 opacity-90">"{general.tagline}"</p>
              <p className="text-sm leading-relaxed mb-8 text-slate-400">
                {footer.aboutText}
              </p>
              <div className="px-4 py-3 bg-slate-800/50 rounded-lg border border-slate-700 inline-block">
                <p className="text-xs text-slate-300 font-semibold mb-0.5">
                  Regulated by IRA
                </p>
                <p className="text-xs text-slate-500 font-mono">License No: {general.iraRegNo}</p>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-6">Navigation</h4>
              <ul className="space-y-3 text-sm">
                {navigation.map((item) => (
                  <li key={item.label}>
                    <a href={item.href} className="hover:text-brand-400 transition-colors duration-200">
                      {item.label}
                    </a>
                  </li>
                ))}
                <li><a href="#quote" className="hover:text-brand-400 transition-colors duration-200 font-medium">Get a Quote</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-6">Contact</h4>
              <ul className="space-y-4 text-sm">
                <li className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-brand-500 shrink-0" />
                  <span>{general.location}</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-brand-500 shrink-0" />
                  <span className="text-white font-medium">{general.phoneNumber}</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-brand-500 shrink-0" />
                  <a href={`mailto:${general.email}`} className="hover:text-white transition-colors">{general.email}</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
            <p>&copy; {new Date().getFullYear()} {general.companyName}. {footer.copyrightText}</p>
            <div className="mt-4 md:mt-0 flex items-center space-x-6">
              <a href="#" className="hover:text-slate-300 transition-colors">Privacy</a>
              <a href="#" className="hover:text-slate-300 transition-colors">Terms</a>
              <button 
                onClick={() => setShowAdmin(true)}
                className="flex items-center hover:text-slate-300 transition-colors"
              >
                <Lock className="w-3 h-3 mr-1.5 opacity-70" />
                Admin
              </button>
            </div>
          </div>
        </div>
      </footer>
      <AdminPanel isOpen={showAdmin} onClose={() => setShowAdmin(false)} />
    </>
  );
};

export default Footer;