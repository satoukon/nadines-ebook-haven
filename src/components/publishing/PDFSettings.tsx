
import React from 'react';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface PDFSettingsProps {
  fontStyle: string;
  setFontStyle: (font: string) => void;
  pageSize: string;
  setPageSize: (size: string) => void;
  includeTOC: boolean;
  setIncludeTOC: (include: boolean) => void;
  includePageNumbers: boolean;
  setIncludePageNumbers: (include: boolean) => void;
  isPublic: boolean;
  setIsPublic: (isPublic: boolean) => void;
  watermark: string;
  setWatermark: (watermark: string) => void;
}

const PDFSettings: React.FC<PDFSettingsProps> = ({
  fontStyle,
  setFontStyle,
  pageSize,
  setPageSize,
  includeTOC,
  setIncludeTOC,
  includePageNumbers,
  setIncludePageNumbers,
  isPublic,
  setIsPublic,
  watermark,
  setWatermark
}) => {
  const fonts = [
    'Times New Roman', 'Arial', 'Helvetica', 'Georgia', 'Verdana', 'Calibri'
  ];

  const pageSizes = [
    { label: 'A4 (210 × 297 mm)', value: 'a4' },
    { label: 'Letter (8.5 × 11 in)', value: 'letter' },
    { label: 'A5 (148 × 210 mm)', value: 'a5' }
  ];

  return (
    <Card className="border-primary/20">
      <CardHeader>
        <CardTitle className="font-playfair text-xl text-contrast">
          PDF Settings
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label className="text-contrast font-medium">
              Font Style
            </Label>
            <Select value={fontStyle} onValueChange={setFontStyle}>
              <SelectTrigger className="border-primary/30 focus:border-primary">
                <SelectValue placeholder="Select font" />
              </SelectTrigger>
              <SelectContent>
                {fonts.map((font) => (
                  <SelectItem key={font} value={font.toLowerCase().replace(' ', '-')}>
                    {font}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label className="text-contrast font-medium">
              Page Size
            </Label>
            <Select value={pageSize} onValueChange={setPageSize}>
              <SelectTrigger className="border-primary/30 focus:border-primary">
                <SelectValue placeholder="Select page size" />
              </SelectTrigger>
              <SelectContent>
                {pageSizes.map((size) => (
                  <SelectItem key={size.value} value={size.value}>
                    {size.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <Checkbox
              id="toc"
              checked={includeTOC}
              onCheckedChange={setIncludeTOC}
            />
            <Label htmlFor="toc" className="text-contrast">
              Include Table of Contents
            </Label>
          </div>
          
          <div className="flex items-center space-x-2">
            <Checkbox
              id="page-numbers"
              checked={includePageNumbers}
              onCheckedChange={setIncludePageNumbers}
            />
            <Label htmlFor="page-numbers" className="text-contrast">
              Include Page Numbers
            </Label>
          </div>
          
          <div className="flex items-center space-x-2">
            <Checkbox
              id="public"
              checked={isPublic}
              onCheckedChange={setIsPublic}
            />
            <Label htmlFor="public" className="text-contrast">
              Make Public (visible in store)
            </Label>
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="watermark" className="text-contrast font-medium">
            Watermark (optional)
          </Label>
          <Input
            id="watermark"
            value={watermark}
            onChange={(e) => setWatermark(e.target.value)}
            placeholder="Enter watermark text"
            className="border-primary/30 focus:border-primary"
          />
        </div>
      </CardContent>
    </Card>
  );
};

export default PDFSettings;
