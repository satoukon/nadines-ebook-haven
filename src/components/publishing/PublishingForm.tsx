
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import BookDetailsForm from './BookDetailsForm';
import CoverImageUpload from './CoverImageUpload';
import ContentTabs from './ContentTabs';
import PublishButton from './PublishButton';

interface UploadedFile {
  file: File;
  id: string;
  type: 'text' | 'image';
  preview?: string;
}

const PublishingForm = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [description, setDescription] = useState('');
  const [manualContent, setManualContent] = useState('');
  const [coverImage, setCoverImage] = useState<File | null>(null);
  const [coverPreview, setCoverPreview] = useState<string>('');
  const [uploadedFiles, setUploadedFiles] = useState<UploadedFile[]>([]);
  const [isProcessing, setIsProcessing] = useState(false);

  const handlePublishSuccess = () => {
    setTitle('');
    setAuthor('');
    setDescription('');
    setManualContent('');
    setUploadedFiles([]);
    setCoverImage(null);
    setCoverPreview('');
  };

  return (
    <Card className="border-primary/20 shadow-lg">
      <CardHeader className="bg-primary/5">
        <CardTitle className="font-playfair text-2xl text-contrast">
          Book Details
        </CardTitle>
      </CardHeader>
      <CardContent className="p-6 space-y-6">
        <BookDetailsForm
          title={title}
          setTitle={setTitle}
          author={author}
          setAuthor={setAuthor}
          description={description}
          setDescription={setDescription}
        />

        <CoverImageUpload
          coverImage={coverImage}
          setCoverImage={setCoverImage}
          coverPreview={coverPreview}
          setCoverPreview={setCoverPreview}
        />

        <ContentTabs
          uploadedFiles={uploadedFiles}
          setUploadedFiles={setUploadedFiles}
          manualContent={manualContent}
          setManualContent={setManualContent}
        />

        <PublishButton
          title={title}
          author={author}
          uploadedFiles={uploadedFiles}
          manualContent={manualContent}
          isProcessing={isProcessing}
          setIsProcessing={setIsProcessing}
          onPublishSuccess={handlePublishSuccess}
        />
      </CardContent>
    </Card>
  );
};

export default PublishingForm;
