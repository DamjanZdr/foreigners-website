-- Add phone country code field to lead_submissions table
-- This stores the country dialing code separately from the phone number

ALTER TABLE lead_submissions 
ADD COLUMN IF NOT EXISTS phone_country_code VARCHAR(10);

-- Set default to +48 (Poland) for existing records
UPDATE lead_submissions 
SET phone_country_code = '+48' 
WHERE phone_country_code IS NULL;

-- Add comment for documentation
COMMENT ON COLUMN lead_submissions.phone_country_code IS 'Country dialing code for phone number (e.g., +48, +1, +44)';
