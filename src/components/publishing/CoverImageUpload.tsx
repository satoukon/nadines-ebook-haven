
import React from 'react';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Camera, X } from 'lucide-react';

interface CoverImageUploadProps {
  coverImage: File | null;
  setCoverImage: (file: File | null) => void;
  coverPreview: string;
  setCoverPreview: (preview: string) => void;
}

const CoverImageUpload: React.FC<CoverImageUploadProps> = ({
  coverImage,
  setCoverImage,
  coverPreview,
  setCoverPreview
}) => {
  const handleCoverUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && file.type.startsWith('image/')) {
      setCoverImage(file);
      const reader = new FileReader();
      reader.onload = (e) => {
        setCoverPreview(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
    event.target.value = '';
  };

  const removeCover = () => {
    setCoverImage(null);
    setCoverPreview('');
  };

  return (
    <div className="space-y-4">
      <Label className="text-contrast font-medium text-lg">
        Book Cover
      </Label>
      <div className="grid md:grid-cols-2 gap-4">
        <div className="border-2 border-dashed border-primary/30 rounded-lg p-4 text-center hover:border-primary/50 transition-colors">
          <input
            type="file"
            accept="image/*"
            onChange={handleCoverUpload}
            className="hidden"
            id="cover-upload"
          />
          <label htmlFor="cover-upload" className="cursor-pointer">
            <Camera className="h-8 w-8 text-primary mx-auto mb-2" />
            <p className="text-contrast font-medium mb-1">
              Upload Cover Image
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
              alt="Cover preview"
              className="w-full h-48 object-cover rounded-lg border border-primary/30"
            />
            <Button
              variant="ghost"
              size="sm"
              onClick={removeCover}
              className="absolute top-2 right-2 bg-red-500 hover:bg-red-600 text-white"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CoverImageUpload;
