-- Enable Row Level Security on all tables
-- Run this in your Supabase SQL editor

-- Enable RLS on profiles table
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;

-- Enable RLS on quiz_results table
ALTER TABLE quiz_results ENABLE ROW LEVEL SECURITY;

-- Enable RLS on purchases table
ALTER TABLE purchases ENABLE ROW LEVEL SECURITY;

-- Enable RLS on course_progress table
ALTER TABLE course_progress ENABLE ROW LEVEL SECURITY;

-- Enable RLS on cert_attempts table
ALTER TABLE cert_attempts ENABLE ROW LEVEL SECURITY;

-- Enable RLS on advisory_requests table
ALTER TABLE advisory_requests ENABLE ROW LEVEL SECURITY;

-- Create policies for profiles table
DROP POLICY IF EXISTS "Users can insert own profile" ON profiles;
DROP POLICY IF EXISTS "Users can read own profile" ON profiles;
DROP POLICY IF EXISTS "Users can update own profile" ON profiles;

CREATE POLICY "Users can insert own profile" ON profiles
  FOR INSERT WITH CHECK (auth.uid() = id);

CREATE POLICY "Users can read own profile" ON profiles
  FOR SELECT USING (auth.uid() = id);

CREATE POLICY "Users can update own profile" ON profiles
  FOR UPDATE USING (auth.uid() = id);

-- Service role can always access (for admin operations)
-- This is implicit - service role bypasses RLS

-- Create policies for quiz_results table
DROP POLICY IF EXISTS "Users can read own quiz results" ON quiz_results;
DROP POLICY IF EXISTS "Users can create own quiz results" ON quiz_results;

CREATE POLICY "Users can read own quiz results" ON quiz_results
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can create own quiz results" ON quiz_results
  FOR INSERT WITH CHECK (auth.uid() = user_id);

-- Create policies for purchases table
DROP POLICY IF EXISTS "Users can read own purchases" ON purchases;
DROP POLICY IF EXISTS "Users can create own purchases" ON purchases;

CREATE POLICY "Users can read own purchases" ON purchases
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can create own purchases" ON purchases
  FOR INSERT WITH CHECK (auth.uid() = user_id);

-- Create policies for course_progress table
DROP POLICY IF EXISTS "Users can read own course progress" ON course_progress;
DROP POLICY IF EXISTS "Users can create/update own course progress" ON course_progress;

CREATE POLICY "Users can read own course progress" ON course_progress
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can create/update own course progress" ON course_progress
  FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own course progress" ON course_progress
  FOR UPDATE USING (auth.uid() = user_id);

-- Create policies for cert_attempts table
DROP POLICY IF EXISTS "Users can read own cert attempts" ON cert_attempts;
DROP POLICY IF EXISTS "Users can create own cert attempts" ON cert_attempts;
DROP POLICY IF EXISTS "Users can update own cert attempts" ON cert_attempts;

CREATE POLICY "Users can read own cert attempts" ON cert_attempts
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can create own cert attempts" ON cert_attempts
  FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own cert attempts" ON cert_attempts
  FOR UPDATE USING (auth.uid() = user_id);

-- Create policies for advisory_requests table
DROP POLICY IF EXISTS "Users can read own advisory requests" ON advisory_requests;
DROP POLICY IF EXISTS "Users can create own advisory requests" ON advisory_requests;

CREATE POLICY "Users can read own advisory requests" ON advisory_requests
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can create own advisory requests" ON advisory_requests
  FOR INSERT WITH CHECK (auth.uid() = user_id);
