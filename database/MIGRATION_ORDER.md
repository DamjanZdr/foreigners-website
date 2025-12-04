# Database Migration Order

Run these SQL files in your Supabase SQL Editor in this exact order:

## Step 1: Drop Old Table (if exists)
File: `00_drop_old_table.sql`

Run this first to remove the old table structure.

## Step 2: Create New Table with Tracking Fields
File: `01_lead_submissions.sql`

Creates the new table with all tracking fields.

---

**Important:** After running both files, the table will be ready with all the new tracking columns!
