
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleUserLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simple user authentication (in production, use proper authentication)
    if (email === 'user@nadinepaulayu.com' && password === 'user123') {
      localStorage.setItem('userToken', 'authenticated');
      toast({
        title: "Login successful",
        description: "Welcome back!",
      });
      navigate('/');
    } else {
      toast({
        title: "Login failed",
        description: "Invalid email or password.",
        variant: "destructive"
      });
    }
    
    setIsLoading(false);
  };

  const handleAdminLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simple admin authentication (in production, use proper authentication)
    if (email === 'admin@nadinepaulayu.com' && password === 'admin123') {
      localStorage.setItem('adminToken', 'authenticated');
      toast({
        title: "Admin login successful",
        description: "Welcome to the admin dashboard.",
      });
      navigate('/admin/dashboard');
    } else {
      toast({
        title: "Login failed",
        description: "Invalid admin credentials.",
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
              Login
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="user" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="user">User Login</TabsTrigger>
                <TabsTrigger value="admin">Admin Login</TabsTrigger>
              </TabsList>
              
              <TabsContent value="user">
                <form onSubmit={handleUserLogin} className="space-y-4">
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
                  <Button
                    type="submit"
                    disabled={isLoading}
                    className="w-full text-white hover:opacity-90 transition-opacity"
                    style={{ backgroundColor: '#E6B7B0' }}
                  >
                    {isLoading ? 'Logging in...' : 'Login as User'}
                  </Button>
                </form>
                <p className="text-xs text-center mt-4" style={{ color: '#0F0F0F' }}>
                  Demo: user@nadinepaulayu.com / user123
                </p>
              </TabsContent>
              
              <TabsContent value="admin">
                <form onSubmit={handleAdminLogin} className="space-y-4">
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
                  <Button
                    type="submit"
                    disabled={isLoading}
                    className="w-full text-white hover:opacity-90 transition-opacity"
                    style={{ backgroundColor: '#E6B7B0' }}
                  >
                    {isLoading ? 'Logging in...' : 'Login as Admin'}
                  </Button>
                </form>
                <p className="text-xs text-center mt-4" style={{ color: '#0F0F0F' }}>
                  Demo: admin@nadinepaulayu.com / admin123
                </p>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
