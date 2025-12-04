# Form Submission & Tracking System - Setup Guide

##  Overview

Your website now has a comprehensive form submission and tracking system that captures 30+ data points for every lead, including:

- **Contact Information**: Name, email, phone, contact method
- **Device & Browser**: Browser name/version, device type, OS details
- **Location**: IP address, country, city, region (via geolocation)
- **Marketing**: UTM parameters, referrer, landing page
- **Session**: Duration, pages viewed, returning visitor status
- **Technical**: Screen resolution, language, timezone, user agent

##  Setup Checklist

### 1. Configure Environment Variables

Update `.env.local` with your Supabase credentials:

```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here
```

**Where to find these:**
1. Go to your Supabase dashboard
2. Navigate to: Project Settings  API
3. Copy the Project URL and anon/public key

### 2. Run Database Migrations

Run the SQL files in order in your Supabase SQL Editor:

```sql
-- Step 1: Run database/00_drop_old_table.sql
-- This drops any existing table (if you had one before)

-- Step 2: Run database/01_lead_submissions.sql
-- This creates the new table with all tracking fields
```

### 3. Test the Integration

1. Start your development server:
   ```powershell
   npm run dev
   ```

2. Open http://localhost:3000 in your browser

3. You should see:
   - Cookie consent banner appears after 1 second
   - Click "Accept Cookies" to enable tracking

4. Navigate to any page with a form (e.g., Contact section)

5. Fill out and submit the form

6. Check your Supabase dashboard:
   - Go to: Table Editor  lead_submissions
   - You should see your submission with all tracking data

##  How It Works

### Client-Side Flow

1. **Page Load**: `SessionTracker` component initializes tracking
   - Sets session start time
   - Records landing page
   - Tracks page views
   - Marks returning visitors

2. **Form Submission**: User fills and submits form
   - `collectTrackingData()` gathers all browser/session data
   - Form data + tracking data sent to API route

### Server-Side Flow

1. **API Route** (`/api/submit-lead`):
   - Receives form + tracking data
   - Extracts IP address from request headers
   - Fetches geolocation data (country, city, region)
   - Validates required fields
   - Inserts everything into Supabase

2. **Database**: All 30+ fields stored for analytics

### Privacy Compliance

- **Cookie Consent**: Banner shown on first visit
- **Tracking Behavior**:
  -  Cookies Accepted: Full tracking (all 30+ fields)
  -  Cookies Rejected: Minimal tracking (current page, user agent only)
- **Data Stored**: Privacy acceptance status saved with each lead

##  Database Schema

### Core Fields
- `id`: UUID primary key
- `created_at`: Timestamp of submission
- `full_name`, `email`, `phone`: Contact info
- `source`: Where form was submitted (e.g., "homepage", "services-page")
- `privacy_accepted`, `cookies_accepted`: Consent tracking

### Device & Browser (9 fields)
- `browser_name`, `browser_version`
- `device_type` (mobile/tablet/desktop)
- `device_vendor`, `device_model`
- `os_name`, `os_version`
- `user_agent`

### Location (5 fields)
- `ip_address`
- `country_code`, `country_name`
- `city`, `region`

### Marketing (7 fields)
- `referrer`, `referrer_domain`
- `utm_source`, `utm_medium`, `utm_campaign`
- `utm_term`, `utm_content`

### Session (5 fields)
- `landing_page`, `current_page`
- `session_duration` (in seconds)
- `pages_viewed`
- `is_returning_visitor`

### Technical (4 fields)
- `screen_resolution`
- `language`
- `user_local_time`, `user_timezone`

##  API Endpoints

### POST `/api/submit-lead`

**Request Body:**
```json
{
  "full_name": "John Doe",
  "email": "john@example.com",
  "phone": "123456789",
  "contact_method": "email",
  "source": "homepage",
  "privacy_accepted": true,
  "tracking": {
    "browser_name": "Chrome",
    "device_type": "desktop",
    "utm_source": "google",
    // ... all tracking fields
  }
}
```

**Response (Success):**
```json
{
  "success": true,
  "data": { /* inserted record */ }
}
```

**Response (Error):**
```json
{
  "error": "Missing required fields"
}
```

##  Viewing Your Data

### Supabase Dashboard
1. Go to: Table Editor  `lead_submissions`
2. View all submissions with filters/sorting
3. Export to CSV for analysis

### Useful Queries

**Get submissions by source:**
```sql
SELECT * FROM lead_submissions 
WHERE source = 'homepage' 
ORDER BY created_at DESC;
```

**Analyze traffic sources:**
```sql
SELECT 
  utm_source,
  utm_medium,
  COUNT(*) as leads
FROM lead_submissions
WHERE utm_source IS NOT NULL
GROUP BY utm_source, utm_medium
ORDER BY leads DESC;
```

**Device breakdown:**
```sql
SELECT 
  device_type,
  COUNT(*) as count,
  ROUND(COUNT(*) * 100.0 / SUM(COUNT(*)) OVER (), 2) as percentage
FROM lead_submissions
GROUP BY device_type;
```

**Geographic distribution:**
```sql
SELECT 
  country_name,
  city,
  COUNT(*) as leads
FROM lead_submissions
WHERE country_name IS NOT NULL
GROUP BY country_name, city
ORDER BY leads DESC;
```

##  What's Next

### Immediate Actions
1.  Add your Supabase credentials to `.env.local`
2.  Run the SQL migrations
3.  Test form submission
4.  Verify data in Supabase dashboard

### Optional Enhancements
- Set up email notifications for new leads
- Create analytics dashboard in Supabase
- Export data to your CRM automatically
- Add webhook integration for Zapier/Make

##  Security Notes

- **API Keys**: Never commit `.env.local` to git (already in `.gitignore`)
- **RLS Policies**: Table allows public inserts, but only authenticated users can read
- **IP Geolocation**: Uses free tier of ipapi.co (limit: 1,000 requests/day)
- **Data Retention**: Set up data retention policies as needed

##  Troubleshooting

### Cookie banner not showing?
- Check browser console for errors
- Clear localStorage and refresh
- Verify `CookieConsent` component is in `app/layout.tsx`

### Form submission fails?
- Check browser console for error messages
- Verify `.env.local` variables are set correctly
- Check Supabase API logs
- Ensure SQL migrations ran successfully

### Tracking data missing?
- Make sure cookies were accepted
- Check `SessionTracker` is rendering
- Verify `initSessionTracking()` is called

### Geolocation not working on localhost?
- Expected behavior (localhost IP skipped)
- Deploy to production to test real IPs
- Or use VPN/proxy for testing

##  Files Created

```
database/
   00_drop_old_table.sql       # Migration: Drop existing table
   01_lead_submissions.sql      # Migration: Create new table
   MIGRATION_ORDER.md           # Migration instructions

lib/
   supabase.ts                  # Supabase client
   utils/
       tracking.ts              # Tracking data collection

app/api/
   submit-lead/
       route.ts                 # API endpoint for submissions

components/
   CookieConsent.tsx            # Cookie consent banner
   SessionTracker.tsx           # Session tracking initializer
   forms/
       LeadForm.tsx             # Updated form component

.env.local                         # Environment variables (UPDATE THIS!)
```

##  Tips

1. **Testing UTM Parameters**: Add `?utm_source=google&utm_medium=cpc` to URLs
2. **Testing Referrer**: Open site from another domain/page
3. **Session Duration**: Keep browser tab open and wait before submitting
4. **Returning Visitor**: Submit once, close browser, reopen, submit again

---

**Questions?** Check the code comments or Supabase documentation.

**Ready to launch!** 
