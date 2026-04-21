-- Create profiles table
create table profiles (
  id uuid references auth.users(id) on delete cascade primary key,
  email text not null unique,
  first_name text,
  last_name text,
  job_title text,
  company text,
  created_at timestamp with time zone default timezone('utc'::text, now()),
  updated_at timestamp with time zone default timezone('utc'::text, now())
);

-- Create quiz_results table
create table quiz_results (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references profiles(id) on delete cascade not null,
  score integer not null,
  level text not null, -- 'Not Ready', 'Developing', 'Ready'
  awareness_score integer not null,
  business_score integer not null,
  prompt_score integer not null,
  workflow_score integer not null,
  answers_json jsonb not null,
  report_sent boolean default false,
  created_at timestamp with time zone default timezone('utc'::text, now())
);

-- Create purchases table
create table purchases (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references profiles(id) on delete cascade not null,
  product text not null, -- 'course', 'cert'
  stripe_session_id text,
  stripe_payment_intent text,
  created_at timestamp with time zone default timezone('utc'::text, now())
);

-- Create course_progress table
create table course_progress (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references profiles(id) on delete cascade not null unique,
  modules_completed integer[] default '{}',
  checklist_items jsonb default '{}',
  last_updated timestamp with time zone default timezone('utc'::text, now()),
  created_at timestamp with time zone default timezone('utc'::text, now())
);

-- Create certification_attempts table
create table certification_attempts (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references profiles(id) on delete cascade not null,
  score integer not null,
  passed boolean not null,
  answers integer[] not null,
  created_at timestamp with time zone default timezone('utc'::text, now())
);

-- Create advisory_requests table
create table advisory_requests (
  id uuid primary key default gen_random_uuid(),
  first_name text not null,
  last_name text not null,
  email text not null,
  job_title text,
  company text,
  message text,
  created_at timestamp with time zone default timezone('utc'::text, now())
);

-- Enable RLS on all tables
alter table profiles enable row level security;
alter table quiz_results enable row level security;
alter table purchases enable row level security;
alter table course_progress enable row level security;
alter table certification_attempts enable row level security;

-- RLS Policies for profiles
create policy "Users can view own profile" on profiles
  for select using (auth.uid() = id);

create policy "Users can update own profile" on profiles
  for update using (auth.uid() = id);

-- RLS Policies for quiz_results
create policy "Users can view own quiz results" on quiz_results
  for select using (auth.uid() = user_id);

create policy "Users can insert own quiz results" on quiz_results
  for insert with check (auth.uid() = user_id);

-- RLS Policies for purchases
create policy "Users can view own purchases" on purchases
  for select using (auth.uid() = user_id);

-- RLS Policies for course_progress
create policy "Users can view own course progress" on course_progress
  for select using (auth.uid() = user_id);

create policy "Users can insert own course progress" on course_progress
  for insert with check (auth.uid() = user_id);

create policy "Users can update own course progress" on course_progress
  for update using (auth.uid() = user_id);

-- RLS Policies for certification_attempts
create policy "Users can view own cert attempts" on certification_attempts
  for select using (auth.uid() = user_id);

create policy "Users can insert own cert attempts" on certification_attempts
  for insert with check (auth.uid() = user_id);

-- Create indexes
create index quiz_results_user_id_idx on quiz_results(user_id);
create index purchases_user_id_idx on purchases(user_id);
create index course_progress_user_id_idx on course_progress(user_id);
create index certification_attempts_user_id_idx on certification_attempts(user_id);
