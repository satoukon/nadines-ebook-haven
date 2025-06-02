
import React from 'react';
import { Mail, Twitter, Instagram, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="col-span-2 lg:col-span-1">
            <h3 className="font-playfair text-2xl font-bold text-brand-primary mb-4">
              Nadine Paulayu
            </h3>
            <p className="font-inter text-gray-300 leading-relaxed mb-6">
              Creating digital experiences through the power of words. 
              Join our community of readers and discover your next favorite ebook.
            </p>
            <div className="flex space-x-4">
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
          <div>
            <h4 className="font-playfair text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="font-inter space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-brand-primary transition-colors duration-200">Home</a></li>
              <li><a href="#" className="text-gray-300 hover:text-brand-primary transition-colors duration-200">Shop</a></li>
              <li><a href="#" className="text-gray-300 hover:text-brand-primary transition-colors duration-200">About</a></li>
              <li><a href="#" className="text-gray-300 hover:text-brand-primary transition-colors duration-200">Contact</a></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-playfair text-lg font-semibold mb-4">Categories</h4>
            <ul className="font-inter space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-brand-primary transition-colors duration-200">Creative Writing</a></li>
              <li><a href="#" className="text-gray-300 hover:text-brand-primary transition-colors duration-200">Poetry</a></li>
              <li><a href="#" className="text-gray-300 hover:text-brand-primary transition-colors duration-200">Digital Storytelling</a></li>
              <li><a href="#" className="text-gray-300 hover:text-brand-primary transition-colors duration-200">Writing Guides</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-playfair text-lg font-semibold mb-4">Stay Updated</h4>
            <p className="font-inter text-gray-300 text-sm mb-4">
              Subscribe to get notified about new releases and exclusive offers.
            </p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Your email"
                className="flex-1 px-3 py-2 bg-gray-800 border border-gray-700 rounded-l-lg focus:outline-none focus:border-brand-primary text-white"
              />
              <button className="bg-brand-primary hover:bg-brand-warm-brown px-4 py-2 rounded-r-lg transition-colors duration-200 font-semibold">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="font-inter text-gray-400">
            © 2024 Nadine Paulayu. All rights reserved. | Crafted with love for book enthusiasts.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
