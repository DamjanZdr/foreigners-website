-- Migration: Add support for multiple categories per blog post

-- Step 1: Create a junction table for the many-to-many relationship
CREATE TABLE blog_post_categories (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  post_id UUID NOT NULL REFERENCES blog_posts(id) ON DELETE CASCADE,
  category_id UUID NOT NULL REFERENCES blog_categories(id) ON DELETE CASCADE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(post_id, category_id)
);

-- Step 2: Create index for faster queries
CREATE INDEX idx_blog_post_categories_post_id ON blog_post_categories(post_id);
CREATE INDEX idx_blog_post_categories_category_id ON blog_post_categories(category_id);

-- Step 3: Migrate existing data from blog_posts.category_id to the junction table
INSERT INTO blog_post_categories (post_id, category_id)
SELECT id, category_id 
FROM blog_posts 
WHERE category_id IS NOT NULL;

-- Step 4: You can now optionally drop the old category_id column from blog_posts
-- (Run this only after verifying everything works)
-- ALTER TABLE blog_posts DROP COLUMN category_id;

-- Enable RLS on the new table
ALTER TABLE blog_post_categories ENABLE ROW LEVEL SECURITY;

-- Create RLS policy to allow public read access
CREATE POLICY "Public can view blog post categories"
  ON blog_post_categories
  FOR SELECT
  TO public
  USING (true);