
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section className="bg-gradient-to-br from-brand-cream to-brand-beige py-12 md:py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left animate-fade-in order-2 lg:order-1">
            <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 md:mb-6 leading-tight">
              Welcome to My
              <span className="text-brand-primary block">Digital Library</span>
            </h2>
            <p className="font-inter text-base md:text-lg lg:text-xl text-gray-600 mb-6 md:mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Discover a curated collection of digital ebooks crafted with passion and expertise. 
              Immerse yourself in stories and knowledge that inspire, educate, and transform.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                className="text-white px-6 md:px-8 py-2 md:py-3 text-base md:text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:opacity-90"
                style={{ backgroundColor: '#E6B7B0' }}
                onClick={() => navigate('/shop')}
              >
                Shop Now
                <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-2 hover:text-white px-6 md:px-8 py-2 md:py-3 text-base md:text-lg font-semibold transition-all duration-300"
                style={{ 
                  borderColor: '#E6B7B0', 
                  color: '#E6B7B0',
                  backgroundColor: 'transparent'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#E6B7B0';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                }}
              >
                Learn More
              </Button>
            </div>
          </div>

          {/* Author Image Placeholder */}
          <div className="flex justify-center lg:justify-end animate-slide-in order-1 lg:order-2">
            <div className="relative">
              <div className="w-64 h-80 sm:w-72 sm:h-90 md:w-80 md:h-96 bg-gradient-to-br from-brand-primary to-brand-warm-brown rounded-2xl shadow-2xl flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 bg-white/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="font-playfair text-xl sm:text-2xl font-bold">NP</span>
                  </div>
                  <p className="font-inter text-sm opacity-90">Nadine's Photo</p>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-2 -right-2 md:-top-4 md:-right-4 w-6 h-6 md:w-8 md:h-8 rounded-full opacity-70" style={{ backgroundColor: '#E6B7B0' }}></div>
              <div className="absolute -bottom-2 -left-2 md:-bottom-4 md:-left-4 w-4 h-4 md:w-6 md:h-6 rounded-full opacity-70" style={{ backgroundColor: '#F9C5D1' }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
