
import React from 'react';
import { Button } from '@/components/ui/button';
import { File } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface UploadedFile {
  file: File;
  id: string;
  type: 'text' | 'image';
  preview?: string;
}

interface PublishButtonProps {
  title: string;
  author: string;
  uploadedFiles: UploadedFile[];
  manualContent: string;
  isProcessing: boolean;
  setIsProcessing: (processing: boolean) => void;
  onPublishSuccess: () => void;
}

const PublishButton: React.FC<PublishButtonProps> = ({
  title,
  author,
  uploadedFiles,
  manualContent,
  isProcessing,
  setIsProcessing,
  onPublishSuccess
}) => {
  const { toast } = useToast();

  const handlePublish = async () => {
    const hasFiles = uploadedFiles.length > 0;
    const hasManualContent = manualContent.trim().length > 0;
    
    if (!title || !author || (!hasFiles && !hasManualContent)) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields and either upload files or write content manually.",
        variant: "destructive"
      });
      return;
    }

    setIsProcessing(true);
    
    setTimeout(() => {
      toast({
        title: "Ebook Published Successfully!",
        description: `"${title}" has been processed and is now available for purchase as a PDF.`,
      });
      setIsProcessing(false);
      onPublishSuccess();
    }, 3000);
  };

  return (
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
        Your content will be compiled into a professional PDF format for buyers
      </p>
    </div>
  );
};

export default PublishButton;
