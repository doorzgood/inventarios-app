'use client';

import { useState, useCallback } from 'react';
import { Category, CategoryFormData } from '@/lib/types';
import { supabase } from '@/lib/supabase';

export function useCategories() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchCategories = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const { data, error: supabaseError } = await supabase
        .from('categories')
        .select('*');

      if (supabaseError) throw supabaseError;
      setCategories(data || []);
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Error al cargar categorías';
      setError(message);
    } finally {
      setLoading(false);
    }
  }, []);

  const addCategory = useCallback(async (formData: CategoryFormData) => {
    try {
      const { data, error: supabaseError } = await supabase
        .from('categories')
        .insert([
          {
            name: formData.name,
            description: formData.description || null,
          },
        ])
        .select()
        .single();

      if (supabaseError) throw supabaseError;
      setCategories((prev) => [...prev, data]);
      return data;
    } catch (err) {
      console.error('useCategories addCategory error:', err);
      throw err instanceof Error ? err : new Error('Error al agregar categoría');
    }
  }, []);

  const updateCategory = useCallback(async (id: string, formData: CategoryFormData) => {
    try {
      const { data, error: supabaseError } = await supabase
        .from('categories')
        .update({
          name: formData.name,
          description: formData.description || null,
          updated_at: new Date().toISOString(),
        })
        .eq('id', id)
        .select()
        .single();

      if (supabaseError) throw supabaseError;
      setCategories((prev) =>
        prev.map((c) => (c.id === id ? data : c))
      );
    } catch (err) {
      throw err instanceof Error ? err : new Error('Error al actualizar categoría');
    }
  }, []);

  const deleteCategory = useCallback(async (id: string) => {
    try {
      const { error: supabaseError } = await supabase
        .from('categories')
        .delete()
        .eq('id', id);

      if (supabaseError) throw supabaseError;
      setCategories((prev) => prev.filter((c) => c.id !== id));
    } catch (err) {
      throw err instanceof Error ? err : new Error('Error al eliminar categoría');
    }
  }, []);

  return {
    categories,
    loading,
    error,
    fetchCategories,
    addCategory,
    updateCategory,
    deleteCategory,
  };
}
