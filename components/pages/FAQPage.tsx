import React, { useEffect } from 'react';
import PageHeader from '../PageHeader';
import FAQ from '../FAQ';
import NeedHelp from '../NeedHelp';

const FAQPage: React.FC = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  return (
    <div>
      <PageHeader 
        title="Frequently Asked Questions" 
        subtitle="Get answers to common questions about premiums, claims, and policy details."
      />
      <FAQ />
      <NeedHelp />
    </div>
  );
};

export default FAQPage;