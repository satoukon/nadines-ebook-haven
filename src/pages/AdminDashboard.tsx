
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { LogOut, Book, ShoppingCart, Plus } from 'lucide-react';
import EbookUploadForm from '@/components/admin/EbookUploadForm';
import EbooksList from '@/components/admin/EbooksList';
import OrdersList from '@/components/admin/OrdersList';

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('ebooks');

  useEffect(() => {
    const adminToken = localStorage.getItem('adminToken');
    if (!adminToken) {
      navigate('/admin/login');
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    navigate('/admin/login');
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#F0F0F0' }}>
      {/* Header */}
      <header className="bg-white shadow-sm border-b-2" style={{ borderColor: '#EAC8C4' }}>
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="font-playfair text-2xl font-bold" style={{ color: '#0F0F0F' }}>
              Admin Dashboard
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
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="ebooks" className="flex items-center gap-2">
              <Book className="h-4 w-4" />
              Ebooks
            </TabsTrigger>
            <TabsTrigger value="upload" className="flex items-center gap-2">
              <Plus className="h-4 w-4" />
              Upload
            </TabsTrigger>
            <TabsTrigger value="orders" className="flex items-center gap-2">
              <ShoppingCart className="h-4 w-4" />
              Orders
            </TabsTrigger>
          </TabsList>

          <TabsContent value="ebooks">
            <Card>
              <CardHeader>
                <CardTitle className="font-playfair" style={{ color: '#0F0F0F' }}>
                  Manage Ebooks
                </CardTitle>
              </CardHeader>
              <CardContent>
                <EbooksList />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="upload">
            <Card>
              <CardHeader>
                <CardTitle className="font-playfair" style={{ color: '#0F0F0F' }}>
                  Upload New Ebook
                </CardTitle>
              </CardHeader>
              <CardContent>
                <EbookUploadForm />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="orders">
            <Card>
              <CardHeader>
                <CardTitle className="font-playfair" style={{ color: '#0F0F0F' }}>
                  Customer Orders
                </CardTitle>
              </CardHeader>
              <CardContent>
                <OrdersList />
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default AdminDashboard;
