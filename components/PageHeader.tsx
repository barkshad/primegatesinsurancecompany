import React from 'react';

interface PageHeaderProps {
  title: string;
  subtitle: string;
  backgroundImage?: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, subtitle, backgroundImage }) => {
  return (
    <div className="relative bg-brand-900 text-white py-20 lg:py-24 overflow-hidden mt-0">
       {/* Background */}
       <div className="absolute inset-0 z-0">
         <img 
            src={backgroundImage || "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2070&auto=format&fit=crop"} 
            alt={title} 
            className="w-full h-full object-cover opacity-20" 
         />
         <div className="absolute inset-0 bg-gradient-to-r from-brand-950 via-brand-900/95 to-brand-900/80"></div>
       </div>

       <div className="container mx-auto px-6 relative z-10 text-center">
         <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">{title}</h1>
         <p className="text-lg text-brand-100 max-w-2xl mx-auto font-light leading-relaxed">{subtitle}</p>
       </div>
    </div>
  );
};

export default PageHeader;