# How to Add Blog Posts

Add blog posts directly in Supabase - no editor needed!

## Step 1: Run Database Migration

1. Go to **Supabase Dashboard**  **SQL Editor**
2. Copy and paste the contents of `database/02_blog_tables.sql`
3. Click **Run**
4. Done! Tables created with 5 default categories

## Step 2: Add a Blog Post

1. Go to **Supabase**  **Table Editor**  `blog_posts`
2. Click **Insert Row**
3. Fill in these fields:

### Required Fields:
- **title**: "Work Permit in Poland: Complete Guide"
- **slug**: "work-permit-poland-guide" (URL-friendly, lowercase, no spaces)
- **content**: Your article in Markdown format (see examples below)
- **status**: Select `published` from dropdown
- **published_at**: Click calendar, select today$(')s date and time

### Optional (But Recommended):
- **category_id**: Click dropdown, select a category (Immigration, Business, etc.)
- **excerpt**: Short summary (160 characters max) - auto-generated if you leave empty
- **featured_image**: Full URL to an image (e.g., from Unsplash or your own)
- **tags**: Array format: `{"immigration", "work-permit", "guide"}`
- **meta_title**: SEO title (uses post title if empty)
- **meta_description**: SEO description (uses excerpt if empty)
- **focus_keyword**: Main SEO keyword

### Leave Empty:
- **id** - auto-generated
- **view_count** - starts at 0
- **reading_time_minutes** - can set manually or leave empty
- **created_at**, **updated_at** - auto-generated

4. Click **Save**
5. Visit `http://localhost:3000/blog` to see your post!

---

## Markdown Formatting Guide

### Basic Text:
$(")$(")$(")markdown
This is a paragraph with **bold text**, *italic text*, and ***bold italic***.

## Main Heading
### Subheading
#### Smaller Heading

Here$(')s a [link to our consultation](https://foreigners.pl#consultation).
$(")$(")$(")

### Lists:
$(")$(")$(")markdown
Benefits of work permits:
- Legal employment in Poland
- Access to healthcare system
- Path to permanent residence
- Ability to travel within Schengen

Steps to apply:
1. Gather required documents
2. Submit application online
3. Wait for approval (30-60 days)
4. Collect your permit
$(")$(")$(")

### Images:
$(")$(")$(")markdown
![Work Permit Document](https://example.com/image.jpg)
$(")$(")$(")

### Blockquotes:
$(")$(")$(")markdown
> **Important:** All documents must be translated to Polish by a certified translator.
$(")$(")$(")

### Code:
$(")$(")$(")markdown
Inline code: Use `document.getElementById()` for this.

Code block:
$(")$(")$(")javascript
function applyForPermit() {
  console.log("Application submitted!");
}
$(")$(")$(")
$(")$(")$(")

---

## Full Example Blog Post

**Title:** Work Permit in Poland: Complete Guide  
**Slug:** work-permit-poland-guide  
**Category:** Immigration  
**Content:**

$(")$(")$(")markdown
## Getting a Work Permit in Poland

Poland offers several work permit types for foreigners. Here$(')s everything you need to know to work legally in Poland.

### Types of Work Permits

There are main permit types available:

- **Type A** - For work with a specific employer
- **Type B** - For managerial positions  
- **Type C** - For skilled workers in high demand
- **Type D** - For delegated workers
- **Type S** - For seasonal work

### Required Documents

You$(')ll need to prepare:

1. Valid passport (minimum 6 months validity)
2. Job offer letter from Polish employer
3. Educational certificates (with certified Polish translation)
4. Criminal background check from your home country
5. Proof of accommodation in Poland
6. Health insurance

> **Pro Tip:** Start the application process 2-3 months before your planned start date to allow for processing time.

### Application Process

The typical timeline is **30-60 days**. Processing time depends on:

- Type of permit applied for
- Your country of origin
- Completeness of your application
- Current workload at immigration office

### Need Help?

Our immigration specialists can assist you through the entire process. [Book a free consultation](https://foreigners.pl#consultation) to get started.

![Work Permit Application](https://images.unsplash.com/photo-1450101499163-c8848c66ca85)
$(")$(")$(")

---

## Tips for Great Blog Posts

 **Use headings** - Makes content scannable  
 **Add images** - More engaging and shareable  
 **Keep paragraphs short** - Easier to read  
 **Use lists** - Breaks up text nicely  
 **Add internal links** - Link to your services  
 **Fill SEO fields** - Better Google rankings  
 **Choose a category** - Helps organization  

---

## Markdown Resources

Need help with Markdown?
- [Markdown Cheat Sheet](https://www.markdownguide.org/cheat-sheet/)
- [Markdown Tutorial](https://www.markdowntutorial.com/)
- [Markdown Guide](https://www.markdownguide.org/)

Or just write in plain text first, then add formatting!

---

## Viewing Your Posts

- **Blog listing:** `http://localhost:3000/blog`
- **Individual post:** `http://localhost:3000/blog/your-slug-here`
- **By category:** `http://localhost:3000/blog/category/immigration`

All posts show **"FOREIGNERS.pl"** as the author automatically!
