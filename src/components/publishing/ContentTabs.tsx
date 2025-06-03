
import React from 'react';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Upload, Edit3 } from 'lucide-react';
import FileUploadTab from './FileUploadTab';
import ManualWriteTab from './ManualWriteTab';

interface UploadedFile {
  file: File;
  id: string;
  type: 'text' | 'image';
  preview?: string;
}

interface ContentTabsProps {
  uploadedFiles: UploadedFile[];
  setUploadedFiles: React.Dispatch<React.SetStateAction<UploadedFile[]>>;
  manualContent: string;
  setManualContent: (content: string) => void;
}

const ContentTabs: React.FC<ContentTabsProps> = ({
  uploadedFiles,
  setUploadedFiles,
  manualContent,
  setManualContent
}) => {
  return (
    <div className="space-y-4">
      <Label className="text-contrast font-medium text-lg">
        Book Content *
      </Label>
      
      <Tabs defaultValue="upload" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="upload" className="flex items-center gap-2">
            <Upload className="h-4 w-4" />
            Upload Files
          </TabsTrigger>
          <TabsTrigger value="write" className="flex items-center gap-2">
            <Edit3 className="h-4 w-4" />
            Write Manually
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="upload">
          <FileUploadTab
            uploadedFiles={uploadedFiles}
            setUploadedFiles={setUploadedFiles}
          />
        </TabsContent>
        
        <TabsContent value="write">
          <ManualWriteTab
            manualContent={manualContent}
            setManualContent={setManualContent}
          />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ContentTabs;
