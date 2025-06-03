
import React from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

interface BookDetailsFormProps {
  title: string;
  setTitle: (title: string) => void;
  author: string;
  setAuthor: (author: string) => void;
  description: string;
  setDescription: (description: string) => void;
}

const BookDetailsForm: React.FC<BookDetailsFormProps> = ({
  title,
  setTitle,
  author,
  setAuthor,
  description,
  setDescription
}) => {
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
