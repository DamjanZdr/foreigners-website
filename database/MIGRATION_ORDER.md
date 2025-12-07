# Database Migration Order

Run these SQL files in your Supabase SQL Editor in this exact order:

## Step 1: Drop Old Table (if exists)
File: `00_drop_old_table.sql`

Run this first to remove the old table structure.

## Step 2: Create Lead Submissions Table
File: `01_lead_submissions.sql`

Creates the lead submissions table with all tracking fields.

## Step 3: Create Blog System Tables
File: `02_blog_tables.sql`

Creates the blog system tables:
- `blog_categories` - Blog post categories (5 default categories included)
- `blog_posts` - Blog posts with content, SEO fields, and metadata

Includes RLS policies, indexes, and triggers.

**No writer codes needed!** Just add posts directly in Supabase and they'll show "FOREIGNERS.pl" as the author.

## Quick Start Guide

See `BLOG_QUICK_START.md` for simple instructions on adding blog posts.

---

**Migration Complete!** Your database will have:
- ✅ Lead submissions tracking
- ✅ Blog system (simplified, no authentication needed)
- ✅ Posts show "FOREIGNERS.pl" as author automatically
