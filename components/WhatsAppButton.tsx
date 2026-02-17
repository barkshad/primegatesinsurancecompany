import React from 'react';
import { MessageCircle } from 'lucide-react';
import { useContent } from '../contexts/ContentContext';

const WhatsAppButton: React.FC = () => {
  const { content } = useContent();
  const whatsappLink = `https://wa.me/${content.general.whatsappNumber}?text=Hello%20${content.general.companyName},%20I%20would%20like%20to%20get%20a%20quote.`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-emerald-500 rounded-full shadow-lg hover:bg-emerald-600 transition-all duration-200 hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-emerald-200"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-7 h-7 text-white fill-current" />
    </a>
  );
};

export default WhatsAppButton;