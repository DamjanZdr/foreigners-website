# Multiple Categories Support - Implementation Guide

## Current Status
Your blog currently supports **one category per post** using the `category_id` column in `blog_posts` table.

## To Enable Multiple Categories

### Step 1: Run Database Migration
Copy and run `database/02_multiple_categories_support.sql` in Supabase SQL Editor. This will:
- Create `blog_post_categories` junction table
- Migrate existing single-category data
- Set up indexes and RLS policies

### Step 2: Update ChatGPT Prompt (Optional)
If you want ChatGPT to assign multiple categories, update `CHATGPT_ARTICLE_GENERATOR.md`:

**Change from:**
```
5. **Select the best category** from the available ones
```

**To:**
```
5. **Select 1-3 relevant categories** from the available ones (choose the most fitting)
```

**Update SQL INSERT format from:**
```sql
category_id,
...
(SELECT id FROM blog_categories WHERE slug = 'category-name'),
```

**To:**
```sql
-- Leave category_id NULL or remove it
-- Instead, add this after the main INSERT:

-- Insert multiple categories
INSERT INTO blog_post_categories (post_id, category_id)
VALUES 
  ((SELECT id FROM blog_posts WHERE slug = ''your-post-slug''), (SELECT id FROM blog_categories WHERE slug = ''immigration'')),
  ((SELECT id FROM blog_posts WHERE slug = ''your-post-slug''), (SELECT id FROM blog_categories WHERE slug = ''legal''));
```

### Step 3: Update Blog Query Functions

**For blog listing pages**, update queries to fetch all categories:

```typescript
const { data } = await supabase
  .from(''blog_posts'')
  .select(`
    *,
    category:blog_categories(id, name, slug),
    categories:blog_post_categories(
      category:blog_categories(id, name, slug)
    )
  `)
  .eq(''status'', ''published'')
  .order(''published_at'', { ascending: false });
```

**For single post page**, same query structure applies.

### Step 4: Update UI Components

**Update `BlogCard.tsx` to show multiple categories:**
```typescript
{post.categories && post.categories.length > 0 ? (
  <div className="flex gap-2">
    {post.categories.map((cat) => (
      <Link 
        key={cat.category.id}
        href={`/blog/category/${cat.category.slug}`}
        className="px-2 py-1 rounded-full bg-red-50 text-red-600 text-xs"
      >
        {cat.category.name}
      </Link>
    ))}
  </div>
) : post.category && (
  // Fallback for old single-category posts
  <Link href={`/blog/category/${post.category.slug}`}>
    {post.category.name}
  </Link>
)}
```

**Update `BlogPostContent.tsx` similarly.**

### Step 5: Category Filter Pages

For `/blog/category/[category]` pages, the query stays similar:

```typescript
const { data } = await supabase
  .from(''blog_posts'')
  .select(`
    *,
    categories:blog_post_categories!inner(
      category:blog_categories!inner(id, name, slug)
    )
  `)
  .eq(''categories.category.slug'', categorySlug)
  .eq(''status'', ''published'');
```

## Recommendation for Your Use Case

Since you''re just starting your blog and using ChatGPT to generate articles:

**Option A - Keep Single Category (Simpler)**
- Don''t run the migration
- Keep current setup
- Choose ONE best-fit category per article
- Less complexity in queries and UI

**Option B - Enable Multiple Categories (More Flexible)**
- Run the migration script
- Update queries and UI
- Manually insert into `blog_post_categories` table after ChatGPT generates posts
- Better for articles that genuinely fit multiple topics (e.g., "Work Permit for Entrepreneurs"  Immigration + Business)

## Manual Multiple Category Insert

If you run the migration and want to add multiple categories to a post:

```sql
-- First, insert the blog post (ChatGPT generates this)
INSERT INTO blog_posts (...) VALUES (...);

-- Then, manually add multiple categories
INSERT INTO blog_post_categories (post_id, category_id)
VALUES 
  ((SELECT id FROM blog_posts WHERE slug = ''your-post-slug''), 
   (SELECT id FROM blog_categories WHERE slug = ''immigration'')),
  ((SELECT id FROM blog_posts WHERE slug = ''your-post-slug''), 
   (SELECT id FROM blog_categories WHERE slug = ''business''));
```

## My Recommendation

**Start simple**: Keep single category for now. Most blog articles have one primary topic. If you find yourself consistently wanting multiple categories later, then migrate.

The migration script is ready when you need it!