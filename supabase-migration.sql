-- Migration SQL for Supabase
-- Run this in Supabase SQL Editor: https://supabase.com/dashboard/project/qjvqzsrlixijjruelaad/sql

-- Create users table
CREATE TABLE IF NOT EXISTS users (
  id TEXT PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  password TEXT NOT NULL,
  name TEXT NOT NULL,
  role TEXT DEFAULT 'admin',
  "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP NOT NULL,
  "updatedAt" TIMESTAMP(3) NOT NULL
);

-- Create promotions table
CREATE TABLE IF NOT EXISTS promotions (
  id TEXT PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  badge TEXT NOT NULL,
  image TEXT NOT NULL,
  active BOOLEAN DEFAULT true NOT NULL,
  "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP NOT NULL,
  "updatedAt" TIMESTAMP(3) NOT NULL
);

-- Create content table
CREATE TABLE IF NOT EXISTS content (
  id TEXT PRIMARY KEY,
  type TEXT NOT NULL,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  image TEXT,
  data JSONB NOT NULL,
  active BOOLEAN DEFAULT true NOT NULL,
  "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP NOT NULL,
  "updatedAt" TIMESTAMP(3) NOT NULL
);

-- Create security_logs table
CREATE TABLE IF NOT EXISTS security_logs (
  id TEXT PRIMARY KEY,
  event TEXT NOT NULL,
  email TEXT,
  "ipAddress" TEXT,
  "userAgent" TEXT,
  metadata JSONB,
  "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP NOT NULL
);

-- Create indexes for security_logs
CREATE INDEX IF NOT EXISTS "security_logs_email_idx" ON security_logs(email);
CREATE INDEX IF NOT EXISTS "security_logs_event_idx" ON security_logs(event);
CREATE INDEX IF NOT EXISTS "security_logs_createdAt_idx" ON security_logs("createdAt");

-- Insert admin user (password: admin123 - hashed with bcrypt)
INSERT INTO users (id, email, password, name, role, "createdAt", "updatedAt")
VALUES (
  'admin-1',
  'admin@tecnodespegue.com',
  '$2b$10$mXCnjsq9KC/wwGv5xfNlQeOEPTE8zQJbz./qi02dzxsnwQZntFtui',
  'Admin Tecnodespegue',
  'admin',
  CURRENT_TIMESTAMP,
  CURRENT_TIMESTAMP
)
ON CONFLICT (email) DO NOTHING;

-- Success message
SELECT 'Database setup complete! Admin user created.' as message;
