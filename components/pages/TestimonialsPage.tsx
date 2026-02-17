import React, { useEffect } from 'react';
import PageHeader from '../PageHeader';
import Testimonials from '../Testimonials';

const TestimonialsPage: React.FC = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  return (
    <div>
      <PageHeader 
        title="Client Success Stories" 
        subtitle="Don't just take our word for it. Hear from the hundreds of satisfied clients we serve daily."
      />
      <Testimonials />
    </div>
  );
};

export default TestimonialsPage;