
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Book, ShoppingCart, User, LogOut } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const UserHome = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const userToken = localStorage.getItem('userToken');
    const userRole = localStorage.getItem('userRole');
    
    if (!userToken || userRole !== 'user') {
      navigate('/login');
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('userToken');
    localStorage.removeItem('userRole');
    navigate('/');
  };

  return (
    <div className="min-h-screen font-inter">
      <Header />
      <div className="min-h-screen" style={{ backgroundColor: '#F0F0F0' }}>
        {/* Header */}
        <header className="bg-white shadow-sm border-b-2" style={{ borderColor: '#EAC8C4' }}>
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <h1 className="font-playfair text-2xl font-bold" style={{ color: '#0F0F0F' }}>
                My Dashboard
              </h1>
              <Button
                variant="outline"
                onClick={handleLogout}
                className="border-2 hover:text-white transition-colors"
                style={{ 
                  borderColor: '#E6B7B0', 
                  color: '#E6B7B0',
                  backgroundColor: 'transparent'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#E6B7B0';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                }}
              >
                <LogOut className="mr-2 h-4 w-4" />
                Logout
              </Button>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* My Library */}
            <Card className="hover:shadow-lg transition-shadow cursor-pointer" onClick={() => navigate('/shop')}>
              <CardHeader className="text-center">
                <Book className="h-12 w-12 mx-auto mb-4" style={{ color: '#E6B7B0' }} />
                <CardTitle className="font-playfair" style={{ color: '#0F0F0F' }}>
                  Browse Books
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center text-gray-600">
                  Discover and purchase new ebooks from our collection.
                </p>
              </CardContent>
            </Card>

            {/* My Orders */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <ShoppingCart className="h-12 w-12 mx-auto mb-4" style={{ color: '#E6B7B0' }} />
                <CardTitle className="font-playfair" style={{ color: '#0F0F0F' }}>
                  My Orders
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center text-gray-600">
                  View your purchase history and download your books.
                </p>
              </CardContent>
            </Card>

            {/* Profile */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <User className="h-12 w-12 mx-auto mb-4" style={{ color: '#E6B7B0' }} />
                <CardTitle className="font-playfair" style={{ color: '#0F0F0F' }}>
                  My Profile
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center text-gray-600">
                  Manage your account settings and preferences.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Welcome Message */}
          <div className="mt-12 text-center">
            <h2 className="font-playfair text-3xl font-bold mb-4" style={{ color: '#0F0F0F' }}>
              Welcome to Your Reading Journey
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore our collection of digital books, manage your library, and enjoy seamless reading experiences.
            </p>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default UserHome;
