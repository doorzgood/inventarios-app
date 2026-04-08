'use client';

import { useState, useEffect } from 'react';
import { Header } from '@/components/layout/Header';
import { Sidebar } from '@/components/layout/Sidebar';
import { ProductDialog } from '@/components/products/ProductDialog';
import { ProductTable } from '@/components/products/ProductTable';
import { useProducts } from '@/hooks/useProducts';
import { useCategories } from '@/hooks/useCategories';
import { Product, ProductFormData } from '@/lib/types';

export default function ProductsPage() {
  const { products, addProduct, updateProduct, deleteProduct, fetchProducts } =
    useProducts();
  const { categories, fetchCategories } = useCategories();
  const [editingProduct, setEditingProduct] = useState<Product | undefined>();

  useEffect(() => {
    fetchProducts();
    fetchCategories();
  }, [fetchProducts, fetchCategories]);

  const handleAddProduct = async (formData: ProductFormData) => {
    try {
      await addProduct(formData);
      setEditingProduct(undefined);
    } catch (error) {
      console.error('Error al agregar producto:', error);
      alert('Error al agregar producto');
    }
  };

  const handleUpdateProduct = async (formData: ProductFormData) => {
    if (!editingProduct) return;
    try {
      await updateProduct(editingProduct.id, formData);
      setEditingProduct(undefined);
    } catch (error) {
      console.error('Error al actualizar producto:', error);
      alert('Error al actualizar producto');
    }
  };

  const handleDeleteProduct = async (id: string) => {
    if (confirm('¿Estás seguro de que deseas eliminar este producto?')) {
      try {
        await deleteProduct(id);
      } catch (error) {
        console.error('Error al eliminar producto:', error);
        alert('Error al eliminar producto');
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
                <h1 className="text-3xl font-bold text-gray-900">Productos</h1>
                <p className="text-gray-500">
                  Gestiona todos tus productos de inventario
                </p>
              </div>
              <ProductDialog
                onSubmit={
                  editingProduct ? handleUpdateProduct : handleAddProduct
                }
                product={editingProduct}
                categories={categories}
              />
            </div>

            <ProductTable
              products={products}
              onEdit={setEditingProduct}
              onDelete={handleDeleteProduct}
            />
          </div>
        </main>
      </div>
    </div>
  );
}
