
import React from 'react';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Camera, X } from 'lucide-react';

interface CoverImageUploadProps {
  coverImage: File | null;
  setCoverImage: (file: File | null) => void;
  coverPreview: string;
  setCoverPreview: (preview: string) => void;
  backCoverImage: File | null;
  setBackCoverImage: (file: File | null) => void;
  backCoverPreview: string;
  setBackCoverPreview: (preview: string) => void;
}

const CoverImageUpload: React.FC<CoverImageUploadProps> = ({
  coverImage,
  setCoverImage,
  coverPreview,
  setCoverPreview,
  backCoverImage,
  setBackCoverImage,
  backCoverPreview,
  setBackCoverPreview
}) => {
  const handleCoverUpload = (event: React.ChangeEvent<HTMLInputElement>, isBack = false) => {
    const file = event.target.files?.[0];
    if (file && file.type.startsWith('image/')) {
      if (isBack) {
        setBackCoverImage(file);
      } else {
        setCoverImage(file);
      }
      
      const reader = new FileReader();
      reader.onload = (e) => {
        const result = e.target?.result as string;
        if (isBack) {
          setBackCoverPreview(result);
        } else {
          setCoverPreview(result);
        }
      };
      reader.readAsDataURL(file);
    }
    event.target.value = '';
  };

  const removeCover = (isBack = false) => {
    if (isBack) {
      setBackCoverImage(null);
      setBackCoverPreview('');
    } else {
      setCoverImage(null);
      setCoverPreview('');
    }
  };

  return (
    <Card className="border-primary/20 shadow-lg">
      <CardHeader className="bg-primary/5">
        <CardTitle className="font-playfair text-2xl text-contrast">
          Book Covers
        </CardTitle>
      </CardHeader>
      <CardContent className="p-6 space-y-6">
        {/* Front Cover */}
        <div className="space-y-4">
          <Label className="text-contrast font-medium text-lg">
            Front Cover
          </Label>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="border-2 border-dashed border-primary/30 rounded-lg p-4 text-center hover:border-primary/50 transition-colors">
              <input
                type="file"
                accept="image/*"
                onChange={(e) => handleCoverUpload(e, false)}
                className="hidden"
                id="front-cover-upload"
              />
              <label htmlFor="front-cover-upload" className="cursor-pointer">
                <Camera className="h-8 w-8 text-primary mx-auto mb-2" />
                <p className="text-contrast font-medium mb-1">
                  Upload Front Cover
                </p>
                <p className="text-sm text-gray-500">
                  Recommended: 600x800px (JPG, PNG)
                </p>
              </label>
            </div>
            
            {coverPreview && (
              <div className="relative">
                <img
                  src={coverPreview}
                  alt="Front cover preview"
                  className="w-full h-48 object-cover rounded-lg border border-primary/30"
                />
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => removeCover(false)}
                  className="absolute top-2 right-2 bg-red-500 hover:bg-red-600 text-white"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            )}
          </div>
        </div>

        {/* Back Cover */}
        <div className="space-y-4">
          <Label className="text-contrast font-medium text-lg">
            Back Cover (Optional)
          </Label>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="border-2 border-dashed border-primary/30 rounded-lg p-4 text-center hover:border-primary/50 transition-colors">
              <input
                type="file"
                accept="image/*"
                onChange={(e) => handleCoverUpload(e, true)}
                className="hidden"
                id="back-cover-upload"
              />
              <label htmlFor="back-cover-upload" className="cursor-pointer">
                <Camera className="h-8 w-8 text-primary mx-auto mb-2" />
                <p className="text-contrast font-medium mb-1">
                  Upload Back Cover
                </p>
                <p className="text-sm text-gray-500">
                  Recommended: 600x800px (JPG, PNG)
                </p>
              </label>
            </div>
            
            {backCoverPreview && (
              <div className="relative">
                <img
                  src={backCoverPreview}
                  alt="Back cover preview"
                  className="w-full h-48 object-cover rounded-lg border border-primary/30"
                />
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => removeCover(true)}
                  className="absolute top-2 right-2 bg-red-500 hover:bg-red-600 text-white"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CoverImageUpload;
