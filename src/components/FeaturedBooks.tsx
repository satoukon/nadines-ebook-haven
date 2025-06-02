
import React from 'react';
import BookCard from './BookCard';

const FeaturedBooks = () => {
  const featuredBooks = [
    {
      title: "The Art of Digital Storytelling",
      price: "$24.99",
      description: "Master the craft of compelling digital narratives with proven techniques and insider insights.",
      coverColor: "bg-gradient-to-br from-purple-600 to-purple-800"
    },
    {
      title: "Creative Writing Mastery",
      price: "$19.99",
      description: "Unlock your creative potential with this comprehensive guide to professional writing techniques.",
      coverColor: "bg-gradient-to-br from-emerald-600 to-emerald-800"
    },
    {
      title: "Modern Poetry Collection",
      price: "$16.99",
      description: "A curated collection of contemporary poems that speak to the human experience in the digital age.",
      coverColor: "bg-gradient-to-br from-rose-600 to-rose-800"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Featured <span className="text-brand-primary">Collection</span>
          </h2>
          <p className="font-inter text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover our handpicked selection of digital ebooks, each crafted to inspire, 
            educate, and transform your reading experience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredBooks.map((book, index) => (
            <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
              <BookCard {...book} />
            </div>
          ))}
        </div>

        <div className="text-center">
          <button className="font-inter bg-transparent border-2 border-brand-primary text-brand-primary px-8 py-3 rounded-lg hover:bg-brand-primary hover:text-white transition-all duration-300 transform hover:scale-105 font-semibold">
            View All Books
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedBooks;
