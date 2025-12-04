-- Lead Submissions Table
-- This table stores all form submissions from the website

CREATE TABLE lead_submissions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  
  -- Contact Information
  full_name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(50) NOT NULL,
  
  -- Form Details
  contact_method VARCHAR(50) NOT NULL,
  source VARCHAR(100) NOT NULL, -- e.g., 'immigration-service', 'Companies Page', 'home-consultation'
  
  -- Privacy & Consent
  privacy_accepted BOOLEAN NOT NULL DEFAULT false,
  cookies_accepted BOOLEAN DEFAULT false,
  
  -- Timestamps
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  user_local_time TIMESTAMP WITH TIME ZONE, -- User's local time when submitted
  user_timezone VARCHAR(100), -- e.g., 'Europe/Warsaw', 'America/New_York'
  
  -- Device & Browser Information
  browser_name VARCHAR(100), -- e.g., 'Chrome', 'Firefox', 'Safari'
  browser_version VARCHAR(50),
  device_type VARCHAR(50), -- 'desktop', 'mobile', 'tablet'
  device_vendor VARCHAR(100), -- e.g., 'Apple', 'Samsung', 'Google'
  device_model VARCHAR(100), -- e.g., 'iPhone 14 Pro', 'Galaxy S23'
  os_name VARCHAR(100), -- e.g., 'Windows', 'macOS', 'iOS', 'Android'
  os_version VARCHAR(50),
  
  -- Network & Location
  ip_address INET,
  country_code VARCHAR(2), -- ISO country code e.g., 'PL', 'UA', 'US'
  country_name VARCHAR(100),
  city VARCHAR(100),
  region VARCHAR(100), -- State/Province
  
  -- Traffic Source & Marketing
  referrer TEXT, -- Full referrer URL
  referrer_domain VARCHAR(255), -- Just the domain e.g., 'google.com', 'facebook.com'
  utm_source VARCHAR(255), -- Marketing campaign source
  utm_medium VARCHAR(255), -- Marketing campaign medium
  utm_campaign VARCHAR(255), -- Marketing campaign name
  utm_term VARCHAR(255), -- Marketing campaign keyword
  utm_content VARCHAR(255), -- Marketing campaign content
  
  -- Session Information
  landing_page TEXT, -- First page they visited
  current_page TEXT, -- Page where form was submitted
  session_duration INTEGER, -- Time on site in seconds before submitting
  pages_viewed INTEGER, -- Number of pages viewed in session
  is_returning_visitor BOOLEAN DEFAULT false,
  
  -- Technical Details
  screen_resolution VARCHAR(50), -- e.g., '1920x1080'
  language VARCHAR(10), -- Browser language e.g., 'en-US', 'pl-PL'
  user_agent TEXT -- Full user agent string for backup
);

-- Indexes for better query performance
CREATE INDEX idx_lead_submissions_created_at ON lead_submissions(created_at DESC);
CREATE INDEX idx_lead_submissions_source ON lead_submissions(source);
CREATE INDEX idx_lead_submissions_email ON lead_submissions(email);
CREATE INDEX idx_lead_submissions_country_code ON lead_submissions(country_code);
CREATE INDEX idx_lead_submissions_device_type ON lead_submissions(device_type);
CREATE INDEX idx_lead_submissions_referrer_domain ON lead_submissions(referrer_domain);
CREATE INDEX idx_lead_submissions_utm_source ON lead_submissions(utm_source);

-- Remove the update trigger since we don't have updated_at anymore

-- Row Level Security (RLS) Policies
ALTER TABLE lead_submissions ENABLE ROW LEVEL SECURITY;

-- Policy: Allow anyone to insert (for form submissions)
CREATE POLICY "Allow public insert" ON lead_submissions
  FOR INSERT
  WITH CHECK (true);

-- Policy: Only authenticated users can view (for admin panel)
CREATE POLICY "Authenticated users can view all" ON lead_submissions
  FOR SELECT
  TO authenticated
  USING (true);

-- Comments for documentation
COMMENT ON TABLE lead_submissions IS 'Stores all lead form submissions with comprehensive tracking data';
COMMENT ON COLUMN lead_submissions.source IS 'Tracks which form/page the submission came from';
COMMENT ON COLUMN lead_submissions.contact_method IS 'User preferred contact method (e.g., call, whatsapp, email)';
COMMENT ON COLUMN lead_submissions.user_local_time IS 'User local time when form was submitted';
COMMENT ON COLUMN lead_submissions.utm_source IS 'Marketing campaign tracking parameter';
COMMENT ON COLUMN lead_submissions.session_duration IS 'Time spent on site before submission in seconds';
COMMENT ON COLUMN lead_submissions.is_returning_visitor IS 'Whether user has visited the site before';
