-- COMPLETE DIAGNOSTIC AND FIX
-- First, let's see what's actually happening

-- DIAGNOSE: Check current state
SELECT 'Current Table Owner:' as info, tableowner 
FROM pg_tables 
WHERE tablename = 'lead_submissions';

SELECT 'Current RLS Status:' as info, tablename, rowsecurity as rls_enabled
FROM pg_tables 
WHERE tablename = 'lead_submissions';

SELECT 'Current Policies:' as info, policyname, roles, cmd, qual, with_check
FROM pg_policies
WHERE tablename = 'lead_submissions';

SELECT 'Current Schema Grants:' as info, grantee, privilege_type
FROM information_schema.usage_privileges
WHERE object_schema = 'public'
AND object_name = 'public'
AND grantee IN ('anon', 'authenticated', 'service_role');

SELECT 'Current Table Grants:' as info, grantee, privilege_type
FROM information_schema.table_privileges
WHERE table_schema = 'public'
AND table_name = 'lead_submissions'
AND grantee IN ('anon', 'authenticated', 'service_role')
ORDER BY grantee, privilege_type;

-- NOW FIX IT
-- Step 1: Disable RLS temporarily
ALTER TABLE public.lead_submissions DISABLE ROW LEVEL SECURITY;

-- Step 2: Drop ALL existing policies
DROP POLICY IF EXISTS "allow_insert_submissions" ON public.lead_submissions;
DROP POLICY IF EXISTS "allow_authenticated_select" ON public.lead_submissions;
DROP POLICY IF EXISTS "lead_submissions_insert_policy" ON public.lead_submissions;
DROP POLICY IF EXISTS "lead_submissions_select_policy" ON public.lead_submissions;
DROP POLICY IF EXISTS "enable_insert_for_all" ON public.lead_submissions;
DROP POLICY IF EXISTS "enable_select_for_authenticated" ON public.lead_submissions;

-- Step 3: Grant schema usage
GRANT USAGE ON SCHEMA public TO anon, authenticated;

-- Step 4: Grant table permissions  
GRANT INSERT ON public.lead_submissions TO anon;
GRANT INSERT, SELECT ON public.lead_submissions TO authenticated;

-- Step 5: Enable RLS
ALTER TABLE public.lead_submissions ENABLE ROW LEVEL SECURITY;

-- Step 6: Create policies with TO clause (critical!)
CREATE POLICY "enable_insert_for_all"
ON public.lead_submissions
AS PERMISSIVE
FOR INSERT
TO anon, authenticated
WITH CHECK (true);

CREATE POLICY "enable_select_for_authenticated"
ON public.lead_submissions
AS PERMISSIVE
FOR SELECT
TO authenticated
USING (true);

-- VERIFY: Check final state
SELECT 'AFTER FIX - RLS Status:' as info, tablename, rowsecurity as rls_enabled
FROM pg_tables 
WHERE tablename = 'lead_submissions';

SELECT 'AFTER FIX - Policies:' as info, policyname, roles, cmd
FROM pg_policies
WHERE tablename = 'lead_submissions';

SELECT 'AFTER FIX - Table Grants:' as info, grantee, privilege_type
FROM information_schema.table_privileges
WHERE table_schema = 'public'
AND table_name = 'lead_submissions'
AND grantee IN ('anon', 'authenticated')
ORDER BY grantee, privilege_type;

