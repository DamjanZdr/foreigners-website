'use client';

import { useEffect } from 'react';
import { initSessionTracking } from '@/lib/utils/tracking';

export default function SessionTracker() {
  useEffect(() => {
    // Initialize session tracking on mount
    initSessionTracking();
  }, []);

  return null;
}
