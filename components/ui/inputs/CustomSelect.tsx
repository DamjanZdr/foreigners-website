'use client';

import { useState, useRef, useEffect } from 'react';
import { theme } from '@/lib/theme';

interface Option {
  value: string;
  label: string;
  icon?: string; // For emojis or text icons
  code?: string; // For country codes to show as fallback
}

interface CustomSelectProps {
  id?: string;
  label?: string;
  value: string;
  onChange: (value: string) => void;
  options: Option[];
  placeholder?: string;
  required?: boolean;
  className?: string;
  showSearch?: boolean;
}

export default function CustomSelect({
  id,
  label,
  value,
  onChange,
  options,
  placeholder = 'Select an option',
  required = false,
  className = '',
  showSearch = false,
}: CustomSelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const dropdownRef = useRef<HTMLDivElement>(null);

  const selectedOption = options.find(opt => opt.value === value);
  
  const filteredOptions = showSearch
    ? options.filter(opt => 
        opt.label.toLowerCase().includes(searchQuery.toLowerCase()) ||
        opt.value.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : options;

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
        setSearchQuery('');
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const handleSelect = (optionValue: string) => {
    onChange(optionValue);
    setIsOpen(false);
    setSearchQuery('');
  };

  return (
    <div className={`relative ${className}`} ref={dropdownRef}>
      {label && (
        <label
          htmlFor={id}
          className={`block ${theme.fontSize.sm} ${theme.fontWeight.semibold} text-gray-700 mb-2`}
        >
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}

      {/* Selected Value Display / Trigger Button */}
      <button
        type="button"
        id={id}
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full px-3 py-2 ${theme.radius.md} border border-gray-100/50 bg-white/95 backdrop-blur-sm focus:border-primary focus:ring-2 focus:ring-primary-light outline-none ${theme.transition.default} text-left flex items-center justify-between ${!selectedOption ? 'text-gray-400' : 'text-gray-900'}`}
      >
        <span className="flex items-center gap-2">
          {selectedOption ? (
            <>
              {selectedOption.code && (
                <span className={`fi fi-${selectedOption.code.toLowerCase()} text-lg leading-none`}></span>
              )}
              {!selectedOption.code && selectedOption.icon && (
                <span className="text-xl leading-none">{selectedOption.icon}</span>
              )}
              <span>{selectedOption.label}</span>
            </>
          ) : (
            <span>{placeholder}</span>
          )}
        </span>
        <svg
          className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className={`absolute z-50 w-full mt-1 ${theme.radius.md} border border-gray-200 bg-gray-50 shadow-lg max-h-60 overflow-hidden`}>
          {showSearch && (
            <div className="p-2 border-b border-gray-200">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search..."
                className={`w-full px-3 py-2 ${theme.radius.md} border border-gray-200 outline-none focus:border-primary ${theme.fontSize.sm}`}
                autoFocus
              />
            </div>
          )}
          
          <div className="overflow-y-auto max-h-48">
            {filteredOptions.length === 0 ? (
              <div className="px-3 py-2 text-gray-400 text-sm">No results found</div>
            ) : (
              filteredOptions.map((option) => (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => handleSelect(option.value)}
                  className={`w-full px-3 py-2 text-left hover:bg-gray-100 ${theme.transition.default} flex items-center gap-2 ${
                    option.value === value ? 'bg-primary/5 text-primary font-semibold' : 'text-gray-900'
                  }`}
                >
                  {option.code && (
                    <span className={`fi fi-${option.code.toLowerCase()} text-lg leading-none flex-shrink-0`}></span>
                  )}
                  {!option.code && option.icon && (
                    <span className="text-xl leading-none flex-shrink-0">{option.icon}</span>
                  )}
                  <span className="flex-1">{option.label}</span>
                </button>
              ))
            )}
          </div>
        </div>
      )}
    </div>
  );
}
