
import React from 'react';
import { ShoppingCart, User, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  return (
    <header className="bg-white shadow-sm border-b border-brand-beige sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo/Brand */}
          <div className="flex items-center space-x-2">
            <h1 className="font-playfair text-2xl font-bold text-brand-primary">
              Nadine Paulayu
            </h1>
          </div>

          {/* Navigation - Desktop */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="font-inter text-gray-700 hover:text-brand-primary transition-colors duration-200">
              Home
            </a>
            <a href="#shop" className="font-inter text-gray-700 hover:text-brand-primary transition-colors duration-200">
              Shop
            </a>
            <a href="#about" className="font-inter text-gray-700 hover:text-brand-primary transition-colors duration-200">
              About
            </a>
            <a href="#contact" className="font-inter text-gray-700 hover:text-brand-primary transition-colors duration-200">
              Contact
            </a>
          </nav>

          {/* Action Buttons */}
          <div className="flex items-center space-x-3">
            <Button variant="ghost" size="icon" className="text-gray-700 hover:text-brand-primary">
              <User className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-gray-700 hover:text-brand-primary relative">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -top-2 -right-2 bg-brand-primary text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                0
              </span>
            </Button>
            <Button variant="ghost" size="icon" className="md:hidden text-gray-700">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
