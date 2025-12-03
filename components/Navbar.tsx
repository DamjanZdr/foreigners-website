'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-[#AB1604] rounded-full flex items-center justify-center text-white font-bold text-sm">
                F
              </div>
              <span className="text-xl font-bold text-gray-800">FOREIGNERS.pl</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-700 hover:text-[#AB1604] px-3 py-2 text-sm font-medium transition-colors">
              Home
            </Link>
            <Link href="/services" className="text-gray-700 hover:text-[#AB1604] px-3 py-2 text-sm font-medium transition-colors">
              Services
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-[#AB1604] px-3 py-2 text-sm font-medium transition-colors">
              About Us
            </Link>
            <Link href="/offices" className="text-gray-700 hover:text-[#AB1604] px-3 py-2 text-sm font-medium transition-colors">
              Offices
            </Link>
            <Link href="/consultation" className="text-gray-700 hover:text-[#AB1604] px-3 py-2 text-sm font-medium transition-colors">
              Consultation
            </Link>
            <Link href="/for-companies" className="text-gray-700 hover:text-[#AB1604] px-3 py-2 text-sm font-medium transition-colors">
              For Companies
            </Link>
          </div>

          {/* WhatsApp Button - Desktop */}
          <div className="hidden md:flex">
            <a
              href="https://wa.me/1234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-[#AB1604] text-white px-6 py-2 rounded-full font-medium hover:bg-[#8B1203] transition-colors"
            >
              <div className="w-5 h-5 bg-white rounded-full flex items-center justify-center">
                <span className="text-[#AB1604] text-xs font-bold">W</span>
              </div>
              WhatsApp
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-2">
            <a
              href="https://wa.me/1234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 bg-[#AB1604] text-white px-3 py-2 rounded-full text-sm font-medium"
            >
              <div className="w-4 h-4 bg-white rounded-full flex items-center justify-center">
                <span className="text-[#AB1604] text-xs font-bold">W</span>
              </div>
              <span className="hidden sm:inline">WhatsApp</span>
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-700 hover:text-[#AB1604] focus:outline-none"
              aria-label="Toggle menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              href="/"
              className="block text-gray-700 hover:text-[#AB1604] hover:bg-gray-50 px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/services"
              className="block text-gray-700 hover:text-[#AB1604] hover:bg-gray-50 px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              href="/about"
              className="block text-gray-700 hover:text-[#AB1604] hover:bg-gray-50 px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              About Us
            </Link>
            <Link
              href="/offices"
              className="block text-gray-700 hover:text-[#AB1604] hover:bg-gray-50 px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Offices
            </Link>
            <Link
              href="/consultation"
              className="block text-gray-700 hover:text-[#AB1604] hover:bg-gray-50 px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Consultation
            </Link>
            <Link
              href="/for-companies"
              className="block text-gray-700 hover:text-[#AB1604] hover:bg-gray-50 px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              For Companies
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
