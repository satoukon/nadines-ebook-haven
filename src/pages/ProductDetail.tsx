
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ShoppingCart, Eye, Star } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [showPreview, setShowPreview] = useState(false);

  // Mock book data - in a real app, this would come from an API
  const book = {
    id: parseInt(id || '1'),
    title: "The Art of Digital Storytelling",
    price: "$24.99",
    priceValue: 24.99,
    description: "Master the craft of compelling digital narratives with proven techniques and insider insights. This comprehensive guide takes you through the fundamentals of storytelling in the digital age, from understanding your audience to crafting compelling narratives that resonate across platforms.",
    coverColor: "bg-gradient-to-br from-purple-600 to-purple-800",
    category: "Writing",
    pages: 250,
    format: "PDF, EPUB, MOBI",
    language: "English",
    publishDate: "2024",
    preview: "Chapter 1: The Digital Revolution in Storytelling\n\nIn today's interconnected world, storytelling has evolved beyond traditional boundaries. Digital platforms have created new opportunities for writers to connect with audiences in unprecedented ways...",
    features: [
      "Comprehensive writing techniques",
      "Real-world examples and case studies",
      "Interactive exercises and prompts",
      "Bonus templates and resources"
    ]
  };

  const reviews = [
    {
      id: 1,
      name: "Sarah Johnson",
      rating: 5,
      comment: "Absolutely brilliant! This book transformed my approach to digital storytelling. Highly recommended for any writer.",
      date: "2024-01-15"
    },
    {
      id: 2,
      name: "Michael Chen",
      rating: 5,
      comment: "Clear, practical advice with excellent examples. Worth every penny!",
      date: "2024-01-10"
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      rating: 4,
      comment: "Great insights into modern storytelling. The exercises are particularly helpful.",
      date: "2024-01-05"
    }
  ];

  const addToCart = () => {
    // Get existing cart from localStorage
    const existingCart = JSON.parse(localStorage.getItem('cart') || '[]');
    
    // Check if book is already in cart
    const existingItem = existingCart.find((item: any) => item.id === book.id);
    
    if (existingItem) {
      toast({
        title: "Already in cart",
        description: "This book is already in your cart.",
      });
      return;
    }

    // Add book to cart
    const cartItem = {
      id: book.id,
      title: book.title,
      price: book.price,
      priceValue: book.priceValue,
      coverColor: book.coverColor
    };
    
    const updatedCart = [...existingCart, cartItem];
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    
    toast({
      title: "Added to cart",
      description: `${book.title} has been added to your cart.`,
    });
  };

  const buyNow = () => {
    addToCart();
    navigate('/checkout');
  };

  return (
    <div className="min-h-screen font-inter">
      <Header />
      <main className="py-8">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Book Cover and Preview */}
            <div>
              <div className={`${book.coverColor} rounded-lg p-8 mb-6 aspect-[3/4] flex items-center justify-center`}>
                <div className="text-center text-white">
                  <h1 className="font-playfair text-3xl font-bold mb-4 leading-tight">{book.title}</h1>
                  <div className="w-24 h-0.5 bg-white/50 mx-auto"></div>
                </div>
              </div>
              
              <Button 
                onClick={() => setShowPreview(!showPreview)}
                variant="outline" 
                className="w-full mb-4"
              >
                <Eye className="h-4 w-4 mr-2" />
                {showPreview ? 'Hide Preview' : 'Preview Sample'}
              </Button>

              {showPreview && (
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="font-semibold mb-3">Sample Preview</h3>
                  <div className="text-sm text-gray-700 whitespace-pre-line">
                    {book.preview}
                  </div>
                </div>
              )}
            </div>

            {/* Book Details */}
            <div>
              <div className="mb-6">
                <Badge variant="secondary" className="mb-2">{book.category}</Badge>
                <h1 className="font-playfair text-4xl font-bold text-gray-900 mb-4">{book.title}</h1>
                <p className="text-2xl font-bold text-brand-primary mb-6">{book.price}</p>
              </div>

              <div className="mb-8">
                <h2 className="font-semibold text-lg mb-3">Description</h2>
                <p className="text-gray-700 leading-relaxed">{book.description}</p>
              </div>

              <div className="mb-8">
                <h2 className="font-semibold text-lg mb-3">What You'll Get</h2>
                <ul className="space-y-2">
                  {book.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-700">
                      <div className="w-2 h-2 bg-brand-primary rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-8 p-4 bg-gray-50 rounded-lg">
                <div>
                  <span className="text-sm text-gray-600">Pages:</span>
                  <p className="font-semibold">{book.pages}</p>
                </div>
                <div>
                  <span className="text-sm text-gray-600">Format:</span>
                  <p className="font-semibold">{book.format}</p>
                </div>
                <div>
                  <span className="text-sm text-gray-600">Language:</span>
                  <p className="font-semibold">{book.language}</p>
                </div>
                <div>
                  <span className="text-sm text-gray-600">Published:</span>
                  <p className="font-semibold">{book.publishDate}</p>
                </div>
              </div>

              <div className="flex gap-4 mb-8">
                <Button onClick={buyNow} className="flex-1 bg-brand-primary hover:bg-brand-warm-brown">
                  Buy Now
                </Button>
                <Button onClick={addToCart} variant="outline" className="flex-1">
                  <ShoppingCart className="h-4 w-4 mr-2" />
                  Add to Cart
                </Button>
              </div>
            </div>
          </div>

          {/* Customer Reviews */}
          <div className="mt-16">
            <h2 className="font-playfair text-3xl font-bold text-gray-900 mb-8">Customer Reviews</h2>
            <div className="space-y-6">
              {reviews.map((review) => (
                <div key={review.id} className="bg-white border rounded-lg p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="font-semibold">{review.name}</h3>
                      <div className="flex items-center mt-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${
                              i < review.rating
                                ? 'text-yellow-400 fill-current'
                                : 'text-gray-300'
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                    <span className="text-sm text-gray-500">{review.date}</span>
                  </div>
                  <p className="text-gray-700">{review.comment}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProductDetail;
