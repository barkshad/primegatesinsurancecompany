import React, { useState } from 'react';
import { Shield, Phone, Mail, MapPin, Lock } from 'lucide-react';
import { useContent } from '../contexts/ContentContext';
import AdminPanel from './AdminPanel';

const Footer: React.FC = () => {
  const { content } = useContent();
  const { general } = content;
  const [showAdmin, setShowAdmin] = useState(false);

  return (
    <>
      <footer className="bg-gray-900 text-gray-400 py-12 border-t border-gray-800 relative">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            
            {/* Brand */}
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-2 text-white mb-2">
                <Shield className="w-6 h-6 fill-current text-blue-600" />
                <span className="font-bold text-xl">{general.companyName}</span>
              </div>
              <p className="text-white font-semibold italic text-sm mb-4">"{general.tagline}"</p>
              <p className="text-sm leading-relaxed max-w-sm mb-6">
                Your trusted partner for Medical, Life, Corporate, and Investment insurance solutions in Kenya. 
                We are dedicated to providing peace of mind through reliable coverage.
              </p>
              <div className="p-4 bg-gray-800 rounded-lg border border-gray-700 inline-block">
                <p className="text-xs text-gray-300 font-medium">
                  Regulated by the Insurance Regulatory Authority (IRA)
                </p>
                <p className="text-xs text-gray-500">License No: {general.iraRegNo}</p>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-white font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#hero" className="hover:text-blue-400 transition-colors">Home</a></li>
                <li><a href="#solutions" className="hover:text-blue-400 transition-colors">Services</a></li>
                <li><a href="#why-us" className="hover:text-blue-400 transition-colors">About Us</a></li>
                <li><a href="#quote" className="hover:text-blue-400 transition-colors">Get a Quote</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-white font-semibold mb-4">Contact Us</h4>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-blue-600 shrink-0" />
                  <span>{general.location}</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-blue-600 shrink-0" />
                  <span className="text-white">{general.phoneNumber}</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-blue-600 shrink-0" />
                  <a href={`mailto:${general.email}`} className="hover:text-white transition-colors">{general.email}</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs">
            <p>&copy; {new Date().getFullYear()} {general.companyName}. All rights reserved.</p>
            <div className="mt-4 md:mt-0 flex items-center space-x-4">
              <a href="#" className="hover:text-white">Privacy Policy</a>
              <a href="#" className="hover:text-white">Terms of Service</a>
              <button 
                onClick={() => setShowAdmin(true)}
                className="flex items-center text-gray-700 hover:text-gray-500 transition-colors"
              >
                <Lock className="w-3 h-3 mr-1" />
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
