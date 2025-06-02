
import React from 'react';
import { Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      review: "Nadine's ebooks have completely transformed my approach to creative writing. The insights are invaluable!",
      rating: 5,
      role: "Aspiring Author"
    },
    {
      name: "Michael Chen",
      review: "The digital storytelling guide helped me land my dream job. Highly recommend to anyone in content creation.",
      rating: 5,
      role: "Content Creator"
    },
    {
      name: "Emma Davis",
      review: "Beautiful, well-crafted content that's both inspiring and practical. Love the modern poetry collection!",
      rating: 5,
      role: "Literature Teacher"
    }
  ];

  return (
    <section className="py-12 md:py-20 bg-brand-cream">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 md:mb-6">
            What Readers <span className="text-brand-primary">Say</span>
          </h2>
          <p className="font-inter text-base md:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto px-4">
            Join thousands of satisfied readers who have discovered the power of quality digital literature.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-white p-6 md:p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Stars */}
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 md:h-5 md:w-5 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Review */}
              <p className="font-inter text-gray-600 mb-6 leading-relaxed italic text-sm md:text-base">
                "{testimonial.review}"
              </p>

              {/* Author */}
              <div className="border-t border-gray-100 pt-4">
                <p className="font-inter font-semibold text-gray-900 text-sm md:text-base">{testimonial.name}</p>
                <p className="font-inter text-xs md:text-sm text-brand-primary">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
