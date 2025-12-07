'use client';

import { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/sections/home/HeroSection';
import ServicesSection from '@/sections/home/ServicesSection';
import MidCtaSection from '@/sections/home/MidCtaSection';
import OfficesSection from '@/sections/home/OfficesSection';
import GoogleReviewsSection from '@/sections/home/GoogleReviewsSection';
import ConsultationSection from '@/sections/home/ConsultationSection';
import { JourneyPath } from '@/components/ui/animated';

export default function Home() {
  const [isJourneyActive, setIsJourneyActive] = useState(false);
  const [currentWaypoint, setCurrentWaypoint] = useState(0);

  const handleJourneyToggle = () => {
    if (!isJourneyActive) {
      setIsJourneyActive(true);
      setCurrentWaypoint(1);
    } else {
      setIsJourneyActive(false);
      setCurrentWaypoint(0);
    }
  };

  return (
    <>
      <Navbar />
      
      {/* Journey Path Overlay - at root level, covers entire page */}
      {isJourneyActive && (
        <JourneyPath 
          isActive={isJourneyActive} 
          currentWaypoint={currentWaypoint}
          onWaypointClick={(id) => setCurrentWaypoint(id + 1)}
        />
      )}
      
      <div className="relative min-h-screen">
        <HeroSection 
          isJourneyActive={isJourneyActive}
          onJourneyToggle={handleJourneyToggle}
        />
        <ServicesSection />
        <MidCtaSection />
        <OfficesSection />
        <GoogleReviewsSection />
        <ConsultationSection />
      </div>
      <Footer />
    </>
  );
}



