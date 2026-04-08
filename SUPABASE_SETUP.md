# Guía para Crear Tablas en Supabase

## 1. Abre el Editor SQL de Supabase

1. Ve a [https://app.supabase.com](https://app.supabase.com)
2. Selecciona tu proyecto
3. En el menú izquierdo, haz clic en **"SQL Editor"**
4. Haz clic en **"New query"**

## 2. Copia y Ejecuta el SQL

```sql
-- Crear tabla de categorías
CREATE TABLE IF NOT EXISTS categories (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name VARCHAR(255) NOT NULL,
  description TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Crear tabla de productos
CREATE TABLE IF NOT EXISTS products (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name VARCHAR(255) NOT NULL,
  description TEXT,
  sku VARCHAR(255) UNIQUE NOT NULL,
  quantity INTEGER DEFAULT 0,
  price DECIMAL(10, 2) NOT NULL,
  category_id UUID REFERENCES categories(id) ON DELETE SET NULL,
  image VARCHAR(255),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Crear índices
CREATE INDEX IF NOT EXISTS idx_products_category ON products(category_id);
CREATE INDEX IF NOT EXISTS idx_products_sku ON products(sku);
```

## 3. Habilitar RLS (Row Level Security)

En el menú izquierdo:
1. Ve a **"Authentication" > "Policies"**
2. Selecciona tabla **"products"** y haz clic en **"Enable RLS"**
3. Luego haz lo mismo para **"categories"**

## 4. Crear Políticas de Acceso

Para que todos puedan leer (sin autenticación por ahora):

```sql
-- Para tabla products
CREATE POLICY "Enable read access for all users" ON products
  FOR SELECT USING (true);

CREATE POLICY "Enable insert for all users" ON products
  FOR INSERT WITH CHECK (true);

CREATE POLICY "Enable update for all users" ON products
  FOR UPDATE USING (true) WITH CHECK (true);

CREATE POLICY "Enable delete for all users" ON products
  FOR DELETE USING (true);

-- Para tabla categories
CREATE POLICY "Enable read access for all users" ON categories
  FOR SELECT USING (true);

CREATE POLICY "Enable insert for all users" ON categories
  FOR INSERT WITH CHECK (true);

CREATE POLICY "Enable update for all users" ON categories
  FOR UPDATE USING (true) WITH CHECK (true);

CREATE POLICY "Enable delete for all users" ON categories
  FOR DELETE USING (true);
```

¡Listo! Tus tablas están creadas en Supabase.
