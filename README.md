<<<<<<< HEAD
# Inventarios App

Una aplicación moderna de gestión de inventarios construida con Next.js 15, React 19, Tailwind CSS, Shadcn UI, TypeScript y integración con Supabase.

## ✅ Estado del Proyecto

- ✅ **Aplicación funcional** - CRUD completo de productos y categorías
- ✅ **Base de datos configurada** - Supabase con políticas RLS
- ✅ **Interfaz completa** - Dashboard, formularios, tablas
- ✅ **Integración en tiempo real** - Sincronización con Supabase
- 🔄 **Próximos pasos**: GitHub, Vercel, autenticación

## 🚀 Stack Tecnológico

- **Frontend**: Next.js 15, React 19, TypeScript
- **Styling**: Tailwind CSS v4, Shadcn UI
- **Database**: Supabase (PostgreSQL)
- **Deployment**: Vercel
- **Linting**: ESLint
- **Package Manager**: npm

## 📋 Requisitos Previos

- Node.js v24.x o superior
- npm 11.x o superior

## 🛠️ Instalación y Setup

### 1. Clonar el repositorio

```bash
git clone https://github.com/doorzgood/inventarios-app.git
cd inventarios-app
```

### 2. Instalar dependencias

```bash
npm install
```

### 3. Configurar variables de entorno

Crear archivo `.env.local` en la raíz del proyecto:

```env
NEXT_PUBLIC_SUPABASE_URL=https://uprdydrorntlwcluwzza.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=tu_supabase_key
```

## 🏃 Ejecutar la aplicación

### Desarrollo

```bash
npm run dev
```

### Producción

```bash
npm run build
npm start
```

## 📊 Funcionalidades

### Dashboard
- Estadísticas generales (productos totales, stock bajo, valor total, categorías)
- Accesos rápidos a funciones principales

### Gestión de Productos
- Lista de productos con paginación
- Agregar, editar y eliminar productos
- Campos: nombre, descripción, SKU, cantidad, precio, categoría

### Gestión de Categorías
- Lista de categorías
- Agregar, editar y eliminar categorías
- Campos: nombre, descripción

## 🔧 Configuración de Supabase

1. Crear proyecto en [Supabase](https://supabase.com)
2. Ejecutar el SQL del archivo `SUPABASE_SETUP.md`
3. Configurar políticas RLS
4. Actualizar `.env.local` con las credenciales

## 📝 Próximos Pasos

- [ ] Crear repositorio en GitHub
- [ ] Desplegar en Vercel
- [ ] Agregar autenticación de usuarios
- [ ] Implementar búsqueda y filtros
- [ ] Agregar exportación de datos

## 📄 Licencia

Este proyecto es de uso personal/educativo.

## 🏃 Ejecutar la aplicación

### Desarrollo

```bash
npm run dev
```

La aplicación estará disponible en [http://localhost:3000](http://localhost:3000)

### Producción

```bash
npm run build
npm run start
```

### Lint

```bash
npm run lint
```

## 📁 Estructura del Proyecto

```
inventarios-app/
├── app/                 # App Router de Next.js
│   ├── page.tsx        # Página principal
│   └── layout.tsx      # Layout global
├── components/          # Componentes React reutilizables
│   └── ui/             # Componentes Shadcn UI
├── lib/                 # Utilidades y funciones helpers
├── public/             # Archivos estáticos
├── .env.local          # Variables de entorno (no commitar)
├── tsconfig.json       # Configuración de TypeScript
├── tailwind.config.ts  # Configuración de Tailwind CSS
└── components.json     # Configuración de Shadcn UI
```

## 🔧 Configuración de Supabase

1. Crear cuenta en [supabase.com](https://supabase.com)
2. Crear un nuevo proyecto
3. Obtener `SUPABASE_URL` y `SUPABASE_ANON_KEY` del panel de control
4. Agregarlos al archivo `.env.local`

## 🚀 Deploy en Vercel

1. Conectar el repositorio GitHub a Vercel
2. Configurar las variables de entorno en Vercel
3. Deploy automático en cada push a main

Más información: [Vercel Docs](https://vercel.com/docs)

## 📚 Recursos Útiles

- [Documentación Next.js](https://nextjs.org/docs)
- [Documentación Shadcn UI](https://ui.shadcn.com)
- [Documentación Supabase](https://supabase.com/docs)
- [Tailwind CSS](https://tailwindcss.com)

## 🤝 Contribuir

Las contribuciones son bienvenidas. Por favor:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📝 Licencia

Este proyecto está bajo la licencia MIT.

=======
# inventarios-app
>>>>>>> 89b26bd68ef233afb04febc11bf081f7676551c0
