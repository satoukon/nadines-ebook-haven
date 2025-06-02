
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
    <div className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden">
      {/* Book Cover */}
      <div className="relative overflow-hidden">
        <div 
          className={`h-64 w-full ${coverColor} flex items-center justify-center relative`}
        >
          <div className="text-center text-white p-6">
            <h3 className="font-playfair text-xl font-bold mb-2 leading-tight">{title}</h3>
            <div className="w-16 h-0.5 bg-white/50 mx-auto"></div>
          </div>
          {/* Hover overlay */}
          <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <Button 
              variant="secondary" 
              size="sm" 
              className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
              onClick={handlePreview}
            >
              <Eye className="h-4 w-4 mr-2" />
              Preview
            </Button>
          </div>
        </div>
      </div>

      {/* Book Details */}
      <div className="p-6">
        <h3 className="font-playfair text-xl font-semibold text-gray-900 mb-2 group-hover:text-brand-primary transition-colors duration-200">
          {title}
        </h3>
        <p className="font-inter text-gray-600 text-sm mb-4 line-clamp-2 leading-relaxed">
          {description}
        </p>
        
        <div className="flex items-center justify-between">
          <span className="font-playfair text-2xl font-bold text-brand-primary">
            {price}
          </span>
          <Button 
            size="sm" 
            className="bg-brand-primary hover:bg-brand-warm-brown text-white transition-all duration-300 transform hover:scale-105"
            onClick={handleAddToCart}
          >
            <ShoppingCart className="h-4 w-4 mr-2" />
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
