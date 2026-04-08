'use client';

import { useState, useCallback } from 'react';
import { Product, ProductFormData } from '@/lib/types';
import { supabase } from '@/lib/supabase';

export function useProducts() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchProducts = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const { data, error: supabaseError } = await supabase
        .from('products')
        .select('*');

      if (supabaseError) throw supabaseError;
      setProducts(data || []);
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Error al cargar productos';
      setError(message);
    } finally {
      setLoading(false);
    }
  }, []);

  const addProduct = useCallback(async (formData: ProductFormData) => {
    try {
      const { data, error: supabaseError } = await supabase
        .from('products')
        .insert([
          {
            name: formData.name,
            description: formData.description,
            sku: formData.sku,
            quantity: formData.quantity,
            price: formData.price,
            category_id: formData.categoryId || null,
          },
        ])
        .select()
        .single();

      if (supabaseError) throw supabaseError;
      setProducts((prev) => [...prev, data]);
      return data;
    } catch (err) {
      throw err instanceof Error ? err : new Error('Error al agregar producto');
    }
  }, []);

  const updateProduct = useCallback(async (id: string, formData: ProductFormData) => {
    try {
      const { data, error: supabaseError } = await supabase
        .from('products')
        .update({
          name: formData.name,
          description: formData.description,
          sku: formData.sku,
          quantity: formData.quantity,
          price: formData.price,
          category_id: formData.categoryId || null,
          updated_at: new Date().toISOString(),
        })
        .eq('id', id)
        .select()
        .single();

      if (supabaseError) throw supabaseError;
      setProducts((prev) =>
        prev.map((p) => (p.id === id ? data : p))
      );
    } catch (err) {
      throw err instanceof Error ? err : new Error('Error al actualizar producto');
    }
  }, []);

  const deleteProduct = useCallback(async (id: string) => {
    try {
      const { error: supabaseError } = await supabase
        .from('products')
        .delete()
        .eq('id', id);

      if (supabaseError) throw supabaseError;
      setProducts((prev) => prev.filter((p) => p.id !== id));
    } catch (err) {
      throw err instanceof Error ? err : new Error('Error al eliminar producto');
    }
  }, []);

  return {
    products,
    loading,
    error,
    fetchProducts,
    addProduct,
    updateProduct,
    deleteProduct,
  };
}
