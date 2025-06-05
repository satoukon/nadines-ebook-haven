
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { X, Mail } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const EmailNewsletterPopup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    // Show popup after 5 seconds if user hasn't dismissed it
    const hasSeenPopup = localStorage.getItem('hasSeenNewsletterPopup');
    if (!hasSeenPopup) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    localStorage.setItem('hasSeenNewsletterPopup', 'true');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);
    
    // Simulate newsletter signup
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Successfully subscribed!",
        description: "Thank you for joining our newsletter. You'll receive updates about new ebooks and special offers.",
      });
      
      setEmail('');
      handleClose();
    } catch (error) {
      toast({
        title: "Subscription failed",
        description: "Please try again later.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <Card className="w-full max-w-md relative animate-scale-in" style={{ backgroundColor: '#F0F0F0' }}>
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-2 right-2 hover:bg-gray-200"
          onClick={handleClose}
        >
          <X className="h-4 w-4" style={{ color: '#0F0F0F' }} />
        </Button>
        
        <CardHeader className="text-center pb-4">
          <div className="mx-auto mb-4 p-3 rounded-full" style={{ backgroundColor: '#E6B7B0' }}>
            <Mail className="h-6 w-6 text-white" />
          </div>
          <CardTitle className="font-playfair text-2xl" style={{ color: '#0F0F0F' }}>
            Stay Updated
          </CardTitle>
          <p className="text-sm" style={{ color: '#0F0F0F' }}>
            Get notified about new ebooks, exclusive content, and special offers.
          </p>
        </CardHeader>
        
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border-2"
              style={{ borderColor: '#EAC8C4', color: '#0F0F0F' }}
              required
            />
            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full text-white hover:opacity-90 transition-opacity"
              style={{ backgroundColor: '#E6B7B0' }}
            >
              {isSubmitting ? 'Subscribing...' : 'Subscribe Now'}
            </Button>
          </form>
          <p className="text-xs text-center mt-3" style={{ color: '#0F0F0F' }}>
            No spam, unsubscribe at any time.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default EmailNewsletterPopup;
