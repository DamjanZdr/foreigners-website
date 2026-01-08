import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

// This endpoint keeps Supabase active by pinging it every 6 days
export async function GET() {
  try {
    // Simple query to keep the database active
    const { data, error } = await supabase
      .from('lead_submissions')
      .select('id')
      .limit(1);

    if (error) {
      console.error('Keep-alive ping failed:', error);
      return NextResponse.json({ 
        success: false, 
        error: error.message 
      }, { status: 500 });
    }

    return NextResponse.json({ 
      success: true, 
      message: 'Database is active',
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    console.error('Keep-alive error:', error);
    return NextResponse.json({ 
      success: false, 
      error: 'Failed to ping database' 
    }, { status: 500 });
  }
}
