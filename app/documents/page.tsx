import { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { DocumentsHeroSection, DocumentsContentSection } from '@/sections/documents';

export const metadata: Metadata = {
  title: 'Documents | FOREIGNERS.pl',
  description: 'Essential documents and forms for immigration services in Poland.',
};

export default function DocumentsPage() {
  return (
    <>
      <Navbar />
      <div className="bg-gray-50 min-h-screen">
        <DocumentsHeroSection />
        <DocumentsContentSection />
      </div>
      <Footer />
    </>
  );
}