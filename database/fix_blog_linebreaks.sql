-- Fix line breaks in the TRC processing time blog post
-- Run this in Supabase SQL Editor to fix the formatting

UPDATE blog_posts
SET content = REPLACE(content, E'\\n\\n', E'\n\n')
WHERE slug = 'poland-trc-processing-time-how-long-2025';