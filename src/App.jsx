import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { I18nProvider } from './i18n/i18n';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppCTA from './components/WhatsAppCTA';
import CookieConsent from './components/CookieConsent';
import YildizTechAssistant from './components/YildizTechAssistant';

import Home from './pages/Home';
import About from './pages/About';
import ContactPage from './pages/ContactPage';
import Support from './pages/Support';
import Kvkk from './pages/Kvkk';
import Blog from './pages/Blog';
import ServicesPage from './pages/ServicesPage';

const App = () => {
  return (
    <I18nProvider>
      <BrowserRouter basename={import.meta.env.BASE_URL}>
        <Navbar />
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/support" element={<Support />} />
          <Route path="/kvkk" element={<Kvkk />} />
        </Routes>
        <CookieConsent />
        <WhatsAppCTA />
        <YildizTechAssistant />
        <Footer />
      </BrowserRouter>
    </I18nProvider>
  );
};

export default App;
