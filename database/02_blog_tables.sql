-- Blog System Database Tables
-- Run this in Supabase SQL Editor

-- 1. BLOG CATEGORIES TABLE
CREATE TABLE IF NOT EXISTS blog_categories (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name VARCHAR(100) UNIQUE NOT NULL,
  slug VARCHAR(100) UNIQUE NOT NULL,
  description TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 2. BLOG POSTS TABLE
CREATE TABLE IF NOT EXISTS blog_posts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title VARCHAR(255) NOT NULL,
  slug VARCHAR(255) UNIQUE NOT NULL,
  excerpt TEXT,
  content TEXT NOT NULL,
  featured_image VARCHAR(500),
  category_id UUID REFERENCES blog_categories(id) ON DELETE SET NULL,
  tags TEXT[],
  meta_title VARCHAR(255),
  meta_description TEXT,
  focus_keyword VARCHAR(100),
  status VARCHAR(20) DEFAULT 'draft' CHECK (status IN ('draft', 'published')),
  published_at TIMESTAMP WITH TIME ZONE,
  view_count INTEGER DEFAULT 0,
  reading_time_minutes INTEGER,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- INDEXES
CREATE INDEX IF NOT EXISTS idx_blog_posts_slug ON blog_posts(slug);
CREATE INDEX IF NOT EXISTS idx_blog_posts_status ON blog_posts(status);
CREATE INDEX IF NOT EXISTS idx_blog_posts_category ON blog_posts(category_id);
CREATE INDEX IF NOT EXISTS idx_blog_posts_published_at ON blog_posts(published_at DESC);

-- RLS POLICIES
ALTER TABLE blog_categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;

-- Drop existing policies if they exist (for re-running)
DROP POLICY IF EXISTS service_role_categories ON blog_categories;
DROP POLICY IF EXISTS service_role_posts ON blog_posts;
DROP POLICY IF EXISTS public_read_categories ON blog_categories;
DROP POLICY IF EXISTS public_read_published ON blog_posts;

-- Service role full access
CREATE POLICY service_role_categories ON blog_categories FOR ALL USING (true);
CREATE POLICY service_role_posts ON blog_posts FOR ALL USING (true);

-- Public read access
CREATE POLICY public_read_categories ON blog_categories FOR SELECT USING (true);
CREATE POLICY public_read_published ON blog_posts FOR SELECT USING (status = 'published');

-- Auto-update timestamp function
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Triggers
DROP TRIGGER IF EXISTS update_blog_posts_updated_at ON blog_posts;
CREATE TRIGGER update_blog_posts_updated_at BEFORE UPDATE ON blog_posts FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- Default categories
INSERT INTO blog_categories (name, slug, description) VALUES
  ('Immigration', 'immigration', 'Articles about immigration, visas, and residence permits'),
  ('Business', 'business', 'Business setup and entrepreneurship in Poland'),
  ('Legal', 'legal', 'Legal advice and regulations'),
  ('Lifestyle', 'lifestyle', 'Living and lifestyle in Poland'),
  ('News', 'news', 'Latest news and updates')
ON CONFLICT (slug) DO NOTHING;
