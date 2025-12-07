-- Complete reset - drop and recreate the table from scratch
-- This will DELETE ALL YOUR DATA! Only run if you're OK with that.

-- Drop the table completely
DROP TABLE IF EXISTS public.lead_submissions CASCADE;

-- Recreate it
CREATE TABLE public.lead_submissions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  full_name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(50) NOT NULL,
  contact_method VARCHAR(50) NOT NULL,
  source VARCHAR(100) NOT NULL,
  privacy_accepted BOOLEAN NOT NULL DEFAULT false,
  cookies_accepted BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  user_local_time TIMESTAMP WITH TIME ZONE,
  user_timezone VARCHAR(100),
  browser_name VARCHAR(100),
  browser_version VARCHAR(50),
  device_type VARCHAR(50),
  device_vendor VARCHAR(100),
  device_model VARCHAR(100),
  os_name VARCHAR(100),
  os_version VARCHAR(50),
  ip_address INET,
  country_code VARCHAR(2),
  country_name VARCHAR(100),
  city VARCHAR(100),
  region VARCHAR(100),
  referrer TEXT,
  referrer_domain VARCHAR(255),
  utm_source VARCHAR(255),
  utm_medium VARCHAR(255),
  utm_campaign VARCHAR(255),
  utm_term VARCHAR(255),
  utm_content VARCHAR(255),
  landing_page TEXT,
  current_page TEXT,
  session_duration INTEGER,
  pages_viewed INTEGER,
  is_returning_visitor BOOLEAN DEFAULT false,
  screen_resolution VARCHAR(50),
  language VARCHAR(10),
  user_agent TEXT
);

-- NO RLS - just leave it completely open for now
ALTER TABLE public.lead_submissions DISABLE ROW LEVEL SECURITY;

-- Grant full access to everyone
GRANT ALL ON public.lead_submissions TO anon;
GRANT ALL ON public.lead_submissions TO authenticated;
GRANT ALL ON public.lead_submissions TO postgres;

-- Create indexes
CREATE INDEX idx_lead_submissions_created_at ON public.lead_submissions(created_at DESC);
CREATE INDEX idx_lead_submissions_email ON public.lead_submissions(email);

-- Verify
SELECT tablename, rowsecurity FROM pg_tables WHERE tablename = 'lead_submissions';
