-- Add sort_order column and set category order
-- Run this in Supabase SQL Editor

-- Add sort_order column if it doesn't exist
ALTER TABLE blog_categories ADD COLUMN IF NOT EXISTS sort_order INTEGER DEFAULT 999;

-- Set custom order: Immigration, Driving, Language, Business, Studies, News
UPDATE blog_categories SET sort_order = 1 WHERE slug = 'immigration';
UPDATE blog_categories SET sort_order = 2 WHERE slug = 'driving';
UPDATE blog_categories SET sort_order = 3 WHERE slug = 'language';
UPDATE blog_categories SET sort_order = 4 WHERE slug = 'business';
UPDATE blog_categories SET sort_order = 5 WHERE slug = 'companies';
UPDATE blog_categories SET sort_order = 6 WHERE slug = 'studies';
UPDATE blog_categories SET sort_order = 7 WHERE slug = 'news';