
import React from 'react';
import { Button } from '@/components/ui/button';
import { ShoppingCart, Eye } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface BookCardProps {
  id?: number;
  title: string;
  price: string;
  description: string;
  coverColor: string;
  priceValue?: number;
}

const BookCard: React.FC<BookCardProps> = ({ id, title, price, description, coverColor, priceValue }) => {
  const navigate = useNavigate();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent navigation when clicking Add to Cart
    
    if (!id) return;

    const cartItem = {
      id,
      title,
      price,
      priceValue: priceValue || parseFloat(price.replace('$', ''))
    };

    const existingCart = localStorage.getItem('cart');
    const cart = existingCart ? JSON.parse(existingCart) : [];
    
    const existingItemIndex = cart.findIndex((item: any) => item.id === id);
    
    if (existingItemIndex > -1) {
      cart[existingItemIndex].quantity += 1;
    } else {
      cart.push({ ...cartItem, quantity: 1 });
    }
    
    localStorage.setItem('cart', JSON.stringify(cart));
    
    // Update cart count in header
    window.dispatchEvent(new Event('cartUpdated'));
  };

  const handlePreview = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (id) {
      navigate(`/book/${id}`);
    }
  };

  return (
    <div className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden h-full flex flex-col">
      {/* Book Cover */}
      <div className="relative overflow-hidden">
        <div 
          className={`h-48 sm:h-56 md:h-64 w-full ${coverColor} flex items-center justify-center relative`}
        >
          <div className="text-center text-white p-4 md:p-6">
            <h3 className="font-playfair text-lg sm:text-xl font-bold mb-2 leading-tight">{title}</h3>
            <div className="w-12 md:w-16 h-0.5 bg-white/50 mx-auto"></div>
          </div>
          {/* Hover overlay */}
          <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <Button 
              variant="secondary" 
              size="sm" 
              className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 text-xs md:text-sm"
              onClick={handlePreview}
            >
              <Eye className="h-3 w-3 md:h-4 md:w-4 mr-1 md:mr-2" />
              Preview
            </Button>
          </div>
        </div>
      </div>

      {/* Book Details */}
      <div className="p-4 md:p-6 flex-1 flex flex-col">
        <h3 className="font-playfair text-lg sm:text-xl font-semibold text-gray-900 mb-2 group-hover:text-brand-primary transition-colors duration-200 line-clamp-2">
          {title}
        </h3>
        <p className="font-inter text-gray-600 text-sm mb-4 line-clamp-3 leading-relaxed flex-1">
          {description}
        </p>
        
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <span className="font-playfair text-xl md:text-2xl font-bold text-brand-primary">
            {price}
          </span>
          <Button 
            size="sm" 
            className="bg-brand-primary hover:bg-brand-warm-brown text-white transition-all duration-300 transform hover:scale-105 text-xs md:text-sm w-full sm:w-auto"
            onClick={handleAddToCart}
          >
            <ShoppingCart className="h-3 w-3 md:h-4 md:w-4 mr-1 md:mr-2" />
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
