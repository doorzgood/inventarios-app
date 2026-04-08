'use client';

import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { ProductForm } from './ProductForm';
import { Product, ProductFormData } from '@/lib/types';
import { Plus } from 'lucide-react';

interface ProductDialogProps {
  onSubmit: (data: ProductFormData) => Promise<void>;
  product?: Product;
  categories: Array<{ id: string; name: string }>;
}

export function ProductDialog({
  onSubmit,
  product,
  categories,
}: ProductDialogProps) {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (data: ProductFormData) => {
    setLoading(true);
    try {
      await onSubmit(data);
      setOpen(false);
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <button className="inline-flex items-center justify-center gap-2 rounded-md bg-black text-white px-4 py-2 text-sm font-medium hover:bg-gray-900">
          <Plus className="h-4 w-4" />
          {product ? 'Editar' : 'Nuevo Producto'}
        </button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            {product ? 'Editar Producto' : 'Nuevo Producto'}
          </DialogTitle>
          <DialogDescription>
            {product
              ? 'Actualiza la información del producto'
              : 'Crea un nuevo producto en el inventario'}
          </DialogDescription>
        </DialogHeader>
        <ProductForm
          onSubmit={handleSubmit}
          product={product}
          categories={categories}
          loading={loading}
        />
      </DialogContent>
    </Dialog>
  );
}
