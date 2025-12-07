# Blog Post Image Guide

## How to Add Images to Your Blog Posts

### Method 1: Inline Images in Content (RECOMMENDED)

Add images directly in your markdown content using this syntax:

```markdown
![Image Description](https://your-image-url.com/image.jpg)
```

**Example in your content:**

```markdown
Waiting for a TRC in Poland can take 1-3 years...

## What is the typical Poland TRC card processing time?

The Poland TRC card processing time currently takes between **1 to 3 years**...

![TRC Processing Timeline](https://example.com/timeline-image.jpg)

## Why does the TRC process take so long in Poland?

Delays are mainly caused by high demand...
```

### Method 2: Featured Image (Shows at Top)

Set the `featured_image` field when inserting/updating a blog post:

```sql
UPDATE blog_posts 
SET featured_image = 'https://your-image-url.com/header-image.jpg'
WHERE slug = 'your-post-slug';
```

This image appears at the top after the title and before content.

---

## Where to Host Images

### Option 1: Unsplash (Free Stock Photos)
1. Go to https://unsplash.com
2. Search for relevant images
3. Right-click on image  Copy Image Address
4. Use that URL in markdown

Example:
```markdown
![Immigration Office](https://images.unsplash.com/photo-1554224311-beee460ae6ba?w=800)
```

### Option 2: Upload to Supabase Storage
1. Go to Supabase Dashboard  Storage
2. Create a bucket called "blog-images"
3. Upload your images
4. Copy the public URL
5. Use in markdown

### Option 3: Use Your Own Server
Host images on your domain and reference them.

---

## Image Best Practices

1. **Use descriptive alt text** - Helps SEO and accessibility
   ```markdown
   ![Polish immigration office building in Warsaw](url)
   ```

2. **Optimize image size** - Keep under 500KB for fast loading
   - Recommended width: 800-1200px
   - Use JPEG for photos, PNG for graphics

3. **Place images strategically**
   - After introduction paragraph
   - Between major Q&A sections
   - Where it adds value to the content

4. **Don't overuse** - 1-3 images per article is ideal

---

## Complete Example with Images

```markdown
Waiting for a Temporary Residence Card (TRC) in Poland can feel like an endless process. Many foreigners submit their full application expecting a decision within monthsonly to discover that Polish immigration offices often take far longer.

![Temporary Residence Card](https://images.unsplash.com/photo-1554224311-beee460ae6ba?w=800)

## What is the typical Poland TRC card processing time?

The Poland TRC card processing time currently takes between **1 to 3 years**, depending on where you apply and how complex your case is. In busy voivodeships such as Mazowieckie (Warsaw) or Małopolskie (Kraków), the TRC waiting time can sometimes exceed two years.

**foreigners.pl** has extensive experience preparing complete TRC packages  learn more at [https://foreigners.pl](https://foreigners.pl).

## Why does the TRC process take so long in Poland?

Delays are mainly caused by high demand, staff shortages at immigration offices, and lengthy verification procedures.

![Immigration processing queue](https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800)

Each application goes through several departments that must check your employment contract, housing, insurance, and financial stability.

## Can you stay in Poland while waiting for your TRC card?

Yes, if you submit your application before your current visa or residence permit expires, you can legally stay in Poland while waiting for a decision.

Understanding the Poland TRC card processing time helps you plan your future in Poland without surprises.
```

---

## Quick Reference

**Add image after a heading:**
```markdown
## Heading

![Description](image-url.jpg)

Paragraph text...
```

**Add image between paragraphs:**
```markdown
First paragraph.

![Description](image-url.jpg)

Second paragraph.
```

**Set featured image (SQL):**
```sql
UPDATE blog_posts 
SET featured_image = 'https://example.com/image.jpg'
WHERE slug = 'post-slug';
```
