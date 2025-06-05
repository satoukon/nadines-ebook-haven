
import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import FeaturedBooks from '../components/FeaturedBooks';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';
import EmailNewsletterPopup from '../components/EmailNewsletterPopup';

const Index = () => {
  return (
    <div className="min-h-screen font-inter">
      <Header />
      <main>
        <HeroSection />
        <FeaturedBooks />
        <Testimonials />
      </main>
      <Footer />
      <EmailNewsletterPopup />
    </div>
  );
};

export default Index;
