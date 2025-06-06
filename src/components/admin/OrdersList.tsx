
import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';

// Mock orders data - in a real app this would come from your database
const mockOrders = [
  {
    id: 'ORD-001',
    customerEmail: 'john.doe@example.com',
    ebookTitle: 'The Art of Digital Storytelling',
    amount: 24.99,
    paymentStatus: 'completed',
    orderDate: '2024-01-15',
    downloadCount: 3
  },
  {
    id: 'ORD-002',
    customerEmail: 'jane.smith@example.com',
    ebookTitle: 'Creative Writing Mastery',
    amount: 19.99,
    paymentStatus: 'completed',
    orderDate: '2024-01-14',
    downloadCount: 1
  },
  {
    id: 'ORD-003',
    customerEmail: 'bob.wilson@example.com',
    ebookTitle: 'Modern Poetry Collection',
    amount: 16.99,
    paymentStatus: 'pending',
    orderDate: '2024-01-13',
    downloadCount: 0
  },
  {
    id: 'ORD-004',
    customerEmail: 'alice.brown@example.com',
    ebookTitle: 'The Art of Digital Storytelling',
    amount: 24.99,
    paymentStatus: 'completed',
    orderDate: '2024-01-12',
    downloadCount: 5
  }
];

const OrdersList = () => {
  const [orders] = useState(mockOrders);

  const getStatusBadge = (status: string) => {
    const statusConfig = {
      completed: { 
        style: { backgroundColor: '#F9C5D1', color: '#0F0F0F' },
        text: 'Completed'
      },
      pending: { 
        style: { backgroundColor: '#EAC8C4', color: '#0F0F0F' },
        text: 'Pending'
      },
      failed: { 
        style: { backgroundColor: '#ffcdd2', color: '#0F0F0F' },
        text: 'Failed'
      }
    };

    const config = statusConfig[status as keyof typeof statusConfig] || statusConfig.pending;
    
    return (
      <span 
        className="px-2 py-1 rounded-full text-xs font-medium"
        style={config.style}
      >
        {config.text}
      </span>
    );
  };

  const totalRevenue = orders
    .filter(order => order.paymentStatus === 'completed')
    .reduce((sum, order) => sum + order.amount, 0);

  return (
    <div className="space-y-6">
      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-4 rounded-lg border-2" style={{ borderColor: '#EAC8C4', backgroundColor: 'white' }}>
          <h3 className="font-semibold text-sm" style={{ color: '#0F0F0F' }}>Total Orders</h3>
          <p className="text-2xl font-bold" style={{ color: '#E6B7B0' }}>{orders.length}</p>
        </div>
        <div className="p-4 rounded-lg border-2" style={{ borderColor: '#EAC8C4', backgroundColor: 'white' }}>
          <h3 className="font-semibold text-sm" style={{ color: '#0F0F0F' }}>Completed Orders</h3>
          <p className="text-2xl font-bold" style={{ color: '#E6B7B0' }}>
            {orders.filter(o => o.paymentStatus === 'completed').length}
          </p>
        </div>
        <div className="p-4 rounded-lg border-2" style={{ borderColor: '#EAC8C4', backgroundColor: 'white' }}>
          <h3 className="font-semibold text-sm" style={{ color: '#0F0F0F' }}>Total Revenue</h3>
          <p className="text-2xl font-bold" style={{ color: '#E6B7B0' }}>${totalRevenue.toFixed(2)}</p>
        </div>
      </div>

      {/* Orders Table */}
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead style={{ color: '#0F0F0F' }}>Order ID</TableHead>
              <TableHead style={{ color: '#0F0F0F' }}>Customer Email</TableHead>
              <TableHead style={{ color: '#0F0F0F' }}>Ebook</TableHead>
              <TableHead style={{ color: '#0F0F0F' }}>Amount</TableHead>
              <TableHead style={{ color: '#0F0F0F' }}>Status</TableHead>
              <TableHead style={{ color: '#0F0F0F' }}>Date</TableHead>
              <TableHead style={{ color: '#0F0F0F' }}>Downloads</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {orders.map((order) => (
              <TableRow key={order.id}>
                <TableCell className="font-medium" style={{ color: '#0F0F0F' }}>
                  {order.id}
                </TableCell>
                <TableCell style={{ color: '#0F0F0F' }}>
                  {order.customerEmail}
                </TableCell>
                <TableCell style={{ color: '#0F0F0F' }}>
                  {order.ebookTitle}
                </TableCell>
                <TableCell style={{ color: '#0F0F0F' }}>
                  ${order.amount}
                </TableCell>
                <TableCell>
                  {getStatusBadge(order.paymentStatus)}
                </TableCell>
                <TableCell style={{ color: '#0F0F0F' }}>
                  {new Date(order.orderDate).toLocaleDateString()}
                </TableCell>
                <TableCell style={{ color: '#0F0F0F' }}>
                  {order.downloadCount}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default OrdersList;
