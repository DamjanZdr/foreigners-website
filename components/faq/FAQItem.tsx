'use client';

import { theme } from '@/lib/theme';

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

export default function FAQItem({ question, answer, isOpen, onToggle }: FAQItemProps) {
  return (
    <div className={`border border-gray-200 ${theme.radius.lg} overflow-hidden bg-white`}>
      <button
        onClick={onToggle}
        className={`w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 ${theme.transition.default}`}
      >
        <span className={`${theme.fontSize.base} ${theme.fontWeight.semibold} text-gray-900 pr-8`}>
          {question}
        </span>
        <svg
          className={`w-5 h-5 text-gray-500 flex-shrink-0 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {isOpen && (
        <div className="px-6 pb-4">
          <div className={`text-gray-600 ${theme.fontSize.sm} whitespace-pre-line leading-relaxed`}>
            {answer}
          </div>
        </div>
      )}
    </div>
  );
}
