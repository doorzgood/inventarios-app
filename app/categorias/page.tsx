'use client';

import { useState, useEffect } from 'react';
import { Header } from '@/components/layout/Header';
import { Sidebar } from '@/components/layout/Sidebar';
import { CategoryDialog } from '@/components/categories/CategoryDialog';
import { CategoryTable } from '@/components/categories/CategoryTable';
import { useCategories } from '@/hooks/useCategories';
import { Category, CategoryFormData } from '@/lib/types';

export default function CategoriesPage() {
  const {
    categories,
    addCategory,
    updateCategory,
    deleteCategory,
    fetchCategories,
  } = useCategories();
  const [editingCategory, setEditingCategory] = useState<Category | undefined>();

  useEffect(() => {
    fetchCategories();
  }, [fetchCategories]);

  const handleAddCategory = async (formData: CategoryFormData) => {
    try {
      await addCategory(formData);
      setEditingCategory(undefined);
    } catch (error) {
      console.error('Error al agregar categoría:', error);
      const message = error instanceof Error ? error.message : 'Error al agregar categoría';
      alert(message);
    }
  };

  const handleUpdateCategory = async (formData: CategoryFormData) => {
    if (!editingCategory) return;
    try {
      await updateCategory(editingCategory.id, formData);
      setEditingCategory(undefined);
    } catch (error) {
      console.error('Error al actualizar categoría:', error);
      alert('Error al actualizar categoría');
    }
  };

  const handleDeleteCategory = async (id: string) => {
    if (confirm('¿Estás seguro de que deseas eliminar esta categoría?')) {
      try {
        await deleteCategory(id);
      } catch (error) {
        console.error('Error al eliminar categoría:', error);
        alert('Error al eliminar categoría');
      }
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="flex-1 p-6">
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold text-gray-900">Categorías</h1>
                <p className="text-gray-500">
                  Organiza tus productos por categorías
                </p>
              </div>
              <CategoryDialog
                onSubmit={
                  editingCategory ? handleUpdateCategory : handleAddCategory
                }
                category={editingCategory}
              />
            </div>

            <CategoryTable
              categories={categories}
              onEdit={setEditingCategory}
              onDelete={handleDeleteCategory}
            />
          </div>
        </main>
      </div>
    </div>
  );
}
