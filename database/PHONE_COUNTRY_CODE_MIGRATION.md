# Phone Country Code Migration

## What this adds
- Adds `phone_country_code` field to `lead_submissions` table
- Stores the country dialing code separately from the phone number (e.g., +48, +1, +44)
- Sets existing records to +48 (Poland) as default

## How to run
1. Go to your Supabase project dashboard
2. Navigate to SQL Editor
3. Copy and paste the contents of `05_add_phone_country_code.sql`
4. Click "Run" to execute the migration

## What changed
- **Form**: Now has a dropdown with 90+ countries to select country code
- **Database**: New `phone_country_code` column stores the selected code
- **Email**: Admin emails now show full phone number with country code
- **Default**: Forms default to +48 (Poland), but users can select any country
