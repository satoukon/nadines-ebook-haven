
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';

const AdminLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simple admin authentication (in production, use proper authentication)
    if (email === 'admin@nadinepaulayu.com' && password === 'admin123') {
      localStorage.setItem('adminToken', 'authenticated');
      toast({
        title: "Login successful",
        description: "Welcome to the admin dashboard.",
      });
      navigate('/admin/dashboard');
    } else {
      toast({
        title: "Login failed",
        description: "Invalid email or password.",
        variant: "destructive"
      });
    }
    
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: '#F0F0F0' }}>
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <CardTitle className="font-playfair text-2xl" style={{ color: '#0F0F0F' }}>
            Admin Login
          </CardTitle>
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
              {isLoading ? 'Logging in...' : 'Login'}
            </Button>
          </form>
          <p className="text-xs text-center mt-4" style={{ color: '#0F0F0F' }}>
            Demo: admin@nadinepaulayu.com / admin123
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminLogin;
