
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import BookCard from '../components/BookCard';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Input } from '@/components/ui/input';

const Shop = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [priceRange, setPriceRange] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const allBooks = [
    {
      id: 1,
      title: "The Art of Digital Storytelling",
      price: "$24.99",
      description: "Master the craft of compelling digital narratives with proven techniques and insider insights.",
      coverColor: "bg-gradient-to-br from-purple-600 to-purple-800",
      category: "writing",
      priceValue: 24.99
    },
    {
      id: 2,
      title: "Creative Writing Mastery",
      price: "$19.99",
      description: "Unlock your creative potential with this comprehensive guide to professional writing techniques.",
      coverColor: "bg-gradient-to-br from-emerald-600 to-emerald-800",
      category: "writing",
      priceValue: 19.99
    },
    {
      id: 3,
      title: "Modern Poetry Collection",
      price: "$16.99",
      description: "A curated collection of contemporary poems that speak to the human experience in the digital age.",
      coverColor: "bg-gradient-to-br from-rose-600 to-rose-800",
      category: "poetry",
      priceValue: 16.99
    },
    {
      id: 4,
      title: "Business Writing Excellence",
      price: "$29.99",
      description: "Professional communication skills for the modern workplace.",
      coverColor: "bg-gradient-to-br from-blue-600 to-blue-800",
      category: "business",
      priceValue: 29.99
    },
    {
      id: 5,
      title: "Fiction Writing Workshop",
      price: "$22.99",
      description: "Create compelling characters and engaging plots in this comprehensive fiction guide.",
      coverColor: "bg-gradient-to-br from-amber-600 to-amber-800",
      category: "writing",
      priceValue: 22.99
    },
    {
      id: 6,
      title: "Poetry for Beginners",
      price: "$12.99",
      description: "Start your poetry journey with this accessible introduction to verse and rhythm.",
      coverColor: "bg-gradient-to-br from-teal-600 to-teal-800",
      category: "poetry",
      priceValue: 12.99
    }
  ];

  const filteredBooks = allBooks.filter(book => {
    const matchesCategory = selectedCategory === 'all' || book.category === selectedCategory;
    const matchesPrice = priceRange === 'all' || 
      (priceRange === 'under20' && book.priceValue < 20) ||
      (priceRange === '20to25' && book.priceValue >= 20 && book.priceValue <= 25) ||
      (priceRange === 'over25' && book.priceValue > 25);
    const matchesSearch = book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    return matchesCategory && matchesPrice && matchesSearch;
  });

  const handleBookClick = (bookId: number) => {
    navigate(`/book/${bookId}`);
  };

  return (
    <div className="min-h-screen font-inter">
      <Header />
      <main className="py-8">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h1 className="font-playfair text-4xl font-bold text-gray-900 mb-4">
              Shop <span className="text-brand-primary">Ebooks</span>
            </h1>
            <p className="text-gray-600 text-lg">
              Discover our complete collection of digital books
            </p>
          </div>

          {/* Filters */}
          <div className="bg-white rounded-lg shadow-sm p-6 mb-8" style={{ border: '2px solid #EAC8C4' }}>
            <div className="grid md:grid-cols-4 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Search</label>
                <Input
                  placeholder="Search books..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="border-2 transition-colors focus:border-opacity-70"
                  style={{ borderColor: '#EAC8C4' }}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = '#F9C5D1';
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = '#EAC8C4';
                  }}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                  <SelectTrigger className="border-2" style={{ borderColor: '#EAC8C4' }}>
                    <SelectValue placeholder="All Categories" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Categories</SelectItem>
                    <SelectItem value="writing">Writing</SelectItem>
                    <SelectItem value="poetry">Poetry</SelectItem>
                    <SelectItem value="business">Business</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Price Range</label>
                <Select value={priceRange} onValueChange={setPriceRange}>
                  <SelectTrigger className="border-2" style={{ borderColor: '#EAC8C4' }}>
                    <SelectValue placeholder="All Prices" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Prices</SelectItem>
                    <SelectItem value="under20">Under $20</SelectItem>
                    <SelectItem value="20to25">$20 - $25</SelectItem>
                    <SelectItem value="over25">Over $25</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex items-end">
                <Button 
                  onClick={() => {
                    setSelectedCategory('all');
                    setPriceRange('all');
                    setSearchTerm('');
                  }}
                  variant="outline"
                  className="w-full border-2 transition-colors"
                  style={{ borderColor: '#EAC8C4' }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#F9C5D1';
                    e.currentTarget.style.borderColor = '#F9C5D1';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'transparent';
                    e.currentTarget.style.borderColor = '#EAC8C4';
                  }}
                >
                  Clear Filters
                </Button>
              </div>
            </div>
          </div>

          {/* Results Count */}
          <div className="mb-6">
            <p className="text-gray-600">
              Showing {filteredBooks.length} of {allBooks.length} books
            </p>
          </div>

          {/* Books Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredBooks.map((book) => (
              <div key={book.id} onClick={() => handleBookClick(book.id)} className="cursor-pointer">
                <BookCard {...book} />
              </div>
            ))}
          </div>

          {filteredBooks.length === 0 && (
            <div className="text-center py-16">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No books found</h3>
              <p className="text-gray-600 mb-4">Try adjusting your filters or search terms</p>
              <Button onClick={() => {
                setSelectedCategory('all');
                setPriceRange('all');
                setSearchTerm('');
              }}>
                Clear All Filters
              </Button>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Shop;
