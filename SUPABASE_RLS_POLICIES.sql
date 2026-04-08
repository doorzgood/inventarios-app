-- Políticas RLS para tabla categories
-- Permitir SELECT para todos
CREATE POLICY "Enable read access for all users" ON categories FOR SELECT USING (true);

-- Permitir INSERT para todos
CREATE POLICY "Enable insert for all users" ON categories FOR INSERT WITH CHECK (true);

-- Permitir UPDATE para todos
CREATE POLICY "Enable update for all users" ON categories FOR UPDATE USING (true) WITH CHECK (true);

-- Permitir DELETE para todos
CREATE POLICY "Enable delete for all users" ON categories FOR DELETE USING (true);

-- Políticas RLS para tabla products
-- Permitir SELECT para todos
CREATE POLICY "Enable read access for all users" ON products FOR SELECT USING (true);

-- Permitir INSERT para todos
CREATE POLICY "Enable insert for all users" ON products FOR INSERT WITH CHECK (true);

-- Permitir UPDATE para todos
CREATE POLICY "Enable update for all users" ON products FOR UPDATE USING (true) WITH CHECK (true);

-- Permitir DELETE para todos
CREATE POLICY "Enable delete for all users" ON products FOR DELETE USING (true);