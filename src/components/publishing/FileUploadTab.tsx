
import React from 'react';
import { Button } from '@/components/ui/button';
import { Upload, FileText, Image as ImageIcon, X } from 'lucide-react';

interface UploadedFile {
  file: File;
  id: string;
  type: 'text' | 'image';
  preview?: string;
}

interface FileUploadTabProps {
  uploadedFiles: UploadedFile[];
  setUploadedFiles: React.Dispatch<React.SetStateAction<UploadedFile[]>>;
}

const FileUploadTab: React.FC<FileUploadTabProps> = ({
  uploadedFiles,
  setUploadedFiles
}) => {
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

    event.target.value = '';
  };

  const removeFile = (id: string) => {
    setUploadedFiles(prev => prev.filter(file => file.id !== id));
  };

  const acceptedFileTypes = [
    '.txt', '.doc', '.docx', '.md', '.rtf',
    '.jpg', '.jpeg', '.png', '.gif', '.webp', '.svg'
  ].join(',');

  return (
    <div className="space-y-4">
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
  );
};

export default FileUploadTab;
