
import React, { useState, useEffect } from 'react';
import { ShoppingCart, User, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  const [cartCount, setCartCount] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const existingCart = localStorage.getItem('cart');
    if (existingCart) {
      const cart = JSON.parse(existingCart);
      const totalItems = cart.reduce((sum: number, item: any) => sum + item.quantity, 0);
      setCartCount(totalItems);
    } else {
      setCartCount(0);
    }

    const updateCartCount = () => {
      const updatedCart = localStorage.getItem('cart');
      if (updatedCart) {
        const cart = JSON.parse(updatedCart);
        const totalItems = cart.reduce((sum: number, item: any) => sum + item.quantity, 0);
        setCartCount(totalItems);
      } else {
        setCartCount(0);
      }
    };

    window.addEventListener('cartUpdated', updateCartCount);

    return () => {
      window.removeEventListener('cartUpdated', updateCartCount);
    };
  }, []);

  return (
    <header className="bg-white shadow-sm border-b border-brand-beige sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo/Brand */}
          <div className="flex items-center space-x-2">
            <h1 
              className="font-playfair text-xl md:text-2xl font-bold text-brand-primary cursor-pointer"
              onClick={() => navigate('/')}
            >
              Nadine Paulayu
            </h1>
          </div>

          {/* Navigation - Desktop */}
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
            <button 
              onClick={() => navigate('/')}
              className="font-inter text-gray-700 hover:text-brand-primary transition-colors duration-200"
            >
              Home
            </button>
            <button 
              onClick={() => navigate('/shop')}
              className="font-inter text-gray-700 hover:text-brand-primary transition-colors duration-200"
            >
              Shop
            </button>
            <button 
              onClick={() => navigate('/publish')}
              className="font-inter text-gray-700 hover:text-brand-primary transition-colors duration-200"
            >
              Publish
            </button>
            <button 
              onClick={() => navigate('/about')}
              className="font-inter text-gray-700 hover:text-brand-primary transition-colors duration-200"
            >
              About
            </button>
            <button 
              onClick={() => navigate('/contact')}
              className="font-inter text-gray-700 hover:text-brand-primary transition-colors duration-200"
            >
              Contact
            </button>
          </nav>

          {/* Action Buttons */}
          <div className="flex items-center space-x-2 md:space-x-3">
            <Button variant="ghost" size="icon" className="hidden sm:flex text-gray-700 hover:text-brand-primary">
              <User className="h-5 w-5" />
            </Button>
            <Button 
              variant="ghost" 
              size="icon" 
              className="text-gray-700 hover:text-brand-primary relative"
              onClick={() => navigate('/checkout')}
            >
              <ShoppingCart className="h-4 w-4 md:h-5 md:w-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 md:-top-2 md:-right-2 bg-brand-primary text-white text-xs rounded-full h-4 w-4 md:h-5 md:w-5 flex items-center justify-center text-[10px] md:text-xs">
                  {cartCount}
                </span>
              )}
            </Button>
            <Button 
              variant="ghost" 
              size="icon" 
              className="md:hidden text-gray-700"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-brand-beige">
            <nav className="flex flex-col space-y-4 pt-4">
              <button 
                onClick={() => {
                  navigate('/');
                  setIsMenuOpen(false);
                }}
                className="font-inter text-gray-700 hover:text-brand-primary transition-colors duration-200 text-left"
              >
                Home
              </button>
              <button 
                onClick={() => {
                  navigate('/shop');
                  setIsMenuOpen(false);
                }}
                className="font-inter text-gray-700 hover:text-brand-primary transition-colors duration-200 text-left"
              >
                Shop
              </button>
              <button 
                onClick={() => {
                  navigate('/publish');
                  setIsMenuOpen(false);
                }}
                className="font-inter text-gray-700 hover:text-brand-primary transition-colors duration-200 text-left"
              >
                Publish
              </button>
              <button 
                onClick={() => {
                  navigate('/about');
                  setIsMenuOpen(false);
                }}
                className="font-inter text-gray-700 hover:text-brand-primary transition-colors duration-200 text-left"
              >
                About
              </button>
              <button 
                onClick={() => {
                  navigate('/contact');
                  setIsMenuOpen(false);
                }}
                className="font-inter text-gray-700 hover:text-brand-primary transition-colors duration-200 text-left"
              >
                Contact
              </button>
              <div className="pt-2">
                <Button variant="ghost" className="text-gray-700 hover:text-brand-primary justify-start p-0">
                  <User className="h-5 w-5 mr-2" />
                  Account
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
