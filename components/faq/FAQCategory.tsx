'use client';

import { useState } from 'react';
import { theme } from '@/lib/theme';
import FAQItem from './FAQItem';

interface FAQTabsProps {
  categories: Array<{
    id: string;
    title: string;
    description: string;
    items: Array<{ question: string; answer: string }>;
  }>;
}

export default function FAQTabs({ categories }: FAQTabsProps) {
  const [activeTab, setActiveTab] = useState(0);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleTabChange = (index: number) => {
    setActiveTab(index);
    setOpenIndex(null); // Close any open items when switching tabs
  };

  const activeCategory = categories[activeTab];

  return (
    <div className="max-w-5xl mx-auto">
      {/* Tab Navigation */}
      <div className="mb-8 border-b border-gray-200 overflow-x-auto">
        <div className="flex space-x-1 min-w-max">
          {categories.map((category, index) => (
            <button
              key={category.id}
              onClick={() => handleTabChange(index)}
              className={`px-6 py-3 text-sm font-semibold whitespace-nowrap border-b-2 transition-colors ${
                activeTab === index
                  ? 'border-primary text-primary'
                  : 'border-transparent text-gray-600 hover:text-gray-900 hover:border-gray-300'
              }`}
            >
              {category.title}
            </button>
          ))}
        </div>
      </div>

      {/* Active Category Content */}
      <div className="bg-white rounded-xl border border-gray-200 p-6 md:p-8">
        <div className="mb-6">
          <h2 className={`${theme.fontSize['2xl']} ${theme.fontWeight.bold} text-gray-900 mb-2`}>
            {activeCategory.title}
          </h2>
          <p className={`${theme.fontSize.sm} text-gray-600`}>
            {activeCategory.description}
          </p>
        </div>

        <div className="space-y-3">
          {activeCategory.items.map((item, index) => (
            <FAQItem
              key={index}
              question={item.question}
              answer={item.answer}
              isOpen={openIndex === index}
              onToggle={() => toggleItem(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
