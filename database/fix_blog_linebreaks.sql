-- Fix blog post formatting: convert step headings to bold text
-- Changes "### Step 1: Title" to "**Step 1: Title**"
-- Run this in Supabase SQL Editor

UPDATE blog_posts
SET content = REGEXP_REPLACE(
  content, 
  '###\s*(Step \d+: [^\n]+)',
  '**\1**',
  'g'
);