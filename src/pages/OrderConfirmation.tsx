
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, Download, Mail } from 'lucide-react';

interface OrderInfo {
  orderId: string;
  customerInfo: {
    firstName: string;
    lastName: string;
    email: string;
  };
  items: Array<{
    id: number;
    title: string;
    price: string;
  }>;
  total: string;
  date: string;
}

const OrderConfirmation = () => {
  const navigate = useNavigate();
  const [orderInfo, setOrderInfo] = useState<OrderInfo | null>(null);

  useEffect(() => {
    const lastOrder = localStorage.getItem('lastOrder');
    if (lastOrder) {
      setOrderInfo(JSON.parse(lastOrder));
    } else {
      navigate('/shop');
    }
  }, [navigate]);

  if (!orderInfo) {
    return null;
  }

  return (
    <div className="min-h-screen font-inter" style={{ backgroundColor: '#F0F0F0' }}>
      <Header />
      <main className="py-16">
        <div className="container mx-auto px-4 max-w-2xl">
          <div className="text-center mb-8">
            <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
            <h1 className="font-playfair text-4xl font-bold mb-4" style={{ color: '#0F0F0F' }}>
              Order Confirmed!
            </h1>
            <p className="text-lg mb-4" style={{ color: '#0F0F0F' }}>
              Thank you for your purchase. Your digital books are ready for download.
            </p>
          </div>

          <Card className="mb-8 bg-white border-gray-200">
            <CardHeader>
              <CardTitle style={{ color: '#0F0F0F' }}>Order Details</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div style={{ color: '#0F0F0F' }}>
                  <span className="font-semibold">Order ID:</span> {orderInfo.orderId}
                </div>
                <div style={{ color: '#0F0F0F' }}>
                  <span className="font-semibold">Customer:</span> {orderInfo.customerInfo.firstName} {orderInfo.customerInfo.lastName}
                </div>
                <div style={{ color: '#0F0F0F' }}>
                  <span className="font-semibold">Email:</span> {orderInfo.customerInfo.email}
                </div>
                <div style={{ color: '#0F0F0F' }}>
                  <span className="font-semibold">Date:</span> {new Date(orderInfo.date).toLocaleDateString()}
                </div>
                <div style={{ color: '#0F0F0F' }}>
                  <span className="font-semibold">Total:</span> ${orderInfo.total}
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="mb-8 bg-white border-gray-200">
            <CardHeader>
              <CardTitle style={{ color: '#0F0F0F' }}>Your Books</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {orderInfo.items.map((item) => (
                  <div key={item.id} className="flex items-center justify-between p-4 border rounded-lg bg-gray-50">
                    <div>
                      <h3 className="font-semibold" style={{ color: '#0F0F0F' }}>{item.title}</h3>
                      <p className="text-brand-primary font-bold">{item.price}</p>
                    </div>
                    <Button variant="outline" size="sm" className="border-gray-300" style={{ color: '#0F0F0F' }}>
                      <Download className="h-4 w-4 mr-2" />
                      Download
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
            <div className="flex items-start space-x-3">
              <Mail className="h-5 w-5 text-blue-600 mt-0.5" />
              <div>
                <h3 className="font-semibold text-blue-900 mb-2">Check Your Email</h3>
                <p className="text-blue-800 text-sm">
                  We've sent download links to <strong>{orderInfo.customerInfo.email}</strong>. 
                  The email may take a few minutes to arrive. Don't forget to check your spam folder.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center space-y-4">
            <Button 
              onClick={() => navigate('/shop')} 
              className="bg-brand-primary hover:bg-brand-warm-brown text-white"
            >
              Continue Shopping
            </Button>
            <p className="text-sm" style={{ color: '#0F0F0F' }}>
              Need help? Contact us at support@nadinepaulayu.com
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default OrderConfirmation;
