
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BookOpen, Heart, Users, Award } from 'lucide-react';
import Header from '@/components/Header';

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="py-8 px-4">
        <div className="container mx-auto max-w-6xl">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="font-playfair text-4xl md:text-5xl font-bold text-contrast mb-4">
              About <span className="text-primary">Nadine Paulayu</span>
            </h1>
            <p className="font-inter text-lg text-gray-600 max-w-3xl mx-auto">
              A passionate writer and digital publishing pioneer, dedicated to sharing knowledge 
              and empowering others through the written word.
            </p>
          </div>

          {/* Story Section */}
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <div className="space-y-6">
              <h2 className="font-playfair text-3xl font-bold text-contrast">My Story</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  Welcome to my world of words and wisdom. I'm Nadine Paulayu, an author who believes 
                  in the transformative power of knowledge and the importance of making it accessible 
                  to everyone.
                </p>
                <p>
                  My journey began with a simple belief: that everyone has a story worth telling and 
                  knowledge worth sharing. Through my digital publishing platform, I aim to democratize 
                  the publishing process, making it easier for authors to reach their audience and for 
                  readers to discover meaningful content.
                </p>
                <p>
                  When I'm not writing, you'll find me exploring new technologies, connecting with fellow 
                  authors, and continuously learning about the evolving landscape of digital publishing.
                </p>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="bg-primary/10 rounded-lg p-8 text-center">
                <BookOpen className="h-16 w-16 text-primary mx-auto mb-4" />
                <h3 className="font-playfair text-xl font-bold text-contrast mb-2">
                  Published Works
                </h3>
                <p className="text-gray-600">
                  Over 50 digital publications and counting, covering topics from personal development 
                  to technology insights.
                </p>
              </div>
            </div>
          </div>

          {/* Values Section */}
          <div className="mb-16">
            <h2 className="font-playfair text-3xl font-bold text-contrast text-center mb-8">
              What I Stand For
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-primary/20 hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <Heart className="h-8 w-8 text-primary mx-auto mb-2" />
                  <CardTitle className="font-playfair text-xl">Passion</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-center">
                    Every piece of content is crafted with genuine passion and dedication 
                    to providing value to readers.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-primary/20 hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <Users className="h-8 w-8 text-primary mx-auto mb-2" />
                  <CardTitle className="font-playfair text-xl">Community</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-center">
                    Building a supportive community where authors and readers can connect, 
                    learn, and grow together.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-primary/20 hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <Award className="h-8 w-8 text-primary mx-auto mb-2" />
                  <CardTitle className="font-playfair text-xl">Excellence</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-center">
                    Committed to maintaining the highest standards in both content quality 
                    and user experience.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-primary/5 rounded-lg p-8">
            <h2 className="font-playfair text-2xl font-bold text-contrast mb-4">
              Ready to Start Your Publishing Journey?
            </h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Join me in this exciting world of digital publishing. Whether you're a seasoned author 
              or just starting out, I'm here to help you share your story with the world.
            </p>
            <Button className="bg-primary hover:bg-primary/90 text-white">
              Start Publishing Today
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
