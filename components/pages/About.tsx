import React, { useEffect } from 'react';
import PageHeader from '../PageHeader';
import Features from '../Features';
import Stats from '../Stats';
import Partners from '../Partners';
import NeedHelp from '../NeedHelp';

const About: React.FC = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  return (
    <div>
      <PageHeader 
        title="Why Choose Primegates" 
        subtitle="We are more than just an insurance agency; we are your dedicated partners in risk management and financial growth."
        backgroundImage="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2070&auto=format&fit=crop"
      />
      <Features />
      <Stats />
      <div className="py-12 bg-white">
        <Partners />
      </div>
      <NeedHelp />
    </div>
  );
};

export default About;