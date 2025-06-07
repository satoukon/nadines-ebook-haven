
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';
import { Loader2 } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  // Mock user database with roles
  const mockUsers = {
    'user@nadinepaulayu.com': { password: 'user123', role: 'user' },
    'admin@nadinepaulayu.com': { password: 'admin123', role: 'admin' },
    'jane@example.com': { password: 'password123', role: 'user' },
    'john@example.com': { password: 'password123', role: 'admin' }
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1500));

      const user = mockUsers[email as keyof typeof mockUsers];

      if (!user) {
        toast({
          title: "Account not found",
          description: "No account found with this email address.",
          variant: "destructive"
        });
        setIsLoading(false);
        return;
      }

      if (user.password !== password) {
        toast({
          title: "Invalid credentials",
          description: "The password you entered is incorrect.",
          variant: "destructive"
        });
        setIsLoading(false);
        return;
      }

      if (!user.role) {
        toast({
          title: "Account error",
          description: "Your account is missing role information. Please contact support.",
          variant: "destructive"
        });
        setIsLoading(false);
        return;
      }

      // Set authentication tokens
      if (user.role === 'admin') {
        localStorage.setItem('adminToken', 'authenticated');
        localStorage.setItem('userRole', 'admin');
        toast({
          title: "Login successful",
          description: "Welcome to the admin dashboard.",
        });
        navigate('/admin/dashboard');
      } else {
        localStorage.setItem('userToken', 'authenticated');
        localStorage.setItem('userRole', 'user');
        toast({
          title: "Login successful",
          description: "Welcome back!",
        });
        navigate('/user-home');
      }
      
    } catch (error) {
      toast({
        title: "Login failed",
        description: "Something went wrong. Please try again.",
        variant: "destructive"
      });
    }
    
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen font-inter">
      <Header />
      <div className="min-h-screen flex items-center justify-center py-12" style={{ backgroundColor: '#F0F0F0' }}>
        <Card className="w-full max-w-md">
          <CardHeader className="text-center">
            <CardTitle className="font-playfair text-2xl" style={{ color: '#0F0F0F' }}>
              Welcome Back
            </CardTitle>
            <p className="text-sm text-gray-600 mt-2">
              Sign in to your account
            </p>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <Input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  disabled={isLoading}
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
                  disabled={isLoading}
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
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Signing in...
                  </>
                ) : (
                  'Sign In'
                )}
              </Button>
            </form>
            
            <div className="mt-6 text-center">
              <div className="text-xs" style={{ color: '#0F0F0F' }}>
                <p className="mb-2 font-semibold">Demo Accounts:</p>
                <p className="mb-1">User: user@nadinepaulayu.com / user123</p>
                <p>Admin: admin@nadinepaulayu.com / admin123</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
