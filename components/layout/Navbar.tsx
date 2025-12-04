'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { theme } from '@/lib/theme';
import { Button } from '@/components/ui/buttons';
import { useMobileMenu, useScrollPosition } from '@/hooks';
import { navContent } from '@/lib/content';
import Logo from '@/components/ui/Logo';

export default function Navbar() {
  const { isOpen, toggle, close } = useMobileMenu();
  const { isScrolled } = useScrollPosition();
  const router = useRouter();

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    // Check if it's a section anchor link
    if (href.startsWith('/#')) {
      e.preventDefault();
      const sectionId = href.substring(2); // Remove '/#'
      
      // If we're already on home page, just scroll
      if (window.location.pathname === '/') {
        const element = document.getElementById(sectionId);
        element?.scrollIntoView({ behavior: 'smooth' });
      } else {
        // Navigate to home page first, then scroll
        router.push('/');
        setTimeout(() => {
          const element = document.getElementById(sectionId);
          element?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
      close();
    }
  };

  return (
    <nav className={`${theme.glass.light} sticky top-0 z-50 ${theme.transition.default} ${isScrolled ? theme.shadow.lg : theme.shadow.sm}`}>
      <div className={theme.spacing.container}>
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <Logo width={220} height={50} className="hover:opacity-80 transition-opacity" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navContent.links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`text-gray-700 hover:text-primary px-3 py-2 ${theme.fontSize.sm} ${theme.fontWeight.medium} ${theme.transition.default}`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* WhatsApp Button - Desktop */}
          <div className="hidden md:flex">
            <Button href="https://wa.me/1234567890" variant="primary" size="md">
              <div className={`w-5 h-5 bg-white ${theme.radius.full} flex items-center justify-center`}>
                <span className={`text-primary ${theme.fontSize.xs} ${theme.fontWeight.bold}`}>W</span>
              </div>
              WhatsApp
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-2">
            <Button href="https://wa.me/1234567890" variant="primary" size="sm">
              <div className={`w-4 h-4 bg-white ${theme.radius.full} flex items-center justify-center`}>
                <span className={`text-primary ${theme.fontSize.xs} ${theme.fontWeight.bold}`}>W</span>
              </div>
              <span className="hidden sm:inline">WhatsApp</span>
            </Button>
            <button
              type="button"
              onClick={toggle}
              className={`text-gray-700 hover:text-primary focus:outline-none p-2`}
              aria-label="Toggle menu"
              aria-expanded={isOpen}
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu - Full screen overlay */}
      {isOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 md:hidden z-40"
            onClick={close}
            aria-hidden="true"
          />
          
          {/* Menu Panel */}
          <div className="fixed inset-y-0 right-0 w-full max-w-sm bg-white md:hidden z-50 shadow-2xl transform transition-transform duration-300 ease-in-out">
            <div className="flex flex-col h-full">
              {/* Menu Header */}
              <div className="flex items-center justify-between p-4 border-b">
                <span className={`${theme.fontSize.lg} ${theme.fontWeight.bold}`}>Menu</span>
                <button
                  onClick={close}
                  className="p-2 text-gray-500 hover:text-gray-700"
                  aria-label="Close menu"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Menu Items */}
              <div className="flex-1 overflow-y-auto p-4">
                <nav className="space-y-2">
                  {navContent.links.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      className={`block text-gray-700 hover:text-primary hover:bg-gray-50 px-4 py-3 ${theme.radius.md} ${theme.fontSize.base} ${theme.fontWeight.medium} ${theme.transition.default}`}
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>
              </div>

              {/* Menu Footer - CTA */}
              <div className="p-4 border-t">
                <Button href="https://wa.me/1234567890" variant="primary" size="lg" className="w-full">
                  <div className={`w-5 h-5 bg-white ${theme.radius.full} flex items-center justify-center`}>
                    <span className={`text-primary ${theme.fontSize.xs} ${theme.fontWeight.bold}`}>W</span>
                  </div>
                  Contact via WhatsApp
                </Button>
              </div>
            </div>
          </div>
        </>
      )}
    </nav>
  );
}


