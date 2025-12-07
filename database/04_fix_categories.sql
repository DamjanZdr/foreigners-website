-- Update blog categories to match website structure
-- Run this in Supabase SQL Editor

-- First, add sort_order column if it doesn't exist
ALTER TABLE blog_categories ADD COLUMN IF NOT EXISTS sort_order INTEGER DEFAULT 999;

-- Delete old categories that don't match our structure
DELETE FROM blog_categories WHERE slug IN ('legal', 'lifestyle');

-- Insert or update categories to match the correct structure
INSERT INTO blog_categories (name, slug, description, sort_order) VALUES
  ('Immigration', 'immigration', 'Immigration services, visas, and residence permits in Poland', 1),
  ('Driving', 'driving', 'Driving licenses and vehicle registration in Poland', 2),
  ('Language', 'language', 'Translation and language services', 3),
  ('Business', 'business', 'Business setup and entrepreneurship in Poland', 4),
  ('Companies', 'companies', 'Corporate immigration and business services', 5),
  ('Studies', 'studies', 'Student visas and educational services in Poland', 6),
  ('News', 'news', 'Latest immigration news and updates', 7)
ON CONFLICT (slug) 
DO UPDATE SET 
  name = EXCLUDED.name,
  description = EXCLUDED.description,
  sort_order = EXCLUDED.sort_order;