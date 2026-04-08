'use client';

import { Header } from '@/components/layout/Header';
import { Sidebar } from '@/components/layout/Sidebar';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default function ConfigPage() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="flex-1 p-6">
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Configuración</h1>
              <p className="text-gray-500">Gestiona la configuración de la aplicación</p>
            </div>

            <div className="grid gap-6">
              <Card className="p-6">
                <h2 className="mb-4 text-xl font-bold text-gray-900">
                  Configuración General
                </h2>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Nombre de la Empresa
                    </label>
                    <input
                      type="text"
                      className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2"
                      placeholder="Ej: Mi Empresa"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Email de Contacto
                    </label>
                    <input
                      type="email"
                      className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2"
                      placeholder="contacto@empresa.com"
                    />
                  </div>
                  <Button className="w-full">Guardar Cambios</Button>
                </div>
              </Card>

              <Card className="p-6">
                <h2 className="mb-4 text-xl font-bold text-gray-900">
                  Preferencias
                </h2>
                <div className="space-y-4">
                  <label className="flex items-center gap-3">
                    <input type="checkbox" className="rounded" defaultChecked />
                    <span className="text-sm text-gray-700">
                      Notificaciones por email
                    </span>
                  </label>
                  <label className="flex items-center gap-3">
                    <input type="checkbox" className="rounded" defaultChecked />
                    <span className="text-sm text-gray-700">
                      Alertas de stock bajo
                    </span>
                  </label>
                </div>
              </Card>

              <Card className="p-6">
                <h2 className="mb-4 text-xl font-bold text-gray-900">
                  Peligro
                </h2>
                <Button variant="destructive" className="w-full">
                  Eliminar Todos los Datos
                </Button>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
