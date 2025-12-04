# Foreigners Website - Project Documentation

## Table of Contents
1. [Project Overview](#project-overview)
2. [Technology Stack](#technology-stack)
3. [Project Architecture](#project-architecture)
4. [File Structure](#file-structure)
5. [Content Management](#content-management)
6. [Component System](#component-system)
7. [Routing & Pages](#routing--pages)
8. [Styling & Theme](#styling--theme)
9. [Key Features](#key-features)
10. [Development Workflow](#development-workflow)
11. [Important Patterns](#important-patterns)

---

## Project Overview

This is a Next.js website for a service company helping foreigners in Poland with immigration, driving, language, business, and study-related services. The site features:

- **Landing Page**: Single-page design with sections (Hero, Services, Offices, Consultation)
- **Service Pages**: Dynamic pages for 5 service categories (Immigration, Driving, Language, Business, Studies)
- **Content-Driven Architecture**: All text content is managed in TypeScript files for easy updates
- **Modern Animations**: Smooth transitions, 3D effects, custom cursor, particle effects
- **Responsive Design**: Mobile-first approach with Tailwind CSS 4

---

## Technology Stack

### Core Framework
- **Next.js 16.0.6**: React framework with App Router and Turbopack
- **React 19.2.0**: Latest React with server components
- **TypeScript 5**: Full type safety

### Styling & Animation
- **Tailwind CSS 4**: Utility-first CSS framework with PostCSS
- **Motion (Framer Motion) 12.23.25**: Animation library for smooth transitions

### Build Tools
- **Turbopack**: Next.js's ultra-fast bundler
- **ESLint 9**: Code linting with Next.js config
- **Babel React Compiler 1.0.0**: Optimizes React rendering

---

## Project Architecture

### Design Philosophy
1. **Content Separation**: All text content lives in `lib/content/` - never hardcoded in components
2. **Component Reusability**: Modular components that accept content via props
3. **Type Safety**: Everything is typed with TypeScript interfaces
4. **Static Generation**: Service pages use SSG (Static Site Generation) for performance

### Data Flow
```
lib/content/*.ts (Content) 
    
Components (Render content)
    
Sections (Compose components)
    
Pages (Compose sections)
```

---

## File Structure

```
foreigners-website/
 app/                          # Next.js App Router
    layout.tsx               # Root layout with metadata
    page.tsx                 # Home page
    services/
        [service]/
            page.tsx         # Dynamic service pages

 components/                   # Reusable UI components
    forms/
       LeadForm.tsx        # General lead capture form
    layout/
       Container.tsx       # Responsive container wrapper
       Footer.tsx          # Site footer
       Navbar.tsx          # Navigation with smooth scroll
       Section.tsx         # Section wrapper with optional ID
    ui/
        animated/           # Animation components
           AnimatedGradient.tsx
           AnimatedTagline.tsx  # Hero tagline animation
           FadeIn.tsx
           FloatingBlob.tsx
           ParticleField.tsx
           RippleButton.tsx
           ScaleIn.tsx
           SlideIn.tsx
           Tilt3D.tsx
        buttons/
           Button.tsx      # Primary button component
        cards/
           Card.tsx        # Base card component
           ServiceCard.tsx # Service display card
        icons/
           IconWrapper.tsx
           SocialIcon.tsx
        inputs/
           Checkbox.tsx
           Input.tsx
           Select.tsx
        CustomCursor.tsx    # Custom cursor effect
        SectionHeading.tsx  # Styled section headings
        Tab.tsx             # Tab component for navigation

 sections/                     # Page section components
    home/                    # Home page sections
       ConsultationSection.tsx  # id="consultation"
       HeroSection.tsx
       MidCtaSection.tsx
       OfficesSection.tsx       # id="offices"
       ServicesSection.tsx      # id="services"
    service/                 # Service page sections
        OtherServicesSection.tsx
        QASection.tsx        # Q&A with search
        ServiceHeroSection.tsx
        TrustSection.tsx

 lib/                          # Utilities and content
    content/                 # ALL SITE CONTENT HERE
       home/               # Home page content
          consultation.ts
          hero.ts
          mid-cta.ts
          offices.ts
          services.ts     # Service cards with links
       services/           # Service page content
          business.ts     # Business service content
          driving.ts      # Driving service content
          immigration.ts  # Immigration service content
          language.ts     # Language service content
          studies.ts      # Studies service content
       shared/             # Shared content
           footer.ts       # Footer links and text
           navigation.ts   # Navigation links
    content.ts              # Content barrel export
    theme.ts                # Theme configuration

 hooks/                        # Custom React hooks
    use3DTilt.ts
    useAnimatedGradient.ts
    useCursorEffect.ts
    useMediaQuery.ts
    useMobileMenu.ts
    useScrollAnimation.ts
    useScrollPosition.ts

 docs/                         # Documentation
    PROJECT_DOCUMENTATION.md # This file

 public/                       # Static assets
 next.config.ts               # Next.js configuration
 tailwind.config.ts           # Tailwind CSS configuration
 package.json                 # Dependencies and scripts
```

---

## Content Management

### Content Structure

**All content is centralized in `lib/content/`**. This is the ONLY place where text content should be modified.

### Content Files

#### Home Page Content (`lib/content/home/`)

**`hero.ts`**
```typescript
export const heroContent = {
  taglineWords: ['One', 'Stop', 'Shop', 'For Foreigners', 'The Only'],
  title: 'Main title',
  description: 'Hero description',
  cta: { primary: '...', secondary: '...' }
}
```

**`services.ts`**
```typescript
export const servicesContent = {
  sectionDescription: '...',
  items: [
    {
      title: 'Immigration',
      subtitle: 'Make Poland your home...',
      description: '...',
      link: '/services/immigration'  // Links to service page
    },
    // ... more services
  ]
}
```

**`offices.ts`** - Office locations
**`mid-cta.ts`** - Mid-page CTA section
**`consultation.ts`** - Consultation form section

#### Service Page Content (`lib/content/services/`)

Each service file follows this structure:

```typescript
export const [service]Content = {
  hero: {
    title: 'Service Name',
    subtitle: 'Short tagline',
    description: 'Hero description with CTA',
    ctaButton: 'Button text'
  },
  trust: {
    heading: 'Main trust heading',
    subheading: 'Trust subheading',
    description: 'Why trust us description',
    stats: {
      period: 'past 6 months',
      count: '500+',
      text: 'trust statement'
    }
  },
  qa: {
    title: 'Q&A Section Title',
    searchPlaceholder: 'Search placeholder',
    items: [
      { question: '...', answer: '...' },
      // 8-13 Q&A items per service
    ]
  },
  otherServices: {
    heading: 'Explore other services',
    ctaButton: 'View all services',
    alternativeText: 'Or get in touch',
    categories: ['immigration', 'driving', ...] // Exclude current
  }
}
```

**Service Files:**
- `immigration.ts` - 13 Q&A items (most comprehensive)
- `driving.ts` - 8 Q&A items
- `business.ts` - 8 Q&A items
- `language.ts` - 8 Q&A items
- `studies.ts` - 8 Q&A items

#### Shared Content (`lib/content/shared/`)

**`navigation.ts`**
```typescript
export const navContent = {
  logo: { text: 'Logo' },
  links: [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/#services' },      // Scrolls to section
    { label: 'Offices', href: '/#offices' },        // Scrolls to section
    { label: 'Consultation', href: '/#consultation' } // Scrolls to section
  ],
  cta: { text: 'Contact Us', href: '/contact' }
}
```

**`footer.ts`** - Footer content with service links, social links, contact info

### Content Import Pattern

```typescript
// In pages/components, import from lib/content.ts
import { heroContent, servicesContent } from '@/lib/content'

// Or import directly
import { immigrationContent } from '@/lib/content/services/immigration'
```

---

## Component System

### Layout Components

**`Container.tsx`**
- Responsive max-width wrapper
- Props: `children`, `className`

**`Section.tsx`**
- Section wrapper with optional ID for navigation anchors
- Props: `children`, `className`, `id` (optional)
- Used with IDs: `#services`, `#offices`, `#consultation` on home page

**`Navbar.tsx`**
- Navigation with smooth scroll functionality
- Handles hash anchors (`/#section-id`)
- Mobile menu with hamburger
- `handleNavClick` function: Detects `#` in href, scrolls to section on same page, navigates then scrolls on different pages

**`Footer.tsx`**
- Multi-column footer layout
- Pulls content from `lib/content/shared/footer.ts`

### Form Components

**`LeadForm.tsx`** (renamed from ConsultationForm)
- General-purpose lead capture form
- Props: `title?: string` (optional)
- Default title: "Start now, pay in installments"
- Fields: Name, Email, Phone, Service (select), Consent checkbox
- Used in: ServiceHeroSection, ConsultationSection

### UI Components

**Buttons:**
- `Button.tsx` - Primary button with variants

**Cards:**
- `Card.tsx` - Base card with hover effects
- `ServiceCard.tsx` - Displays service info, links to service pages

**Inputs:**
- `Input.tsx` - Text input with label and error state
- `Select.tsx` - Dropdown select
- `Checkbox.tsx` - Checkbox with label

**Animated Components:**
- `AnimatedTagline.tsx` - Hero tagline with word-by-word animation
  - Words: "One"  "Stop"  "Shop"  "For Foreigners"  "The Only"
- `FadeIn.tsx` - Fade in animation
- `SlideIn.tsx` - Slide in from direction
- `ScaleIn.tsx` - Scale up animation
- `Tilt3D.tsx` - 3D tilt effect on mouse move
- `FloatingBlob.tsx` - Floating gradient blob
- `ParticleField.tsx` - Particle background effect
- `AnimatedGradient.tsx` - Animated gradient background
- `RippleButton.tsx` - Button with ripple click effect

**Other:**
- `CustomCursor.tsx` - Custom cursor with trail effect
- `SectionHeading.tsx` - Styled section titles
- `Tab.tsx` - Tab navigation component

### Custom Hooks

```typescript
use3DTilt()           // 3D tilt effect
useAnimatedGradient() // Animated gradient colors
useCursorEffect()     // Custom cursor logic
useMediaQuery()       // Responsive breakpoints
useMobileMenu()       // Mobile menu state
useScrollAnimation()  // Scroll-triggered animations
useScrollPosition()   // Track scroll position
```

---

## Routing & Pages

### Home Page (`app/page.tsx`)

Single-page design with sections:

```typescript
export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesSection />      {/* id="services" */}
      <MidCtaSection />
      <OfficesSection />       {/* id="offices" */}
      <ConsultationSection />  {/* id="consultation" */}
    </>
  )
}
```

### Dynamic Service Pages (`app/services/[service]/page.tsx`)

**Route Pattern:** `/services/[service]`

**Generated Routes:**
- `/services/immigration`
- `/services/driving`
- `/services/language`
- `/services/business`
- `/services/studies`

**Implementation:**

```typescript
// Content mapping
const serviceContent = {
  immigration: immigrationContent,
  driving: drivingContent,
  language: languageContent,
  business: businessContent,
  studies: studiesContent,
}

// Static generation
export function generateStaticParams() {
  return [
    { service: 'immigration' },
    { service: 'driving' },
    { service: 'language' },
    { service: 'business' },
    { service: 'studies' },
  ]
}

// Page component
export default function ServicePage({ params }: { params: { service: string } }) {
  const content = serviceContent[params.service]
  
  return (
    <>
      <Navbar />
      <ServiceHeroSection content={content.hero} />
      <TrustSection content={content.trust} />
      <QASection content={content.qa} />
      <OtherServicesSection content={content.otherServices} />
      <Footer />
    </>
  )
}
```

### Navigation Flow

1. **Home to Service:** Click service card  Navigate to `/services/[category]`
2. **Nav to Section:** Click "Services" nav  Scroll to `#services` section
3. **Cross-Page Section:** From service page, click "Offices"  Navigate to `/`  Scroll to `#offices`

---

## Styling & Theme

### Tailwind CSS 4

- **Config:** `tailwind.config.ts`
- **PostCSS:** `@tailwindcss/postcss`
- **Custom Classes:** Utility-first approach

### Theme Configuration (`lib/theme.ts`)

```typescript
export const theme = {
  colors: {
    primary: '...',
    secondary: '...',
    // ...
  },
  spacing: { ... },
  typography: { ... }
}
```

### Responsive Breakpoints

```typescript
// Mobile-first
sm: '640px'   // Small devices
md: '768px'   // Tablets
lg: '1024px'  // Laptops
xl: '1280px'  // Desktops
2xl: '1536px' // Large screens
```

---

## Key Features

### 1. Smooth Section Scrolling

Navigation links use hash anchors (`/#section-id`) to scroll smoothly to sections:

```typescript
// In Navbar.tsx
const handleNavClick = (href: string) => {
  if (href.includes('#')) {
    const [path, hash] = href.split('#')
    if (path === '' || path === '/') {
      // Same page - just scroll
      document.getElementById(hash)?.scrollIntoView({ behavior: 'smooth' })
    } else {
      // Different page - navigate first, then scroll
      router.push(href)
    }
  }
}
```

**Sections with IDs:**
- `ServicesSection`  `id="services"`
- `OfficesSection`  `id="offices"`
- `ConsultationSection`  `id="consultation"`

### 2. Animated Hero Tagline

The hero section displays an animated tagline that cycles through words:

**Animation Order:**
1. "One" (appears)
2. "Stop" (replaces "One")
3. "Shop" (replaces "Stop")
4. "For Foreigners" (replaces "Shop")
5. "The Only" (replaces "For Foreigners", stays)

**Implementation:** `components/ui/animated/AnimatedTagline.tsx`

### 3. Dynamic Service Pages

All 5 service pages are generated from a single template with different content:

- Uses Next.js App Router dynamic routes: `[service]`
- Content pulled from `lib/content/services/[service].ts`
- Static Site Generation (SSG) via `generateStaticParams`
- Each page has 4 sections: Hero, Trust, Q&A, Other Services

### 4. Modular Content Architecture

**Benefits:**
- Easy content updates without touching code
- Type-safe content with TypeScript
- Centralized management
- Reusable components

**Pattern:**
```typescript
// Content file (lib/content/services/immigration.ts)
export const immigrationContent = { ... }

// Component
function ServiceHero({ content }) {
  return <h1>{content.hero.title}</h1>
}

// Page
<ServiceHero content={immigrationContent} />
```

### 5. Q&A Search Functionality

Service pages include searchable Q&A sections:
- Real-time filtering
- Expandable/collapsible answers
- 8-13 items per service

---

## Development Workflow

### Scripts

```bash
npm run dev     # Start development server (localhost:3000)
npm run build   # Build for production
npm run start   # Start production server
npm run lint    # Run ESLint
```

### Development Server

```bash
npm run dev
# Visit: http://localhost:3000
```

### Building for Production

```bash
npm run build
# Generates optimized static pages
# Output: .next/ directory
```

### Adding New Content

1. **Update content file** in `lib/content/`
2. **No component changes needed** (unless structure changes)
3. **Test locally:** `npm run dev`
4. **Build:** `npm run build`

### Adding New Service

1. **Create content file:** `lib/content/services/new-service.ts`
   - Follow structure of existing services
   - Export `newServiceContent` with hero, trust, qa, otherServices

2. **Update service content map** in `app/services/[service]/page.tsx`:
   ```typescript
   const serviceContent = {
     // ... existing
     'new-service': newServiceContent,
   }
   ```

3. **Add to generateStaticParams**:
   ```typescript
   export function generateStaticParams() {
     return [
       // ... existing
       { service: 'new-service' },
     ]
   }
   ```

4. **Add service card** in `lib/content/home/services.ts`:
   ```typescript
   {
     title: 'New Service',
     subtitle: '...',
     description: '...',
     link: '/services/new-service'
   }
   ```

5. **Update footer** in `lib/content/shared/footer.ts` if needed

---

## Important Patterns

### 1. Content-Component Separation

** Don't:**
```typescript
function Hero() {
  return <h1>Immigration Services</h1>  // Hardcoded
}
```

** Do:**
```typescript
function Hero({ content }) {
  return <h1>{content.title}</h1>  // From content file
}
```

### 2. TypeScript Typing

All content should be typed:

```typescript
interface HeroContent {
  title: string
  subtitle: string
  description: string
  ctaButton: string
}

export const immigrationContent: {
  hero: HeroContent
  trust: TrustContent
  qa: QAContent
  otherServices: OtherServicesContent
} = { ... }
```

### 3. Component Reusability

**Single responsibility:** Each component does one thing well
```typescript
//  Good: Reusable with props
<ServiceCard title={item.title} link={item.link} />

//  Bad: Hardcoded for one use case
<ImmigrationCard />
```

### 4. Consistent Naming

- **Content files:** `kebab-case.ts` (e.g., `mid-cta.ts`)
- **Components:** `PascalCase.tsx` (e.g., `ServiceCard.tsx`)
- **Hooks:** `camelCase.ts` with `use` prefix (e.g., `useScrollPosition.ts`)
- **Exports:** `camelCase` for content (e.g., `heroContent`)

### 5. Section ID Pattern

For sections that need navigation anchors:

```typescript
<Section id="section-name">
  {/* content */}
</Section>
```

Navigation link:
```typescript
{ label: 'Section Name', href: '/#section-name' }
```

---

## Common Tasks

### Update Text Content

1. Locate content file in `lib/content/`
2. Modify the exported object
3. Save and test

### Add New Animation

1. Create component in `components/ui/animated/`
2. Use `motion` library for animations
3. Export from `components/ui/animated/index.ts`

### Modify Navigation

Edit `lib/content/shared/navigation.ts`:
```typescript
export const navContent = {
  links: [
    { label: 'New Link', href: '/new-page' }
  ]
}
```

### Update Service Q&A

Edit respective file in `lib/content/services/`:
```typescript
qa: {
  items: [
    { question: 'New question?', answer: 'Detailed answer...' },
    // ... more items
  ]
}
```

---

## Architecture Decisions

### Why Content Separation?

- **Easy Updates:** Non-developers can update content
- **Maintainability:** Content changes don't affect code
- **Type Safety:** TypeScript catches content structure errors
- **Reusability:** Same component with different content

### Why Dynamic Routes?

- **DRY Principle:** One template for all service pages
- **Scalability:** Easy to add new services
- **Performance:** Static generation at build time
- **SEO:** Each service has unique URL and metadata

### Why Tailwind CSS?

- **Utility-First:** Rapid development
- **Consistency:** Design system in config
- **Performance:** Purges unused CSS
- **Responsive:** Mobile-first breakpoints

---

## Tips for AI Assistants

1. **Always check content files first** before modifying components
2. **Content changes  edit `lib/content/`**, not components
3. **New features  check if similar pattern exists** in `components/ui/`
4. **Section navigation  ensure Section has `id` prop** and nav link has `/#id`
5. **Service pages  follow existing structure** in `lib/content/services/`
6. **Forms  use LeadForm component** with optional title prop
7. **Animations  import from** `components/ui/animated/`
8. **Build before testing production** to ensure SSG works

---

## Project Status

**Current State:**
-  Home page complete with all sections
-  5 dynamic service pages (Immigration, Driving, Language, Business, Studies)
-  Navigation with smooth scrolling
-  Comprehensive Q&A content for all services
-  Responsive design
-  Animation system
-  Content management system

**Next Steps for Development:**
- Contact page implementation
- Form submission handling
- CMS integration (optional)
- Analytics setup
- SEO optimization
- Performance optimization

---

## Quick Reference

### Key Files to Know
- `app/page.tsx` - Home page
- `app/services/[service]/page.tsx` - Service pages template
- `lib/content.ts` - Content barrel export
- `lib/content/services/*.ts` - Service content
- `lib/content/home/*.ts` - Home page content
- `lib/content/shared/*.ts` - Shared content (nav, footer)
- `components/forms/LeadForm.tsx` - Form component
- `components/layout/Navbar.tsx` - Navigation logic

### Import Paths
```typescript
import { content } from '@/lib/content'
import { Component } from '@/components/ui/Component'
import { Section } from '@/sections/home/Section'
import { useHook } from '@/hooks/useHook'
```

---

**Last Updated:** December 3, 2025
