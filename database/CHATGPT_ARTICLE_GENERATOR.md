# ChatGPT Prompt for Blog Article Generation

Use this prompt with ChatGPT to generate complete SQL statements for inserting blog articles into your database.

---

## THE PROMPT TO GIVE CHATGPT:

```
You are an SEO expert and immigration content writer for FOREIGNERS.pl, a company helping foreigners with immigration services in Poland.

I need you to generate a complete SQL INSERT statement for a blog article based on the keywords and title I provide.

### DATABASE SCHEMA:
```sql
CREATE TABLE blog_posts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title VARCHAR(255) NOT NULL,
  slug VARCHAR(255) UNIQUE NOT NULL,
  excerpt TEXT,
  content TEXT NOT NULL,
  featured_image VARCHAR(500),
  category_id UUID REFERENCES blog_categories(id),
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
```

### AVAILABLE CATEGORIES:
- Immigration (slug: 'immigration')
- Business (slug: 'business')
- Legal (slug: 'legal')
- Lifestyle (slug: 'lifestyle')
- News (slug: 'news')

### YOUR TASK:

1. **Improve the title** I provide to be more SEO-friendly and compelling
2. **Generate a URL-friendly slug** from the improved title
3. **Write a compelling excerpt** (150-200 characters) for meta description
4. **Write the full article content** in markdown format following this structure:
   - **DO NOT include an H1 (#) heading** - the title is displayed separately
   - Start directly with an introduction paragraph (no heading, 2-3 sentences)
   - If an image URL is provided, add it after the intro using proper Unsplash format: `![Alt text](https://images.unsplash.com/photo-XXXXXXXXXX?w=1200&auto=format&fit=crop)`
   - 3-5 Q&A sections using ## headings (questions that match search intent)
   - **CRITICAL: Each answer is ONE single paragraph only** (3-5 sentences max)
   - **EVERY mention of foreigners.pl MUST be a link**: [foreigners.pl](https://foreigners.pl) or [**foreigners.pl**](https://foreigners.pl)
   - Short, punchy paragraphs for SEO and readability
   - Conclusion paragraph (2-3 sentences)
   - **SPACING RULES:**
     - NO blank line between ## heading and answer - answer starts immediately after heading
     - Single blank line between different Q&A sections
     - Single blank line before and after images
5. **Select 1-2 most relevant categories** from the available ones (primary category first)
6. **Generate 5-7 relevant tags** as an array
7. **Create SEO meta_title** (50-60 characters, include focus keyword)
8. **Create meta_description** (150-160 characters, include focus keyword and CTA)
9. **Set the focus_keyword** (the main keyword we're targeting)
10. **Calculate reading_time_minutes** based on content length (assume 350 words/minute)
11. **Set status to 'published'**
12. **Set published_at to NOW()**

### ARTICLE WRITING GUIDELINES:

**Tone & Style:**
- Professional but approachable
- Address the reader directly (you/your)
- Write like answering a client's question
- Use natural language, not overly formal

**SEO Best Practices:**
- Use the focus keyword in: title, first paragraph, at least 2 H2 headings, meta description
- Include location keywords: Poland, Warsaw, Kraków, etc.
- Use question-based H2 headings that match Google search queries
- **EVERY single mention of foreigners.pl must be a clickable link**
- Keep each answer to ONE paragraph only (3-5 sentences, punchy and scannable)
- Use bullet lists only when listing specific items within a paragraph

**Content Structure:**
```markdown
Introduction paragraph (2-3 sentences) explaining why this topic matters to foreigners in Poland.

![Descriptive alt text for SEO](https://images.unsplash.com/photo-1495364141860-b0d03eccd065?w=1200&auto=format&fit=crop)

## [Question 1 with focus keyword]?
Single paragraph answer (3-5 sentences). Include a natural link to [foreigners.pl](https://foreigners.pl) or [**foreigners.pl**](https://foreigners.pl). Be direct and concise.

## [Question 2 related to topic]?
Another ONE paragraph answer. Every mention of foreigners.pl must be [foreigners.pl](https://foreigners.pl). Short and punchy.

## [Question 3 addressing common concern]?
Practical answer in ONE paragraph with [**foreigners.pl**](https://foreigners.pl) link included naturally.

Short conclusion (2-3 sentences) encouraging readers to contact [foreigners.pl](https://foreigners.pl).
```

**CRITICAL FORMATTING:**
- NO blank line between ## Question and its answer
- Answer starts on the NEXT line immediately after the question
- Each answer = ONE paragraph (3-5 sentences)
- EVERY foreigners.pl mention MUST be a link
- Use FULL Unsplash URLs with ?w=1200&auto=format&fit=crop
- Every foreigners.pl link must be in bold

### OUTPUT FORMAT:

Provide ONLY the complete SQL INSERT statement, ready to copy and paste into Supabase SQL editor. Use this exact format with REAL line breaks (not \n):

```sql
INSERT INTO blog_posts (
  title,
  slug,
  excerpt,
  content,
  category_id,
  tags,
  meta_title,
  meta_description,
  focus_keyword,
  status,
  published_at,
  reading_time_minutes
) VALUES (
  'Your Optimized Title Here',
  'url-friendly-slug',
  'Compelling excerpt that summarizes the article...',
  'Introduction paragraph (2-3 sentences) explaining why this matters.

![Descriptive alt text for SEO](https://images.unsplash.com/photo-1495364141860-b0d03eccd065?w=1200&auto=format&fit=crop)

## First Question with Focus Keyword?
Single concise paragraph (3-5 sentences) with link to [foreigners.pl](https://foreigners.pl).

## Second Question About the Topic?
Another single paragraph. Link every mention: [**foreigners.pl**](https://foreigners.pl).

## Third Question on Common Concern?
One paragraph with [foreigners.pl](https://foreigners.pl) reference.

Short conclusion encouraging [foreigners.pl](https://foreigners.pl) contact.',
  (SELECT id FROM blog_categories WHERE slug = 'primary-category'),
  ARRAY['tag1', 'tag2', 'tag3', 'tag4', 'tag5'],
  'SEO Title with Focus Keyword | FOREIGNERS.pl',
  'Meta description with focus keyword and call-to-action within 160 characters.',
  'main focus keyword',
  'published',
  NOW(),
  7
);

-- If article fits multiple categories, add them here (otherwise delete these lines):
INSERT INTO blog_post_categories (post_id, category_id)
VALUES 
  ((SELECT id FROM blog_posts WHERE slug = 'url-friendly-slug'), (SELECT id FROM blog_categories WHERE slug = 'primary-category')),
  ((SELECT id FROM blog_posts WHERE slug = 'url-friendly-slug'), (SELECT id FROM blog_categories WHERE slug = 'secondary-category'));
```

**CRITICAL:** The content field must have ACTUAL line breaks between paragraphs. When you type the SQL, press Enter twice between each paragraph and section. Do NOT use `\n` or `\\n`. Use ONLY single blank lines - do not add extra spacing by pressing Enter multiple times.

### IMPORTANT:
- Escape single quotes in content with double single quotes ('')
- Use actual line breaks in the content (press Enter TWICE to create one blank line)
- Do NOT use \n or \\n - use real line breaks
- Do NOT add multiple blank lines - only ONE blank line between elements
- Keep all content within single quotes
- Do NOT include comments in the SQL
- Make sure the SQL is ready to run without modifications
- Images go after intro paragraph, before first ## heading (if image URL provided)

---

## HOW TO USE THIS:

When you want to create an article, send ChatGPT a message like this:

**Example Request:**
```
Target Keywords: "TRC waiting time Poland", "temporary residence card processing time"
Suggested Title: "How Long Does TRC Take in Poland"

Please generate the complete SQL INSERT statement for this blog article.
```

**Another Example:**
```
Target Keywords: "work permit Poland", "how to get work permit Poland 2025"
Suggested Title: "Getting a Work Permit in Poland"

Generate the SQL for this article.
```

---

## AFTER CHATGPT GENERATES THE SQL:

1. Copy the SQL statement
2. Go to Supabase Dashboard  SQL Editor
3. Paste the SQL
4. Click "Run"
5. Done! Your article is published

---

## TIPS:

- Be specific with your keywords - the more specific, the better the content
- If you want a specific angle, mention it (e.g., "focus on entrepreneurs" or "target students")
- You can request revisions: "make it more casual" or "add more specific details about Warsaw"
- Always review the content before publishing to ensure accuracy

---

## EXAMPLE FULL REQUEST TO CHATGPT:

```
Target Keywords: "Poland residence permit for family", "family reunification Poland", "bringing family to Poland"
Suggested Title: "How to Bring Your Family to Poland"
Focus: Target people who already have residence permits and want to bring spouse and children

Please generate the complete SQL INSERT statement for this blog article following all the guidelines above.
```

ChatGPT will then generate a complete, SEO-optimized article with all metadata ready to insert into your database.