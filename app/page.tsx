'use client';

import { useState, useEffect } from 'react';
import { Dashboard } from '@/components/dashboard/Dashboard';
import { Header } from '@/components/layout/Header';
import { Sidebar } from '@/components/layout/Sidebar';
import { useProducts } from '@/hooks/useProducts';
import { useCategories } from '@/hooks/useCategories';

export default function Home() {
  const { products, fetchProducts } = useProducts();
  const { categories, fetchCategories } = useCategories();
  const [stats, setStats] = useState({
    totalProducts: 0,
    lowStockItems: 0,
    totalValue: 0,
    categories: 0,
  });

  useEffect(() => {
    fetchProducts();
    fetchCategories();
  }, [fetchProducts, fetchCategories]);

  useEffect(() => {
    const lowStock = products.filter((p) => p.quantity < 5).length;
    const totalValue = products.reduce((sum, p) => sum + p.price * p.quantity, 0);

    setStats({
      totalProducts: products.length,
      lowStockItems: lowStock,
      totalValue,
      categories: categories.length,
    });
  }, [products, categories]);

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="flex-1 p-6">
          <Dashboard stats={stats} />
        </main>
      </div>
    </div>
  );
}
