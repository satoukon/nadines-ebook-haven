
import React from 'react';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Plus } from 'lucide-react';

interface ManualWriteTabProps {
  manualContent: string;
  setManualContent: (content: string) => void;
}

const ManualWriteTab: React.FC<ManualWriteTabProps> = ({
  manualContent,
  setManualContent
}) => {
  const handleImageInsert = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const imageUrl = e.target?.result as string;
        const imageText = `\n\n[IMAGE: ${file.name}]\n\n`;
        setManualContent(prev => prev + imageText);
      };
      reader.readAsDataURL(file);
    }
    event.target.value = '';
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <Label htmlFor="manual-content" className="text-contrast font-medium">
          Write your book content here
        </Label>
        <div className="flex items-center gap-2">
          <input
            type="file"
            accept="image/*"
            onChange={handleImageInsert}
            className="hidden"
            id="image-insert"
          />
          <Button
            variant="outline"
            size="sm"
            onClick={() => document.getElementById('image-insert')?.click()}
            className="border-primary/30 text-primary hover:bg-primary/10"
          >
            <Plus className="h-4 w-4 mr-1" />
            Insert Image
          </Button>
        </div>
      </div>
      <Textarea
        id="manual-content"
        value={manualContent}
        onChange={(e) => setManualContent(e.target.value)}
        placeholder="Start writing your book content here. You can write chapters, add formatting, and create your complete book. Use the 'Insert Image' button to add images to your content..."
        className="border-primary/30 focus:border-primary min-h-[400px] resize-vertical"
      />
      <p className="text-sm text-gray-500">
        {manualContent.length} characters written
      </p>
    </div>
  );
};

export default ManualWriteTab;
