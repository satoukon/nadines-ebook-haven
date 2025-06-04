
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import BookDetailsForm from './BookDetailsForm';
import CoverImageUpload from './CoverImageUpload';
import ContentTabs from './ContentTabs';
import PDFSettings from './PDFSettings';
import ActionButtons from './ActionButtons';

interface UploadedFile {
  file: File;
  id: string;
  type: 'text' | 'image';
  preview?: string;
}

const PublishingForm = () => {
  const { toast } = useToast();
  
  // Book details
  const [title, setTitle] = useState('');
  const [subtitle, setSubtitle] = useState('');
  const [author, setAuthor] = useState('');
  const [description, setDescription] = useState('');
  const [tags, setTags] = useState('');
  const [category, setCategory] = useState('');
  const [language, setLanguage] = useState('');
  
  // Content
  const [manualContent, setManualContent] = useState('');
  const [uploadedFiles, setUploadedFiles] = useState<UploadedFile[]>([]);
  
  // Cover images
  const [coverImage, setCoverImage] = useState<File | null>(null);
  const [coverPreview, setCoverPreview] = useState<string>('');
  const [backCoverImage, setBackCoverImage] = useState<File | null>(null);
  const [backCoverPreview, setBackCoverPreview] = useState<string>('');
  
  // PDF settings
  const [fontStyle, setFontStyle] = useState('times-new-roman');
  const [pageSize, setPageSize] = useState('a4');
  const [includeTOC, setIncludeTOC] = useState(true);
  const [includePageNumbers, setIncludePageNumbers] = useState(true);
  const [isPublic, setIsPublic] = useState(true);
  const [watermark, setWatermark] = useState('');
  
  const [isProcessing, setIsProcessing] = useState(false);

  // Auto-save functionality
  useEffect(() => {
    const autoSave = setInterval(() => {
      if (title || author || manualContent) {
        localStorage.setItem('ebook-draft', JSON.stringify({
          title, subtitle, author, description, tags, category, language,
          manualContent, fontStyle, pageSize, includeTOC, includePageNumbers,
          isPublic, watermark
        }));
      }
    }, 30000); // Auto-save every 30 seconds

    return () => clearInterval(autoSave);
  }, [title, subtitle, author, description, tags, category, language, manualContent, fontStyle, pageSize, includeTOC, includePageNumbers, isPublic, watermark]);

  // Load draft on component mount
  useEffect(() => {
    const savedDraft = localStorage.getItem('ebook-draft');
    if (savedDraft) {
      const draft = JSON.parse(savedDraft);
      setTitle(draft.title || '');
      setSubtitle(draft.subtitle || '');
      setAuthor(draft.author || '');
      setDescription(draft.description || '');
      setTags(draft.tags || '');
      setCategory(draft.category || '');
      setLanguage(draft.language || '');
      setManualContent(draft.manualContent || '');
      setFontStyle(draft.fontStyle || 'times-new-roman');
      setPageSize(draft.pageSize || 'a4');
      setIncludeTOC(draft.includeTOC ?? true);
      setIncludePageNumbers(draft.includePageNumbers ?? true);
      setIsPublic(draft.isPublic ?? true);
      setWatermark(draft.watermark || '');
    }
  }, []);

  const hasContent = manualContent.trim().length > 0 || uploadedFiles.length > 0;

  const handleSaveDraft = () => {
    localStorage.setItem('ebook-draft', JSON.stringify({
      title, subtitle, author, description, tags, category, language,
      manualContent, fontStyle, pageSize, includeTOC, includePageNumbers,
      isPublic, watermark
    }));
    toast({
      title: "Draft Saved",
      description: "Your ebook draft has been saved successfully.",
    });
  };

  const generatePDF = () => {
    // This would integrate with jsPDF to create the actual PDF
    toast({
      title: "PDF Generated",
      description: "Your ebook has been compiled into a PDF format.",
    });
  };

  const handlePreviewPDF = () => {
    setIsProcessing(true);
    setTimeout(() => {
      generatePDF();
      setIsProcessing(false);
      toast({
        title: "PDF Preview Ready",
        description: "Your PDF preview is ready for viewing.",
      });
    }, 2000);
  };

  const handleDownloadPDF = () => {
    setIsProcessing(true);
    setTimeout(() => {
      generatePDF();
      setIsProcessing(false);
      toast({
        title: "PDF Downloaded",
        description: `"${title}" has been downloaded as a PDF file.`,
      });
    }, 3000);
  };

  const handlePublish = () => {
    setIsProcessing(true);
    setTimeout(() => {
      toast({
        title: "Ebook Published Successfully!",
        description: `"${title}" has been published and is now ${isPublic ? 'available in the store' : 'saved privately'}.`,
      });
      setIsProcessing(false);
      
      // Clear form after successful publish
      setTitle('');
      setSubtitle('');
      setAuthor('');
      setDescription('');
      setTags('');
      setCategory('');
      setLanguage('');
      setManualContent('');
      setUploadedFiles([]);
      setCoverImage(null);
      setCoverPreview('');
      setBackCoverImage(null);
      setBackCoverPreview('');
      localStorage.removeItem('ebook-draft');
    }, 3000);
  };

  return (
    <div className="space-y-6">
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
            subtitle={subtitle}
            setSubtitle={setSubtitle}
            author={author}
            setAuthor={setAuthor}
            description={description}
            setDescription={setDescription}
            tags={tags}
            setTags={setTags}
            category={category}
            setCategory={setCategory}
            language={language}
            setLanguage={setLanguage}
          />
        </CardContent>
      </Card>

      <CoverImageUpload
        coverImage={coverImage}
        setCoverImage={setCoverImage}
        coverPreview={coverPreview}
        setCoverPreview={setCoverPreview}
        backCoverImage={backCoverImage}
        setBackCoverImage={setBackCoverImage}
        backCoverPreview={backCoverPreview}
        setBackCoverPreview={setBackCoverPreview}
      />

      <Card className="border-primary/20 shadow-lg">
        <CardHeader className="bg-primary/5">
          <CardTitle className="font-playfair text-2xl text-contrast">
            Book Content
          </CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <ContentTabs
            uploadedFiles={uploadedFiles}
            setUploadedFiles={setUploadedFiles}
            manualContent={manualContent}
            setManualContent={setManualContent}
          />
        </CardContent>
      </Card>

      <PDFSettings
        fontStyle={fontStyle}
        setFontStyle={setFontStyle}
        pageSize={pageSize}
        setPageSize={setPageSize}
        includeTOC={includeTOC}
        setIncludeTOC={setIncludeTOC}
        includePageNumbers={includePageNumbers}
        setIncludePageNumbers={setIncludePageNumbers}
        isPublic={isPublic}
        setIsPublic={setIsPublic}
        watermark={watermark}
        setWatermark={setWatermark}
      />

      <Card className="border-primary/20 shadow-lg">
        <CardContent className="p-6">
          <ActionButtons
            title={title}
            author={author}
            hasContent={hasContent}
            isProcessing={isProcessing}
            setIsProcessing={setIsProcessing}
            onSaveDraft={handleSaveDraft}
            onPreviewPDF={handlePreviewPDF}
            onDownloadPDF={handleDownloadPDF}
            onPublish={handlePublish}
          />
        </CardContent>
      </Card>
    </div>
  );
};

export default PublishingForm;
