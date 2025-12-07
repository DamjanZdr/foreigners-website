# Blog Quick Start

## What You Need To Do:

1. **Run SQL in Supabase:**
   - Open Supabase Dashboard  SQL Editor
   - Copy/paste contents of database/02_blog_tables.sql
   - Click Run
   - Done! (Creates blog_posts and blog_categories tables)

2. **Add a Blog Post:**
   - Go to Supabase  Table Editor  blog_posts
   - Click Insert Row
   - Fill in:
     - title: Your blog post title
     - slug: url-friendly-version
     - content: Your article in Markdown
     - status: published
     - published_at: Select today
     - category_id: Pick a category (optional)
   - Click Save

3. **View Your Blog:**
   - Visit http://localhost:3000/blog
   - Your posts appear automatically!
   - Author shows as FOREIGNERS.pl

## Markdown Formatting:

Write your content like this:

## Heading
**Bold text** and *italic text*

- Bullet point 1
- Bullet point 2

1. Numbered item
2. Another item

[Link text](https://example.com)

> Quote or important note

Thats it! Super simple.
