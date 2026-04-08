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
import { CategoryForm } from './CategoryForm';
import { Category, CategoryFormData } from '@/lib/types';
import { Plus } from 'lucide-react';

interface CategoryDialogProps {
  onSubmit: (data: CategoryFormData) => Promise<void>;
  category?: Category;
}

export function CategoryDialog({ onSubmit, category }: CategoryDialogProps) {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (data: CategoryFormData) => {
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
          {category ? 'Editar' : 'Nueva Categoría'}
        </button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            {category ? 'Editar Categoría' : 'Nueva Categoría'}
          </DialogTitle>
          <DialogDescription>
            {category
              ? 'Actualiza la información de la categoría'
              : 'Crea una nueva categoría para organizar productos'}
          </DialogDescription>
        </DialogHeader>
        <CategoryForm
          onSubmit={handleSubmit}
          category={category}
          loading={loading}
        />
      </DialogContent>
    </Dialog>
  );
}
