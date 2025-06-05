
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Trash2, CreditCard } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface CartItem {
  id: number;
  title: string;
  price: string;
  priceValue: number;
  coverColor: string;
}

const Checkout = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [customerInfo, setCustomerInfo] = useState({
    firstName: '',
    lastName: '',
    email: '',
    confirmEmail: ''
  });
  const [isProcessing, setIsProcessing] = useState(false);

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    setCartItems(cart);
  }, []);

  const removeFromCart = (itemId: number) => {
    const updatedCart = cartItems.filter(item => item.id !== itemId);
    setCartItems(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    
    toast({
      title: "Item removed",
      description: "Item has been removed from your cart.",
    });
  };

  const subtotal = cartItems.reduce((sum, item) => sum + item.priceValue, 0);
  const tax = subtotal * 0.08; // 8% tax
  const total = subtotal + tax;

  const handleInputChange = (field: string, value: string) => {
    setCustomerInfo(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const isFormValid = () => {
    return customerInfo.firstName.trim() !== '' &&
           customerInfo.lastName.trim() !== '' &&
           customerInfo.email.trim() !== '' &&
           customerInfo.confirmEmail.trim() !== '' &&
           customerInfo.email === customerInfo.confirmEmail &&
           cartItems.length > 0;
  };

  const processPayment = async () => {
    if (!isFormValid()) {
      toast({
        title: "Form incomplete",
        description: "Please fill in all fields and ensure emails match.",
        variant: "destructive"
      });
      return;
    }

    setIsProcessing(true);

    // Simulate Dragon Pay integration
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Clear cart
      localStorage.removeItem('cart');
      
      // Store order info for confirmation page
      const orderInfo = {
        orderId: Math.random().toString(36).substr(2, 9).toUpperCase(),
        customerInfo,
        items: cartItems,
        total: total.toFixed(2),
        date: new Date().toISOString()
      };
      
      localStorage.setItem('lastOrder', JSON.stringify(orderInfo));
      
      toast({
        title: "Payment successful!",
        description: "Your order has been processed via Dragon Pay. Check your email for download links.",
      });

      navigate('/order-confirmation');
    } catch (error) {
      toast({
        title: "Payment failed",
        description: "There was an error processing your Dragon Pay payment. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsProcessing(false);
    }
  };

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen font-inter">
        <Header />
        <main className="py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="font-playfair text-4xl font-bold text-gray-900 mb-4">Your Cart is Empty</h1>
            <p className="text-gray-600 mb-8">Add some books to your cart to continue shopping.</p>
            <Button 
              onClick={() => navigate('/shop')} 
              className="text-white transition-opacity hover:opacity-90"
              style={{ backgroundColor: '#E6B7B0' }}
            >
              Continue Shopping
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen font-inter">
      <Header />
      <main className="py-8">
        <div className="container mx-auto px-4">
          <h1 className="font-playfair text-4xl font-bold text-gray-900 mb-8">
            Checkout
          </h1>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Customer Information */}
            <div>
              <Card className="border-2" style={{ borderColor: '#EAC8C4' }}>
                <CardHeader>
                  <CardTitle>Customer Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input
                        id="firstName"
                        value={customerInfo.firstName}
                        onChange={(e) => handleInputChange('firstName', e.target.value)}
                        placeholder="John"
                        className="border-2 transition-colors"
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
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input
                        id="lastName"
                        value={customerInfo.lastName}
                        onChange={(e) => handleInputChange('lastName', e.target.value)}
                        placeholder="Doe"
                        className="border-2 transition-colors"
                        style={{ borderColor: '#EAC8C4' }}
                        onFocus={(e) => {
                          e.currentTarget.style.borderColor = '#F9C5D1';
                        }}
                        onBlur={(e) => {
                          e.currentTarget.style.borderColor = '#EAC8C4';
                        }}
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={customerInfo.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      placeholder="john.doe@example.com"
                      className="border-2 transition-colors"
                      style={{ borderColor: '#EAC8C4' }}
                      onFocus={(e) => {
                        e.currentTarget.style.borderColor = '#F9C5D1';
                      }}
                      onBlur={(e) => {
                        e.currentTarget.style.borderColor = '#EAC8C4';
                      }}
                    />
                    <p className="text-sm text-gray-600 mt-1">
                      Download links will be sent to this email address
                    </p>
                  </div>
                  <div>
                    <Label htmlFor="confirmEmail">Confirm Email Address *</Label>
                    <Input
                      id="confirmEmail"
                      type="email"
                      value={customerInfo.confirmEmail}
                      onChange={(e) => handleInputChange('confirmEmail', e.target.value)}
                      placeholder="john.doe@example.com"
                      className="border-2 transition-colors"
                      style={{ borderColor: '#EAC8C4' }}
                      onFocus={(e) => {
                        e.currentTarget.style.borderColor = '#F9C5D1';
                      }}
                      onBlur={(e) => {
                        e.currentTarget.style.borderColor = '#EAC8C4';
                      }}
                    />
                  </div>
                </CardContent>
              </Card>

              <Card className="mt-6 border-2" style={{ borderColor: '#EAC8C4' }}>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <CreditCard className="h-5 w-5 mr-2" />
                    Payment Method - Dragon Pay
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="p-4 border-2 border-dashed rounded-lg text-center" style={{ borderColor: '#F9C5D1' }}>
                    <p className="text-gray-600 mb-2">Secure Payment via Dragon Pay</p>
                    <p className="text-sm text-gray-500">
                      You will be redirected to Dragon Pay's secure payment gateway to complete your purchase.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Order Summary */}
            <div>
              <Card className="border-2" style={{ borderColor: '#EAC8C4' }}>
                <CardHeader>
                  <CardTitle>Order Summary</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {cartItems.map((item) => (
                      <div key={item.id} className="flex items-center space-x-4 p-3 rounded border transition-colors" 
                           style={{ borderColor: '#EAC8C4' }}
                           onMouseEnter={(e) => {
                             e.currentTarget.style.backgroundColor = '#F9C5D1';
                           }}
                           onMouseLeave={(e) => {
                             e.currentTarget.style.backgroundColor = 'transparent';
                           }}>
                        <div className={`${item.coverColor} w-16 h-20 rounded flex-shrink-0`}></div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-sm">{item.title}</h3>
                          <p className="font-bold" style={{ color: '#E6B7B0' }}>{item.price}</p>
                        </div>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => removeFromCart(item.id)}
                          className="text-red-500 hover:text-red-700 hover:bg-red-50"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    ))}
                  </div>

                  <Separator className="my-6" />

                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>Subtotal</span>
                      <span>${subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Tax</span>
                      <span>${tax.toFixed(2)}</span>
                    </div>
                    <Separator className="my-2" />
                    <div className="flex justify-between font-bold text-lg">
                      <span>Total</span>
                      <span style={{ color: '#E6B7B0' }}>${total.toFixed(2)}</span>
                    </div>
                  </div>

                  <Button
                    onClick={processPayment}
                    disabled={!isFormValid() || isProcessing}
                    className="w-full mt-6 text-white transition-opacity hover:opacity-90"
                    style={{ backgroundColor: '#E6B7B0' }}
                  >
                    {isProcessing ? 'Processing...' : `Complete Purchase - $${total.toFixed(2)}`}
                  </Button>

                  <p className="text-xs text-gray-500 text-center mt-4">
                    By completing your order, you agree to our terms of service and privacy policy.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Checkout;
