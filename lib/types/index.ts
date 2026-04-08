// Tipos para productos
export interface Product {
  id: string;
  name: string;
  description: string;
  sku: string;
  quantity: number;
  price: number;
  category_id: string | null;
  image?: string;
  created_at: string;
  updated_at: string;
}

export interface ProductFormData {
  name: string;
  description: string;
  sku: string;
  quantity: number;
  price: number;
  categoryId: string;
}

// Tipos para categorías
export interface Category {
  id: string;
  name: string;
  description?: string;
  created_at: string;
  updated_at: string;
}

export interface CategoryFormData {
  name: string;
  description?: string;
}

// Tipos para usuarios
export interface User {
  id: string;
  email: string;
  name: string;
  role: 'admin' | 'user';
  created_at: string;
}

// Tipo para respuestas de API
export interface ApiResponse<T> {
  data?: T;
  error?: string;
  success: boolean;
}

// Tipo para paginación
export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  pageSize: number;
  totalPages: number;
}
