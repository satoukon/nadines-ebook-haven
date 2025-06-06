
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Edit, Trash2, Eye } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

// Mock data - in a real app this would come from your database
const mockEbooks = [
  {
    id: 1,
    title: "The Art of Digital Storytelling",
    price: 24.99,
    category: "writing",
    status: "published",
    sales: 45
  },
  {
    id: 2,
    title: "Creative Writing Mastery",
    price: 19.99,
    category: "writing",
    status: "published",
    sales: 32
  },
  {
    id: 3,
    title: "Modern Poetry Collection",
    price: 16.99,
    category: "poetry",
    status: "published",
    sales: 28
  }
];

const EbooksList = () => {
  const [ebooks, setEbooks] = useState(mockEbooks);
  const { toast } = useToast();

  const handleDelete = (id: number) => {
    if (window.confirm('Are you sure you want to delete this ebook?')) {
      setEbooks(ebooks.filter(ebook => ebook.id !== id));
      toast({
        title: "Ebook deleted",
        description: "The ebook has been removed from your catalog.",
      });
    }
  };

  const handleEdit = (id: number) => {
    toast({
      title: "Edit functionality",
      description: "Edit form would open here in a real implementation.",
    });
  };

  const handleView = (id: number) => {
    toast({
      title: "View ebook",
      description: "Ebook preview would open here in a real implementation.",
    });
  };

  return (
    <div className="space-y-4">
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead style={{ color: '#0F0F0F' }}>Title</TableHead>
              <TableHead style={{ color: '#0F0F0F' }}>Category</TableHead>
              <TableHead style={{ color: '#0F0F0F' }}>Price</TableHead>
              <TableHead style={{ color: '#0F0F0F' }}>Sales</TableHead>
              <TableHead style={{ color: '#0F0F0F' }}>Status</TableHead>
              <TableHead style={{ color: '#0F0F0F' }}>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {ebooks.map((ebook) => (
              <TableRow key={ebook.id}>
                <TableCell className="font-medium" style={{ color: '#0F0F0F' }}>
                  {ebook.title}
                </TableCell>
                <TableCell style={{ color: '#0F0F0F' }}>
                  <span className="capitalize">{ebook.category}</span>
                </TableCell>
                <TableCell style={{ color: '#0F0F0F' }}>
                  ${ebook.price}
                </TableCell>
                <TableCell style={{ color: '#0F0F0F' }}>
                  {ebook.sales}
                </TableCell>
                <TableCell>
                  <span 
                    className="px-2 py-1 rounded-full text-xs font-medium"
                    style={{ 
                      backgroundColor: '#F9C5D1', 
                      color: '#0F0F0F' 
                    }}
                  >
                    {ebook.status}
                  </span>
                </TableCell>
                <TableCell>
                  <div className="flex space-x-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleView(ebook.id)}
                      className="border"
                      style={{ borderColor: '#EAC8C4' }}
                    >
                      <Eye className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleEdit(ebook.id)}
                      className="border hover:text-white"
                      style={{ 
                        borderColor: '#E6B7B0',
                        color: '#E6B7B0'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = '#E6B7B0';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = 'transparent';
                      }}
                    >
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleDelete(ebook.id)}
                      className="border border-red-300 text-red-600 hover:bg-red-50"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default EbooksList;
