
import React from 'react';
import { Mail, Twitter, Instagram, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="lg:col-span-1 text-center md:text-left">
            <h3 className="font-playfair text-xl md:text-2xl font-bold text-brand-primary mb-4">
              Nadine Paulayu
            </h3>
            <p className="font-inter text-gray-300 leading-relaxed mb-6 text-sm md:text-base">
              Creating digital experiences through the power of words. 
              Join our community of readers and discover your next favorite ebook.
            </p>
            <div className="flex space-x-4 justify-center md:justify-start">
              <a href="#" className="text-gray-400 hover:text-brand-primary transition-colors duration-200">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-brand-primary transition-colors duration-200">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-brand-primary transition-colors duration-200">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-brand-primary transition-colors duration-200">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center md:text-left">
            <h4 className="font-playfair text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="font-inter space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-brand-primary transition-colors duration-200 text-sm md:text-base">Home</a></li>
              <li><a href="#" className="text-gray-300 hover:text-brand-primary transition-colors duration-200 text-sm md:text-base">Shop</a></li>
              <li><a href="#" className="text-gray-300 hover:text-brand-primary transition-colors duration-200 text-sm md:text-base">About</a></li>
              <li><a href="#" className="text-gray-300 hover:text-brand-primary transition-colors duration-200 text-sm md:text-base">Contact</a></li>
            </ul>
          </div>

          {/* Categories */}
          <div className="text-center md:text-left">
            <h4 className="font-playfair text-lg font-semibold mb-4">Categories</h4>
            <ul className="font-inter space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-brand-primary transition-colors duration-200 text-sm md:text-base">Creative Writing</a></li>
              <li><a href="#" className="text-gray-300 hover:text-brand-primary transition-colors duration-200 text-sm md:text-base">Poetry</a></li>
              <li><a href="#" className="text-gray-300 hover:text-brand-primary transition-colors duration-200 text-sm md:text-base">Digital Storytelling</a></li>
              <li><a href="#" className="text-gray-300 hover:text-brand-primary transition-colors duration-200 text-sm md:text-base">Writing Guides</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="text-center md:text-left">
            <h4 className="font-playfair text-lg font-semibold mb-4">Stay Updated</h4>
            <p className="font-inter text-gray-300 text-sm mb-4">
              Subscribe to get notified about new releases and exclusive offers.
            </p>
            <div className="flex flex-col sm:flex-row">
              <input 
                type="email" 
                placeholder="Your email"
                className="flex-1 px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg sm:rounded-l-lg sm:rounded-r-none focus:outline-none focus:border-brand-primary text-white text-sm mb-2 sm:mb-0"
              />
              <button className="bg-brand-primary hover:bg-brand-warm-brown px-4 py-2 rounded-lg sm:rounded-l-none sm:rounded-r-lg transition-colors duration-200 font-semibold text-sm">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 pt-6 md:pt-8 text-center">
          <p className="font-inter text-gray-400 text-xs md:text-sm">
            © 2024 Nadine Paulayu. All rights reserved. | Crafted with love for book enthusiasts.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
