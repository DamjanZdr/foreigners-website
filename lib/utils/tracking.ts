// Tracking utility to collect all user data for form submissions
import { areCookiesAccepted } from '@/components/CookieConsent';

export interface TrackingData {
  // Timestamps
  user_local_time?: string;
  user_timezone?: string;
  
  // Device & Browser
  browser_name?: string;
  browser_version?: string;
  device_type?: string;
  device_vendor?: string;
  device_model?: string;
  os_name?: string;
  os_version?: string;
  
  // Traffic Source & Marketing
  referrer?: string;
  referrer_domain?: string;
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_term?: string;
  utm_content?: string;
  
  // Session Information
  landing_page?: string;
  current_page?: string;
  session_duration?: number;
  pages_viewed?: number;
  is_returning_visitor?: boolean;
  
  // Technical Details
  screen_resolution?: string;
  language?: string;
  user_agent?: string;
  
  // Consent
  cookies_accepted?: boolean;
}

// Get device type based on screen width
function getDeviceType(): string {
  const width = window.innerWidth;
  if (width < 768) return 'mobile';
  if (width < 1024) return 'tablet';
  return 'desktop';
}

// Extract domain from URL
function extractDomain(url: string): string {
  try {
    const urlObj = new URL(url);
    return urlObj.hostname;
  } catch {
    return '';
  }
}

// Get UTM parameters from URL
function getUTMParameters() {
  if (typeof window === 'undefined') return {};
  
  const params = new URLSearchParams(window.location.search);
  return {
    utm_source: params.get('utm_source') || undefined,
    utm_medium: params.get('utm_medium') || undefined,
    utm_campaign: params.get('utm_campaign') || undefined,
    utm_term: params.get('utm_term') || undefined,
    utm_content: params.get('utm_content') || undefined,
  };
}

// Parse user agent to get device/browser info (basic parsing)
function parseUserAgent(ua: string) {
  const data = {
    browser_name: '',
    browser_version: '',
    os_name: '',
    os_version: '',
    device_vendor: '',
    device_model: '',
  };

  // Browser detection
  if (ua.includes('Chrome') && !ua.includes('Edg')) {
    data.browser_name = 'Chrome';
    const match = ua.match(/Chrome\/([\d.]+)/);
    if (match) data.browser_version = match[1];
  } else if (ua.includes('Safari') && !ua.includes('Chrome')) {
    data.browser_name = 'Safari';
    const match = ua.match(/Version\/([\d.]+)/);
    if (match) data.browser_version = match[1];
  } else if (ua.includes('Firefox')) {
    data.browser_name = 'Firefox';
    const match = ua.match(/Firefox\/([\d.]+)/);
    if (match) data.browser_version = match[1];
  } else if (ua.includes('Edg')) {
    data.browser_name = 'Edge';
    const match = ua.match(/Edg\/([\d.]+)/);
    if (match) data.browser_version = match[1];
  }

  // OS detection
  if (ua.includes('Windows NT')) {
    data.os_name = 'Windows';
    if (ua.includes('Windows NT 10.0')) data.os_version = '10/11';
  } else if (ua.includes('Mac OS X')) {
    data.os_name = 'macOS';
    const match = ua.match(/Mac OS X ([\d_]+)/);
    if (match) data.os_version = match[1].replace(/_/g, '.');
  } else if (ua.includes('Android')) {
    data.os_name = 'Android';
    const match = ua.match(/Android ([\d.]+)/);
    if (match) data.os_version = match[1];
  } else if (ua.includes('iPhone') || ua.includes('iPad')) {
    data.os_name = ua.includes('iPad') ? 'iPadOS' : 'iOS';
    const match = ua.match(/OS ([\d_]+)/);
    if (match) data.os_version = match[1].replace(/_/g, '.');
  }

  // Device detection
  if (ua.includes('iPhone')) {
    data.device_vendor = 'Apple';
    data.device_model = 'iPhone';
  } else if (ua.includes('iPad')) {
    data.device_vendor = 'Apple';
    data.device_model = 'iPad';
  } else if (ua.includes('Mac')) {
    data.device_vendor = 'Apple';
    data.device_model = 'Mac';
  }

  return data;
}

// Get session data from localStorage/sessionStorage
function getSessionData() {
  if (typeof window === 'undefined') return {};
  
  const sessionStart = sessionStorage.getItem('session-start');
  const landingPage = localStorage.getItem('landing-page');
  const pagesViewed = sessionStorage.getItem('pages-viewed');
  const returningVisitor = localStorage.getItem('returning-visitor');
  
  const duration = sessionStart 
    ? Math.floor((Date.now() - parseInt(sessionStart)) / 1000)
    : 0;
  
  return {
    landing_page: landingPage || window.location.href,
    session_duration: duration,
    pages_viewed: pagesViewed ? parseInt(pagesViewed) : 1,
    is_returning_visitor: returningVisitor === 'true',
  };
}

// Initialize session tracking
export function initSessionTracking() {
  if (typeof window === 'undefined') return;
  
  // Set session start if not exists (session-based)
  if (!sessionStorage.getItem('session-start')) {
    sessionStorage.setItem('session-start', Date.now().toString());
  }
  
  // Set landing page if not exists (persistent across sessions)
  if (!localStorage.getItem('landing-page')) {
    localStorage.setItem('landing-page', window.location.href);
  }
  
  // Increment pages viewed (session-based)
  const currentPages = parseInt(sessionStorage.getItem('pages-viewed') || '0');
  sessionStorage.setItem('pages-viewed', (currentPages + 1).toString());
  
  // Mark as returning visitor if they've been here before (persistent)
  if (localStorage.getItem('has-visited')) {
    localStorage.setItem('returning-visitor', 'true');
  } else {
    localStorage.setItem('has-visited', 'true');
    localStorage.setItem('returning-visitor', 'false');
  }
}

// Main function to collect all tracking data
export function collectTrackingData(): TrackingData {
  if (typeof window === 'undefined') return { cookies_accepted: false };
  
  const cookiesAccepted = areCookiesAccepted();
  
  // If cookies not accepted, only return basic required data
  if (!cookiesAccepted) {
    return {
      cookies_accepted: false,
      current_page: window.location.href,
      user_agent: navigator.userAgent,
    };
  }
  
  // Full tracking data if cookies accepted
  const ua = navigator.userAgent;
  const uaData = parseUserAgent(ua);
  const sessionData = getSessionData();
  const utmParams = getUTMParameters();
  
  return {
    // Timestamps
    user_local_time: new Date().toISOString(),
    user_timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    
    // Device & Browser
    ...uaData,
    device_type: getDeviceType(),
    
    // Traffic Source & Marketing
    referrer: document.referrer || undefined,
    referrer_domain: document.referrer ? extractDomain(document.referrer) : undefined,
    ...utmParams,
    
    // Session Information
    ...sessionData,
    current_page: window.location.href,
    
    // Technical Details
    screen_resolution: `${window.screen.width}x${window.screen.height}`,
    language: navigator.language,
    user_agent: ua,
    
    // Consent
    cookies_accepted: true,
  };
}
