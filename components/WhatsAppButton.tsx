import React from 'react';
import { MessageCircle } from 'lucide-react';
import { useLocation, useParams } from 'react-router-dom';
import { useContent } from '../contexts/ContentContext';

const WhatsAppButton: React.FC = () => {
  const { content } = useContent();
  const location = useLocation();
  const { id } = useParams();

  let message = `Hello ${content.general.companyName}, I would like to get a quote.`;

  if (location.pathname.startsWith('/service/') && id) {
    const service = [...content.personalServices, ...content.businessServices].find(s => s.id === id);
    if (service) {
      message = `Hello ${content.general.companyName}, I am interested in getting a quote for *${service.title}*. Please assist.`;
    }
  }

  const whatsappLink = `https://wa.me/${content.general.whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] rounded-full shadow-lg hover:bg-[#20bd5a] transition-all duration-200 hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-emerald-200"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-7 h-7 text-white fill-current" />
    </a>
  );
};

export default WhatsAppButton;