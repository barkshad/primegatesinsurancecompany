import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import { useContent } from '../contexts/ContentContext';

const TopBar: React.FC = () => {
  const { content } = useContent();
  const { general } = content;

  return (
    <div className="hidden lg:block bg-blue-900 text-gray-300 text-xs py-2 border-b border-blue-800">
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex space-x-6">
          <a href={`mailto:${general.email}`} className="flex items-center hover:text-white transition-colors">
            <Mail className="w-3.5 h-3.5 mr-2 text-red-500" />
            {general.email}
          </a>
          <div className="flex items-center">
            <MapPin className="w-3.5 h-3.5 mr-2 text-red-500" />
            {general.location}
          </div>
        </div>
        <div className="flex items-center">
          <span className="mr-2">Need assistance? Call us:</span>
          <div className="flex items-center font-bold text-white">
            <Phone className="w-3.5 h-3.5 mr-2" />
            {general.phoneNumber}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
