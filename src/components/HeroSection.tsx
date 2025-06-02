
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-br from-brand-cream to-brand-beige py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left animate-fade-in">
            <h2 className="font-playfair text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Welcome to My
              <span className="text-brand-primary block">Digital Library</span>
            </h2>
            <p className="font-inter text-xl text-gray-600 mb-8 leading-relaxed max-w-2xl">
              Discover a curated collection of digital ebooks crafted with passion and expertise. 
              Immerse yourself in stories and knowledge that inspire, educate, and transform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                className="bg-brand-primary hover:bg-brand-warm-brown text-white px-8 py-3 text-lg font-semibold transition-all duration-300 transform hover:scale-105"
              >
                Browse Collection
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white px-8 py-3 text-lg font-semibold transition-all duration-300"
              >
                Learn More
              </Button>
            </div>
          </div>

          {/* Author Image Placeholder */}
          <div className="flex justify-center lg:justify-end animate-slide-in">
            <div className="relative">
              <div className="w-80 h-96 bg-gradient-to-br from-brand-primary to-brand-warm-brown rounded-2xl shadow-2xl flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="w-32 h-32 bg-white/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="font-playfair text-2xl font-bold">NP</span>
                  </div>
                  <p className="font-inter text-sm opacity-90">Nadine's Photo</p>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-brand-primary rounded-full opacity-70"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-brand-warm-brown rounded-full opacity-70"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
