'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Category, CategoryFormData } from '@/lib/types';

interface CategoryFormProps {
  onSubmit: (data: CategoryFormData) => Promise<void>;
  category?: Category;
  loading?: boolean;
}

export function CategoryForm({
  onSubmit,
  category,
  loading = false,
}: CategoryFormProps) {
  const [formData, setFormData] = useState<CategoryFormData>({
    name: category?.name || '',
    description: category?.description || '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="name">Nombre de la Categoría</Label>
        <Input
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Ej: Electrónica"
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="description">Descripción</Label>
        <Input
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Descripción de la categoría"
        />
      </div>

      <Button type="submit" disabled={loading} className="w-full">
        {loading ? 'Guardando...' : 'Guardar Categoría'}
      </Button>
    </form>
  );
}
