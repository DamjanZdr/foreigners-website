// FAQ Content - Aggregated from all service pages
import { immigrationContent } from './services/immigration';
import { drivingContent } from './services/driving';
import { languageContent } from './services/language';
import { businessContent } from './services/business';
import { studiesContent } from './services/studies';
import { companiesContent } from './companies';

export const faqContent = {
  categories: [
    {
      id: 'overview',
      title: 'Foreigners.pl',
      description: 'Comprehensive services for foreigners living in Poland',
      items: [
        {
          question: 'What services does Foreigners.pl offer?',
          answer: 'We provide comprehensive support across all aspects of life in Poland for foreigners:\n\nImmigration\n• Temporary Residence Cards\n• Permanent Residence Cards\n• EU Blue Cards\n• Visa Arrangements\n• Proof of Accommodation\n• Work Permits\n• Invitation Letter\n• Nostrification\n• Document Legalization\n• PESEL\n• Appeals\n• General Consultations\n\nDriving\n• Car Registration\n• New Driving License\n• Driving License Conversion\n• Parking Permit\n\nLanguage\n• Polish Language Courses\n• Sworn Translation\n• Remote Assistance\n• Court Interpretation\n\nBusiness\n• Register a Business\n• Simplified Accounting\n• Full Accounting\n• Payroll and HR\n• Additional Services\n\nStudies\n• University Admission\n• Visa & Entry\n• PESEL & TRC\n• Settlement Support\n\nFor Companies\n• Work Permits\n• Compliance Management\n• Employee Relocation\n• Legal Consulting',
        },
      ],
    },
    {
      id: 'immigration',
      title: 'Immigration',
      description: 'Residence cards, visas, work permits, and legal stay in Poland',
      items: immigrationContent.qa.items,
    },
    {
      id: 'driving',
      title: 'Driving',
      description: 'Driving licenses, car registration, and parking permits',
      items: drivingContent.qa.items,
    },
    {
      id: 'language',
      title: 'Language',
      description: 'Translation services, language courses, and interpretation',
      items: languageContent.qa.items,
    },
    {
      id: 'business',
      title: 'Business',
      description: 'Business registration, accounting, and payroll services',
      items: businessContent.qa.items,
    },
    {
      id: 'studies',
      title: 'Studies',
      description: 'University admissions and student visa support',
      items: studiesContent.qa.items,
    },
    {
      id: 'companies',
      title: 'For Companies',
      description: 'Corporate immigration and employee relocation services',
      items: companiesContent.faq,
    },
  ],
} as const;
