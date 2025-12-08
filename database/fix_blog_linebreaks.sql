-- Revert blog post formatting: remove double asterisks from step labels
-- This removes the ** that are showing as literal text
-- Run this in Supabase SQL Editor

UPDATE blog_posts
SET content = REGEXP_REPLACE(
  content, 
  '\*\*(Step \d+: [^\n]+)\*\*',
  '\1',
  'g'
);