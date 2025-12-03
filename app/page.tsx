import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import MidCtaSection from '@/components/MidCtaSection';
import OfficesSection from '@/components/OfficesSection';
import ConsultationSection from '@/components/ConsultationSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <MidCtaSection />
      <OfficesSection />
      <ConsultationSection />
      <Footer />
    </>
  );
}

