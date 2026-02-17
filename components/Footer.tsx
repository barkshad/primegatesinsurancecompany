import React from 'react';
import { Shield, Phone, Mail, MapPin } from 'lucide-react';
import { COMPANY_NAME, IRA_REG_NO, PHONE_NUMBER, EMAIL_ADDRESS, LOCATION } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12 border-t border-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 text-white mb-4">
              <Shield className="w-6 h-6 fill-current text-blue-600" />
              <span className="font-bold text-xl">{COMPANY_NAME}</span>
            </div>
            <p className="text-sm leading-relaxed max-w-sm mb-6">
              Your trusted partner for comprehensive insurance solutions in Kenya. 
              We are dedicated to providing peace of mind through reliable coverage and exceptional service.
            </p>
            <div className="p-4 bg-gray-800 rounded-lg border border-gray-700 inline-block">
              <p className="text-xs text-gray-300 font-medium">
                Regulated by the Insurance Regulatory Authority (IRA)
              </p>
              <p className="text-xs text-gray-500">License No: {IRA_REG_NO}</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#hero" className="hover:text-blue-400 transition-colors">Home</a></li>
              <li><a href="#services" className="hover:text-blue-400 transition-colors">Services</a></li>
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
                <span>{LOCATION}</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-blue-600 shrink-0" />
                <a href={`tel:${PHONE_NUMBER.replace(/\s/g, '')}`} className="hover:text-white transition-colors">{PHONE_NUMBER}</a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-blue-600 shrink-0" />
                <a href={`mailto:${EMAIL_ADDRESS}`} className="hover:text-white transition-colors">{EMAIL_ADDRESS}</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs">
          <p>&copy; {new Date().getFullYear()} {COMPANY_NAME}. All rights reserved.</p>
          <div className="mt-4 md:mt-0 flex space-x-4">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;