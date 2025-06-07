
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [name, setName] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    if (password !== confirmPassword) {
      toast({
        title: "Registration failed",
        description: "Passwords do not match.",
        variant: "destructive"
      });
      setIsLoading(false);
      return;
    }

    // Simple registration simulation
    toast({
      title: "Registration successful",
      description: "Your account has been created. Please login.",
    });
    navigate('/login');
    
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen font-inter">
      <Header />
      <div className="min-h-screen flex items-center justify-center py-12" style={{ backgroundColor: '#F0F0F0' }}>
        <Card className="w-full max-w-md">
          <CardHeader className="text-center">
            <CardTitle className="font-playfair text-2xl" style={{ color: '#0F0F0F' }}>
              Sign Up
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleRegister} className="space-y-4">
              <div>
                <Input
                  type="text"
                  placeholder="Full Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="border-2"
                  style={{ borderColor: '#EAC8C4', color: '#0F0F0F' }}
                />
              </div>
              <div>
                <Input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="border-2"
                  style={{ borderColor: '#EAC8C4', color: '#0F0F0F' }}
                />
              </div>
              <div>
                <Input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="border-2"
                  style={{ borderColor: '#EAC8C4', color: '#0F0F0F' }}
                />
              </div>
              <div>
                <Input
                  type="password"
                  placeholder="Confirm Password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                  className="border-2"
                  style={{ borderColor: '#EAC8C4', color: '#0F0F0F' }}
                />
              </div>
              <Button
                type="submit"
                disabled={isLoading}
                className="w-full text-white hover:opacity-90 transition-opacity"
                style={{ backgroundColor: '#E6B7B0' }}
              >
                {isLoading ? 'Creating Account...' : 'Sign Up'}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
      <Footer />
    </div>
  );
};

export default Register;
