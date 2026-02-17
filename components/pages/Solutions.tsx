import React, { useEffect } from 'react';
import PageHeader from '../PageHeader';
import Services from '../Services';

const Solutions: React.FC = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  return (
    <div>
      <PageHeader 
        title="Our Solutions" 
        subtitle="Comprehensive insurance products tailored for individuals, families, and businesses."
        backgroundImage="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop"
      />
      <div className="-mt-12">
        {/* We use negative margin to pull the content up slightly or just let it flow */}
      </div>
      <Services />
    </div>
  );
};

export default Solutions;