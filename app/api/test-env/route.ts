import { NextResponse } from 'next/server';
import { loadEnvConfig } from '@next/env';

// Load environment variables
const projectDir = process.cwd();
loadEnvConfig(projectDir);

export async function GET() {
  const hasServiceKey = !!process.env.SUPABASE_SERVICE_ROLE_KEY;
  const hasUrl = !!process.env.NEXT_PUBLIC_SUPABASE_URL;
  const hasAnonKey = !!process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  
  return NextResponse.json({
    env_vars_loaded: {
      SUPABASE_SERVICE_ROLE_KEY: hasServiceKey ? 'LOADED ' : 'MISSING ',
      NEXT_PUBLIC_SUPABASE_URL: hasUrl ? 'LOADED ' : 'MISSING ',
      NEXT_PUBLIC_SUPABASE_ANON_KEY: hasAnonKey ? 'LOADED ' : 'MISSING ',
    }
  });
}
