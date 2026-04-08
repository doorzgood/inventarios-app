'use client';

import { Card } from '@/components/ui/card';
import { Package, AlertCircle, DollarSign, TrendingUp } from 'lucide-react';

interface DashboardStats {
  totalProducts: number;
  lowStockItems: number;
  totalValue: number;
  categories: number;
}

interface DashboardProps {
  stats: DashboardStats;
}

export function Dashboard({ stats }: DashboardProps) {
  const statCards = [
    {
      title: 'Total de Productos',
      value: stats.totalProducts,
      icon: Package,
      color: 'bg-blue-100 text-blue-600',
    },
    {
      title: 'Stock Bajo',
      value: stats.lowStockItems,
      icon: AlertCircle,
      color: 'bg-red-100 text-red-600',
    },
    {
      title: 'Valor Total',
      value: `$${stats.totalValue.toFixed(2)}`,
      icon: DollarSign,
      color: 'bg-green-100 text-green-600',
    },
    {
      title: 'Categorías',
      value: stats.categories,
      icon: TrendingUp,
      color: 'bg-purple-100 text-purple-600',
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-500">Bienvenido al sistema de inventarios</p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        {statCards.map((card, index) => {
          const Icon = card.icon;
          return (
            <Card key={index} className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">
                    {card.title}
                  </p>
                  <p className="mt-2 text-3xl font-bold text-gray-900">
                    {card.value}
                  </p>
                </div>
                <div className={`rounded-lg p-3 ${card.color}`}>
                  <Icon className="h-6 w-6" />
                </div>
              </div>
            </Card>
          );
        })}
      </div>

      <Card className="p-6">
        <h2 className="mb-4 text-xl font-bold text-gray-900">
          Acciones Rápidas
        </h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          <div className="rounded-lg border border-dashed border-gray-300 p-4 text-center">
            <Package className="mx-auto h-8 w-8 text-gray-400" />
            <p className="mt-2 font-medium text-gray-600">Ver Productos</p>
          </div>
          <div className="rounded-lg border border-dashed border-gray-300 p-4 text-center">
            <AlertCircle className="mx-auto h-8 w-8 text-gray-400" />
            <p className="mt-2 font-medium text-gray-600">Stock Bajo</p>
          </div>
          <div className="rounded-lg border border-dashed border-gray-300 p-4 text-center">
            <TrendingUp className="mx-auto h-8 w-8 text-gray-400" />
            <p className="mt-2 font-medium text-gray-600">Reportes</p>
          </div>
        </div>
      </Card>
    </div>
  );
}
