export { immigrationContent } from './immigration';
export { drivingContent } from './driving';
export { businessContent } from './business';
export { languageContent } from './language';
export { studiesContent } from './studies';

// Service content map for dynamic routing
export const serviceContentMap = {
  immigration: () => import('./immigration').then(m => m.immigrationContent),
  driving: () => import('./driving').then(m => m.drivingContent),
  business: () => import('./business').then(m => m.businessContent),
  language: () => import('./language').then(m => m.languageContent),
  studies: () => import('./studies').then(m => m.studiesContent),
} as const;

export type ServiceType = keyof typeof serviceContentMap;
