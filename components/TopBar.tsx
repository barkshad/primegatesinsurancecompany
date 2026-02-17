import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import { PHONE_NUMBER, EMAIL_ADDRESS, LOCATION } from '../constants';

const TopBar: React.FC = () => {
  return (
    <div className="hidden lg:block bg-blue-900 text-gray-300 text-xs py-2 border-b border-blue-800">
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex space-x-6">
          <a href={`mailto:${EMAIL_ADDRESS}`} className="flex items-center hover:text-white transition-colors">
            <Mail className="w-3.5 h-3.5 mr-2 text-red-500" />
            {EMAIL_ADDRESS}
          </a>
          <div className="flex items-center">
            <MapPin className="w-3.5 h-3.5 mr-2 text-red-500" />
            {LOCATION}
          </div>
        </div>
        <div className="flex items-center">
          <span className="mr-2">Need assistance? Call us:</span>
          <a href={`tel:${PHONE_NUMBER.replace(/\s/g, '')}`} className="flex items-center font-bold text-white hover:text-red-400 transition-colors">
            <Phone className="w-3.5 h-3.5 mr-2" />
            {PHONE_NUMBER}
          </a>
        </div>
      </div>
    </div>
  );
};

export default TopBar;