import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import ServiceDetail from './components/ServiceDetail';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import { ContentProvider } from './contexts/ContentContext';

function App() {
  return (
    <ContentProvider>
      <Router>
        <div className="min-h-screen flex flex-col font-sans">
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/service/:id" element={<ServiceDetail />} />
            </Routes>
          </main>
          <Footer />
          <WhatsAppButton />
        </div>
      </Router>
    </ContentProvider>
  );
}

export default App;