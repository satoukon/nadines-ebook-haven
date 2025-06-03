
import React from 'react';
import Header from '@/components/Header';
import PublishingForm from '@/components/publishing/PublishingForm';

const Publishing = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="py-8 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-8">
            <h1 className="font-playfair text-4xl md:text-5xl font-bold text-contrast mb-4">
              Publish Your <span className="text-primary">Ebook</span>
            </h1>
            <p className="font-inter text-lg text-gray-600 max-w-2xl mx-auto">
              Create and publish your digital book by uploading files or writing directly. 
              Your ebook will be automatically formatted into a professional PDF for buyers.
            </p>
          </div>

          <PublishingForm />
        </div>
      </div>
    </div>
  );
};

export default Publishing;
