import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Partners from './components/Partners';
import Services from './components/Services';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import NeedHelp from './components/NeedHelp';
import FAQ from './components/FAQ';
import QuoteForm from './components/QuoteForm';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import { ContentProvider } from './contexts/ContentContext';

function App() {
  return (
    <ContentProvider>
      <div className="min-h-screen flex flex-col font-sans">
        <Header />
        <main className="flex-grow">
          <Hero />
          <Stats />
          <Partners />
          <Services />
          <Features />
          <Testimonials />
          <FAQ />
          <NeedHelp />
          <QuoteForm />
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </ContentProvider>
  );
}

export default App;
