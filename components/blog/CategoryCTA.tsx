'use client';

import { Button } from '@/components/ui/buttons';

interface CategoryCTAProps {
  category: {
    id: string;
    name: string;
    slug: string;
  };
}

const categoryCTA: Record<string, { title: string; description: string; buttonText: string; link: string }> = {
  immigration: {
    title: 'Need Help with Immigration?',
    description: 'Our experts can guide you through every step of your immigration process in Poland.',
    buttonText: 'Request Consultation',
    link: '/services/immigration',
  },
  driving: {
    title: 'Ready to Get Your Polish Driving License?',
    description: 'We will help you navigate the process of obtaining or exchanging your driving license in Poland.',
    buttonText: 'Start Your Application',
    link: '/services/driving',
  },
  language: {
    title: 'Looking for Language Support?',
    description: 'Professional translation and interpretation services for all your documents and appointments.',
    buttonText: 'Get Language Help',
    link: '/services/language',
  },
  business: {
    title: 'Starting a Business in Poland?',
    description: 'Let us help you establish and grow your business with expert guidance and support.',
    buttonText: 'Book Consultation',
    link: '/services/business',
  },
  companies: {
    title: 'Corporate Immigration Solutions',
    description: 'Streamline your company immigration processes with our dedicated corporate services.',
    buttonText: 'Contact Us',
    link: '/companies',
  },
  studies: {
    title: 'Planning to Study in Poland?',
    description: 'Get assistance with student visas, university enrollment, and settlement in Poland.',
    buttonText: 'Learn More',
    link: '/services/studies',
  },
};

export default function CategoryCTA({ category }: CategoryCTAProps) {
  const cta = categoryCTA[category.slug] || {
    title: 'Need Assistance?',
    description: 'Contact us for expert help with your immigration needs in Poland.',
    buttonText: 'Get in Touch',
    link: '/#consultation',
  };

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-4 shadow-sm hover:shadow-md transition-shadow">
      <h3 className="text-base font-semibold text-gray-900 mb-1.5">{cta.title}</h3>
      <p className="text-xs text-gray-600 mb-3">{cta.description}</p>
      <Button href={cta.link} variant="primary" size="sm" className="w-full justify-center text-sm">
        {cta.buttonText}
      </Button>
    </div>
  );
}