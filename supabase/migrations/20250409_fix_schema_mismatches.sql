-- Fix schema mismatches between code and database

-- Add phone column to profiles table
ALTER TABLE profiles ADD COLUMN IF NOT EXISTS phone text;

-- Rename certification_attempts to cert_attempts to match code
ALTER TABLE certification_attempts RENAME TO cert_attempts;

-- Update RLS policies for renamed table
DROP POLICY IF EXISTS "Users can view own certification attempts" ON cert_attempts;
DROP POLICY IF EXISTS "Users can insert own certification attempts" ON cert_attempts;

CREATE POLICY "Users can view own cert attempts" ON cert_attempts
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own cert attempts" ON cert_attempts
  FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own cert attempts" ON cert_attempts
  FOR UPDATE USING (auth.uid() = user_id);