/**
 * Content Index - Main entry point for all website content
 * 
 * Organized structure:
 * - lib/content/home/ - Home page sections (hero, services, offices, etc.)
 * - lib/content/shared/ - Shared components (navigation, footer)
 * - lib/content/legal/ - Legal pages (privacy policy, terms of service)
 * 
 * To edit content:
 * 1. Navigate to the specific file (e.g., lib/content/home/hero.ts)
 * 2. Make your changes
 * 3. Save - components will automatically use the updated content
 */

// Re-export all content for easy imports
export * from './content/home';
export * from './content/shared';
export * from './content/legal';
