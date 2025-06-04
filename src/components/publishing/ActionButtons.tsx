
import React from 'react';
import { Button } from '@/components/ui/button';
import { Save, Eye, Download, Send, BookOpen } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface ActionButtonsProps {
  title: string;
  author: string;
  hasContent: boolean;
  isProcessing: boolean;
  setIsProcessing: (processing: boolean) => void;
  onSaveDraft: () => void;
  onPreviewPDF: () => void;
  onDownloadPDF: () => void;
  onPublish: () => void;
}

const ActionButtons: React.FC<ActionButtonsProps> = ({
  title,
  author,
  hasContent,
  isProcessing,
  setIsProcessing,
  onSaveDraft,
  onPreviewPDF,
  onDownloadPDF,
  onPublish
}) => {
  const { toast } = useToast();

  const handleAction = (action: () => void, actionName: string) => {
    if (!title || !author || !hasContent) {
      toast({
        title: "Missing Information",
        description: "Please fill in title, author, and content before proceeding.",
        variant: "destructive"
      });
      return;
    }
    action();
  };

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        <Button
          variant="outline"
          onClick={onSaveDraft}
          className="border-primary/30 text-primary hover:bg-primary/10"
        >
          <Save className="h-4 w-4 mr-2" />
          Save Draft
        </Button>
        
        <Button
          variant="outline"
          onClick={() => handleAction(onPreviewPDF, 'preview')}
          disabled={isProcessing}
          className="border-primary/30 text-primary hover:bg-primary/10"
        >
          <Eye className="h-4 w-4 mr-2" />
          Preview PDF
        </Button>
        
        <Button
          variant="outline"
          onClick={() => handleAction(onDownloadPDF, 'download')}
          disabled={isProcessing}
          className="border-primary/30 text-primary hover:bg-primary/10"
        >
          <Download className="h-4 w-4 mr-2" />
          Download PDF
        </Button>
        
        <Button
          variant="outline"
          onClick={() => handleAction(() => {}, 'review')}
          disabled={isProcessing}
          className="border-primary/30 text-primary hover:bg-primary/10"
        >
          <Send className="h-4 w-4 mr-2" />
          Submit Review
        </Button>
      </div>
      
      <Button
        onClick={() => handleAction(onPublish, 'publish')}
        disabled={isProcessing}
        className="w-full bg-primary hover:bg-primary/90 text-white font-medium py-3"
      >
        {isProcessing ? (
          <>
            <BookOpen className="h-4 w-4 mr-2 animate-spin" />
            Processing Your Ebook...
          </>
        ) : (
          <>
            <BookOpen className="h-4 w-4 mr-2" />
            Publish to Store
          </>
        )}
      </Button>
    </div>
  );
};

export default ActionButtons;
