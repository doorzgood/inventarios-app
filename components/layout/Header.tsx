'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Package, LogOut } from 'lucide-react';

export function Header() {
  return (
    <header className="border-b border-gray-200 bg-white">
      <div className="flex h-16 items-center justify-between px-6">
        <div className="flex items-center gap-3">
          <Package className="h-6 w-6 text-blue-600" />
          <h1 className="text-xl font-bold text-gray-900">Inventarios</h1>
        </div>
        <Button
          variant="outline"
          size="sm"
          className="gap-2"
          onClick={() => alert('Logout')}
        >
          <LogOut className="h-4 w-4" />
          Salir
        </Button>
      </div>
    </header>
  );
}
