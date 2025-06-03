
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Upload, FileText, Image as ImageIcon, File, X } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface UploadedFile {
  file: File;
  id: string;
  type: 'text' | 'image';
  preview?: string;
}

const Publishing = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [description, setDescription] = useState('');
  const [uploadedFiles, setUploadedFiles] = useState<UploadedFile[]>([]);
  const [isProcessing, setIsProcessing] = useState(false);
  const { toast } = useToast();

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files || []);
    
    files.forEach((file) => {
      const fileType = file.type.startsWith('image/') ? 'image' : 'text';
      const id = Date.now().toString() + Math.random().toString(36).substr(2, 9);
      
      if (fileType === 'image') {
        const reader = new FileReader();
        reader.onload = (e) => {
          const newFile: UploadedFile = {
            file,
            id,
            type: fileType,
            preview: e.target?.result as string
          };
          setUploadedFiles(prev => [...prev, newFile]);
        };
        reader.readAsDataURL(file);
      } else {
        const newFile: UploadedFile = {
          file,
          id,
          type: fileType
        };
        setUploadedFiles(prev => [...prev, newFile]);
      }
    });

    // Reset the input
    event.target.value = '';
  };

  const removeFile = (id: string) => {
    setUploadedFiles(prev => prev.filter(file => file.id !== id));
  };

  const handlePublish = async () => {
    if (!title || !author || uploadedFiles.length === 0) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields and upload at least one file.",
        variant: "destructive"
      });
      return;
    }

    setIsProcessing(true);
    
    // Simulate PDF generation process
    setTimeout(() => {
      toast({
        title: "Ebook Published Successfully!",
        description: `"${title}" has been processed and is now available for purchase as a PDF.`,
      });
      setIsProcessing(false);
      
      // Reset form
      setTitle('');
      setAuthor('');
      setDescription('');
      setUploadedFiles([]);
    }, 3000);
  };

  const acceptedFileTypes = [
    '.txt', '.doc', '.docx', '.md', '.rtf',
    '.jpg', '.jpeg', '.png', '.gif', '.webp', '.svg'
  ].join(',');

  return (
    <div className="min-h-screen bg-background py-8 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-8">
          <h1 className="font-playfair text-4xl md:text-5xl font-bold text-contrast mb-4">
            Publish Your <span className="text-primary">Ebook</span>
          </h1>
          <p className="font-inter text-lg text-gray-600 max-w-2xl mx-auto">
            Create and publish your digital book by uploading text files and images. 
            Your ebook will be automatically formatted into a professional PDF for buyers.
          </p>
        </div>

        <Card className="border-primary/20 shadow-lg">
          <CardHeader className="bg-primary/5">
            <CardTitle className="font-playfair text-2xl text-contrast">
              Book Details
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6 space-y-6">
            {/* Basic Information */}
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="title" className="text-contrast font-medium">
                  Book Title *
                </Label>
                <Input
                  id="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Enter your book title"
                  className="border-primary/30 focus:border-primary"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="author" className="text-contrast font-medium">
                  Author Name *
                </Label>
                <Input
                  id="author"
                  value={author}
                  onChange={(e) => setAuthor(e.target.value)}
                  placeholder="Enter author name"
                  className="border-primary/30 focus:border-primary"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="description" className="text-contrast font-medium">
                Description
              </Label>
              <textarea
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Brief description of your book"
                className="w-full min-h-[100px] px-3 py-2 border border-primary/30 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary resize-vertical"
              />
            </div>

            {/* File Upload */}
            <div className="space-y-4">
              <Label className="text-contrast font-medium">
                Upload Content Files *
              </Label>
              <div className="border-2 border-dashed border-primary/30 rounded-lg p-6 text-center hover:border-primary/50 transition-colors">
                <input
                  type="file"
                  multiple
                  accept={acceptedFileTypes}
                  onChange={handleFileUpload}
                  className="hidden"
                  id="file-upload"
                />
                <label htmlFor="file-upload" className="cursor-pointer">
                  <Upload className="h-8 w-8 text-primary mx-auto mb-2" />
                  <p className="text-contrast font-medium mb-1">
                    Click to upload files
                  </p>
                  <p className="text-sm text-gray-500">
                    Supports: Text files (.txt, .doc, .docx, .md) and Images (.jpg, .png, .gif, .svg)
                  </p>
                </label>
              </div>

              {/* Uploaded Files Display */}
              {uploadedFiles.length > 0 && (
                <div className="space-y-3">
                  <h3 className="font-medium text-contrast">Uploaded Files:</h3>
                  <div className="grid gap-3">
                    {uploadedFiles.map((uploadedFile) => (
                      <div
                        key={uploadedFile.id}
                        className="flex items-center gap-3 p-3 bg-secondary/20 rounded-lg border border-secondary/30"
                      >
                        {uploadedFile.type === 'image' ? (
                          <div className="flex items-center gap-3 flex-1">
                            <ImageIcon className="h-5 w-5 text-primary" />
                            {uploadedFile.preview && (
                              <img
                                src={uploadedFile.preview}
                                alt="Preview"
                                className="h-10 w-10 object-cover rounded"
                              />
                            )}
                            <span className="text-sm text-contrast">
                              {uploadedFile.file.name}
                            </span>
                          </div>
                        ) : (
                          <div className="flex items-center gap-3 flex-1">
                            <FileText className="h-5 w-5 text-primary" />
                            <span className="text-sm text-contrast">
                              {uploadedFile.file.name}
                            </span>
                          </div>
                        )}
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => removeFile(uploadedFile.id)}
                          className="text-red-500 hover:text-red-700"
                        >
                          <X className="h-4 w-4" />
                        </Button>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Publish Button */}
            <div className="pt-4">
              <Button
                onClick={handlePublish}
                disabled={isProcessing}
                className="w-full bg-primary hover:bg-primary/90 text-white font-medium py-3"
              >
                {isProcessing ? (
                  <>
                    <File className="h-4 w-4 mr-2 animate-spin" />
                    Processing Your Ebook...
                  </>
                ) : (
                  <>
                    <File className="h-4 w-4 mr-2" />
                    Publish as PDF Ebook
                  </>
                )}
              </Button>
              <p className="text-sm text-gray-500 text-center mt-2">
                Your files will be compiled into a professional PDF format for buyers
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Publishing;
