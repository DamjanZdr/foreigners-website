import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';
import type { TrackingData } from '@/lib/utils/tracking';

// Interface for form submission data
interface LeadSubmission {
  // Contact Information
  full_name: string;
  email: string;
  phone: string;
  contact_method: string;
  source: string;
  privacy_accepted: boolean;
  
  // Tracking data (optional)
  tracking?: TrackingData;
}

// Get IP address from request
function getClientIP(request: NextRequest): string {
  // Try various headers where IP might be stored
  const forwarded = request.headers.get('x-forwarded-for');
  const real = request.headers.get('x-real-ip');
  const cfConnecting = request.headers.get('cf-connecting-ip');
  
  if (forwarded) {
    return forwarded.split(',')[0].trim();
  }
  if (real) {
    return real;
  }
  if (cfConnecting) {
    return cfConnecting;
  }
  
  return '';
}

// Get geolocation data from IP using ipapi.co (free tier)
async function getGeolocation(ip: string) {
  if (!ip || ip === '127.0.0.1' || ip === '::1' || ip.startsWith('192.168.')) {
    return {
      country_code: null,
      country_name: null,
      city: null,
      region: null,
    };
  }
  
  try {
    const response = await fetch(`https://ipapi.co/${ip}/json/`, {
      headers: { 'User-Agent': 'foreigners-website' },
    });
    
    if (!response.ok) {
      console.error('Geolocation API error:', response.status);
      return {
        country_code: null,
        country_name: null,
        city: null,
        region: null,
      };
    }
    
    const data = await response.json();
    
    return {
      country_code: data.country_code || null,
      country_name: data.country_name || null,
      city: data.city || null,
      region: data.region || null,
    };
  } catch (error) {
    console.error('Error fetching geolocation:', error);
    return {
      country_code: null,
      country_name: null,
      city: null,
      region: null,
    };
  }
}

export async function POST(request: NextRequest) {
  try {
    const body: LeadSubmission = await request.json();
    
    console.log('Received form submission:', body);
    
    // Validate required fields
    if (!body.full_name || !body.email || !body.phone || !body.contact_method || !body.source || body.privacy_accepted !== true) {
      console.log('Validation failed:', {
        full_name: !!body.full_name,
        email: !!body.email,
        phone: !!body.phone,
        contact_method: !!body.contact_method,
        source: !!body.source,
        privacy_accepted: body.privacy_accepted
      });
      return NextResponse.json(
        { error: 'Missing required fields: name, email, phone, contact method, and privacy acceptance are required' },
        { status: 400 }
      );
    }
    
    // Get IP address
    const ip_address = getClientIP(request);
    
    // Get geolocation data
    const geoData = await getGeolocation(ip_address);
    
    // Prepare data for database
    const leadData = {
      // Contact Information
      full_name: body.full_name,
      email: body.email,
      phone: body.phone,
      contact_method: body.contact_method,
      source: body.source,
      privacy_accepted: body.privacy_accepted,
      
      // IP & Geolocation
      ip_address: ip_address || null,
      ...geoData,
      
      // Tracking Data (from client)
      cookies_accepted: body.tracking?.cookies_accepted || false,
      browser_name: body.tracking?.browser_name || null,
      browser_version: body.tracking?.browser_version || null,
      device_type: body.tracking?.device_type || null,
      device_vendor: body.tracking?.device_vendor || null,
      device_model: body.tracking?.device_model || null,
      os_name: body.tracking?.os_name || null,
      os_version: body.tracking?.os_version || null,
      referrer: body.tracking?.referrer || null,
      referrer_domain: body.tracking?.referrer_domain || null,
      utm_source: body.tracking?.utm_source || null,
      utm_medium: body.tracking?.utm_medium || null,
      utm_campaign: body.tracking?.utm_campaign || null,
      utm_term: body.tracking?.utm_term || null,
      utm_content: body.tracking?.utm_content || null,
      landing_page: body.tracking?.landing_page || null,
      current_page: body.tracking?.current_page || null,
      session_duration: body.tracking?.session_duration || null,
      pages_viewed: body.tracking?.pages_viewed || null,
      is_returning_visitor: body.tracking?.is_returning_visitor || false,
      screen_resolution: body.tracking?.screen_resolution || null,
      language: body.tracking?.language || null,
      user_agent: body.tracking?.user_agent || null,
      user_local_time: body.tracking?.user_local_time || null,
      user_timezone: body.tracking?.user_timezone || null,
    };
    
    console.log('Inserting data into Supabase:', leadData);
    
    // Insert into Supabase
    const { data, error } = await supabase
      .from('lead_submissions')
      .insert([leadData])
      .select();
    
    if (error) {
      console.error('Supabase error:', error);
      return NextResponse.json(
        { error: 'Failed to submit form', details: error.message },
        { status: 500 }
      );
    }
    
    console.log('Successfully inserted:', data);
    
    return NextResponse.json(
      { success: true, data },
      { status: 200 }
    );
    
  } catch (error) {
    console.error('Server error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
