import type { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import {
  CompaniesHeroSection,
  BenefitsSection,
  ServicesSection,
  ProcessSection,
  CompaniesFormSection,
} from '@/sections/companies';

export const metadata: Metadata = {
  title: 'For Companies - Hire Foreign Talent | Foreigners in Poland',
  description: 'Complete legal support for companies hiring foreign employees in Poland. We handle work permits, residence cards, and all compliance requirements.',
};

export default function CompaniesPage() {
  return (
    <>
      <Navbar />
      <main>
        <CompaniesHeroSection />
        <BenefitsSection />
        <ServicesSection />
        <ProcessSection />
        <CompaniesFormSection />
      </main>
      <Footer />
    </>
  );
}
