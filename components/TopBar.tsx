import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import { useContent } from '../contexts/ContentContext';

const TopBar: React.FC = () => {
  const { content } = useContent();
  const { general } = content;

  return (
    <div className="hidden lg:block bg-brand-900 text-brand-100 text-xs font-medium border-b border-brand-800">
      <div className="container mx-auto px-6 h-10 flex justify-between items-center">
        <div className="flex space-x-6">
          <a href={`mailto:${general.email}`} className="flex items-center hover:text-white transition-colors duration-200">
            <Mail className="w-3.5 h-3.5 mr-2 opacity-80" />
            {general.email}
          </a>
          <div className="flex items-center text-brand-100/90">
            <MapPin className="w-3.5 h-3.5 mr-2 opacity-80" />
            {general.location}
          </div>
        </div>
        <div className="flex items-center">
          <span className="mr-2 opacity-80">Need assistance?</span>
          <a href={`tel:${general.phoneNumber}`} className="flex items-center font-semibold text-white hover:text-brand-200 transition-colors duration-200">
            <Phone className="w-3.5 h-3.5 mr-2" />
            {general.phoneNumber}
          </a>
        </div>
      </div>
    </div>
  );
};

export default TopBar;