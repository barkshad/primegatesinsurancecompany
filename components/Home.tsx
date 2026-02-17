import React from 'react';
import Hero from './Hero';
import Stats from './Stats';
import Partners from './Partners';
import Services from './Services';
import Features from './Features';
import Testimonials from './Testimonials';
import FAQ from './FAQ';
import NeedHelp from './NeedHelp';
import QuoteForm from './QuoteForm';

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <Stats />
      <Partners />
      <Services />
      <Features />
      <Testimonials />
      <FAQ />
      <NeedHelp />
      <QuoteForm />
    </>
  );
};

export default Home;