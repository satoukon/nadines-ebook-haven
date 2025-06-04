
import React from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

interface BookDetailsFormProps {
  title: string;
  setTitle: (title: string) => void;
  subtitle: string;
  setSubtitle: (subtitle: string) => void;
  author: string;
  setAuthor: (author: string) => void;
  description: string;
  setDescription: (description: string) => void;
  tags: string;
  setTags: (tags: string) => void;
  category: string;
  setCategory: (category: string) => void;
  language: string;
  setLanguage: (language: string) => void;
}

const BookDetailsForm: React.FC<BookDetailsFormProps> = ({
  title,
  setTitle,
  subtitle,
  setSubtitle,
  author,
  setAuthor,
  description,
  setDescription,
  tags,
  setTags,
  category,
  setCategory,
  language,
  setLanguage
}) => {
  const categories = [
    'Fiction', 'Non-Fiction', 'Biography', 'Business', 'Self-Help', 
    'Technology', 'Science', 'Health', 'Romance', 'Mystery', 'Fantasy'
  ];

  const languages = [
    'English', 'Spanish', 'French', 'German', 'Italian', 'Portuguese', 'Chinese', 'Japanese'
  ];

  return (
    <>
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
          <Label htmlFor="subtitle" className="text-contrast font-medium">
            Subtitle
          </Label>
          <Input
            id="subtitle"
            value={subtitle}
            onChange={(e) => setSubtitle(e.target.value)}
            placeholder="Enter subtitle (optional)"
            className="border-primary/30 focus:border-primary"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
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
        <div className="space-y-2">
          <Label htmlFor="tags" className="text-contrast font-medium">
            Tags
          </Label>
          <Input
            id="tags"
            value={tags}
            onChange={(e) => setTags(e.target.value)}
            placeholder="Enter tags separated by commas"
            className="border-primary/30 focus:border-primary"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label className="text-contrast font-medium">
            Category *
          </Label>
          <Select value={category} onValueChange={setCategory}>
            <SelectTrigger className="border-primary/30 focus:border-primary">
              <SelectValue placeholder="Select a category" />
            </SelectTrigger>
            <SelectContent>
              {categories.map((cat) => (
                <SelectItem key={cat} value={cat.toLowerCase()}>
                  {cat}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label className="text-contrast font-medium">
            Language *
          </Label>
          <Select value={language} onValueChange={setLanguage}>
            <SelectTrigger className="border-primary/30 focus:border-primary">
              <SelectValue placeholder="Select language" />
            </SelectTrigger>
            <SelectContent>
              {languages.map((lang) => (
                <SelectItem key={lang} value={lang.toLowerCase()}>
                  {lang}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="description" className="text-contrast font-medium">
          Description
        </Label>
        <Textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Brief description of your book"
          className="border-primary/30 focus:border-primary min-h-[100px]"
        />
      </div>
    </>
  );
};

export default BookDetailsForm;
