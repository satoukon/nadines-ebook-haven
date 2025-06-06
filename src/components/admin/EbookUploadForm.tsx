
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { Upload, X } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const EbookUploadForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    price: '',
    category: 'writing'
  });
  const [coverImage, setCoverImage] = useState<File | null>(null);
  const [pdfFile, setPdfFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleCoverUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setCoverImage(file);
    }
  };

  const handlePdfUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setPdfFile(file);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate upload process
      await new Promise(resolve => setTimeout(resolve, 2000));

      // In a real app, you would upload files and save to database
      console.log('Form data:', formData);
      console.log('Cover image:', coverImage);
      console.log('PDF file:', pdfFile);

      toast({
        title: "Ebook uploaded successfully!",
        description: "Your ebook has been added to the catalog.",
      });

      // Reset form
      setFormData({
        title: '',
        description: '',
        price: '',
        category: 'writing'
      });
      setCoverImage(null);
      setPdfFile(null);
    } catch (error) {
      toast({
        title: "Upload failed",
        description: "Please try again later.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2" style={{ color: '#0F0F0F' }}>
              Title
            </label>
            <Input
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              required
              className="border-2"
              style={{ borderColor: '#EAC8C4', color: '#0F0F0F' }}
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2" style={{ color: '#0F0F0F' }}>
              Price ($)
            </label>
            <Input
              name="price"
              type="number"
              step="0.01"
              value={formData.price}
              onChange={handleInputChange}
              required
              className="border-2"
              style={{ borderColor: '#EAC8C4', color: '#0F0F0F' }}
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2" style={{ color: '#0F0F0F' }}>
              Category
            </label>
            <select
              name="category"
              value={formData.category}
              onChange={handleInputChange}
              className="w-full border-2 rounded-md px-3 py-2"
              style={{ borderColor: '#EAC8C4', color: '#0F0F0F' }}
            >
              <option value="writing">Writing</option>
              <option value="poetry">Poetry</option>
              <option value="fiction">Fiction</option>
              <option value="non-fiction">Non-Fiction</option>
            </select>
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2" style={{ color: '#0F0F0F' }}>
              Description
            </label>
            <Textarea
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              rows={4}
              required
              className="border-2"
              style={{ borderColor: '#EAC8C4', color: '#0F0F0F' }}
            />
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Cover Image Upload */}
        <Card className="border-2" style={{ borderColor: '#EAC8C4' }}>
          <CardContent className="p-4">
            <label className="block text-sm font-medium mb-2" style={{ color: '#0F0F0F' }}>
              Cover Image
            </label>
            <div className="border-2 border-dashed rounded-lg p-4 text-center" style={{ borderColor: '#EAC8C4' }}>
              {coverImage ? (
                <div className="space-y-2">
                  <p className="text-sm" style={{ color: '#0F0F0F' }}>{coverImage.name}</p>
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={() => setCoverImage(null)}
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              ) : (
                <div className="space-y-2">
                  <Upload className="h-8 w-8 mx-auto" style={{ color: '#E6B7B0' }} />
                  <p className="text-sm" style={{ color: '#0F0F0F' }}>Upload cover image</p>
                </div>
              )}
              <input
                type="file"
                accept="image/*"
                onChange={handleCoverUpload}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              />
            </div>
          </CardContent>
        </Card>

        {/* PDF Upload */}
        <Card className="border-2" style={{ borderColor: '#EAC8C4' }}>
          <CardContent className="p-4">
            <label className="block text-sm font-medium mb-2" style={{ color: '#0F0F0F' }}>
              PDF File
            </label>
            <div className="border-2 border-dashed rounded-lg p-4 text-center" style={{ borderColor: '#EAC8C4' }}>
              {pdfFile ? (
                <div className="space-y-2">
                  <p className="text-sm" style={{ color: '#0F0F0F' }}>{pdfFile.name}</p>
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={() => setPdfFile(null)}
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              ) : (
                <div className="space-y-2">
                  <Upload className="h-8 w-8 mx-auto" style={{ color: '#E6B7B0' }} />
                  <p className="text-sm" style={{ color: '#0F0F0F' }}>Upload PDF file</p>
                </div>
              )}
              <input
                type="file"
                accept=".pdf"
                onChange={handlePdfUpload}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              />
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="flex justify-end">
        <Button
          type="submit"
          disabled={isSubmitting}
          className="text-white hover:opacity-90 transition-opacity"
          style={{ backgroundColor: '#E6B7B0' }}
        >
          {isSubmitting ? 'Uploading...' : 'Upload Ebook'}
        </Button>
      </div>
    </form>
  );
};

export default EbookUploadForm;
