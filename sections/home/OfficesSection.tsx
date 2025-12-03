'use client';

import { useState } from 'react';
import Section from '@/components/layout/Section';
import Container from '@/components/layout/Container';
import Tab from '@/components/ui/Tab';
import { FadeIn, SlideIn, AnimatedGradient, FloatingBlob } from '@/components/ui/animated';
import { theme } from '@/lib/theme';
import { officesContent } from '@/lib/content';

type Office = {
  name: string;
  heading: string;
  description: string;
  address: string;
  phone: string;
  email: string;
  mapEmbed: string;
};

export default function OfficesSection() {
  const [activeTab, setActiveTab] = useState<'warsaw' | 'katowice' | 'other'>('warsaw');

  const offices: Record<'warsaw' | 'katowice' | 'other', Office> = officesContent as any;

  const currentOffice = offices[activeTab];

  return (
    <Section id="offices" className="relative overflow-hidden">
      
      {/* Red blobs positioned around tabs (red when active) and contact links (red) */}
      <FloatingBlob color={theme.colors.primary} size={170} top="5%" left="10%" delay={0} duration={30} />
      <FloatingBlob color="#FF4500" size={140} bottom="15%" right="-4%" delay={2} duration={26} />
      <FloatingBlob color="#DC2626" size={110} top="50%" left="-5%" delay={4} duration={28} />

      <Container>
        {/* Tabs */}
        <FadeIn direction="up" delay={0.1}>
          <div className="flex flex-wrap gap-4 justify-center mb-12">
            <Tab label="Warsaw" active={activeTab === 'warsaw'} onClick={() => setActiveTab('warsaw')} />
            <Tab label="Katowice" active={activeTab === 'katowice'} onClick={() => setActiveTab('katowice')} />
            <Tab label="Other" active={activeTab === 'other'} onClick={() => setActiveTab('other')} />
          </div>
        </FadeIn>

        {/* Office Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {/* Left Column - Office Info */}
          <SlideIn direction="left" delay={0.2}>
            <div className="space-y-6">
              <h2 className={`${theme.fontSize['3xl']} md:${theme.fontSize['4xl']} ${theme.fontWeight.bold} text-gray-900`}>
                {currentOffice.heading}
              </h2>
              
              <p className={`${theme.fontSize.lg} text-gray-600 leading-relaxed`}>
                {currentOffice.description}
              </p>

              <p className="text-gray-600">
                <a href={officesContent.appointmentLink} className={`text-primary ${theme.fontWeight.semibold} hover:underline`}>
                  {officesContent.appointmentLinkText}
                </a>
              </p>

              <div className="space-y-4 pt-4">
                <div>
                  <h4 className={`${theme.fontWeight.semibold} text-gray-900 mb-1`}>Location</h4>
                  <p className="text-gray-600">{currentOffice.address}</p>
                </div>

                <div>
                  <h4 className={`${theme.fontWeight.semibold} text-gray-900 mb-1`}>Number (WhatsApp)</h4>
                  <a
                    href={`https://wa.me/${currentOffice.phone.replace(/\s/g, '')}`}
                    className="text-primary hover:underline"
                  >
                    {currentOffice.phone}
                  </a>
                </div>

                <div>
                  <h4 className={`${theme.fontWeight.semibold} text-gray-900 mb-1`}>Email</h4>
                  <a
                    href={`mailto:${currentOffice.email}`}
                    className="text-primary hover:underline"
                  >
                    {currentOffice.email}
                  </a>
                </div>
              </div>
            </div>
          </SlideIn>

          {/* Right Column - Map */}
          <SlideIn direction="right" delay={0.3}>
            <div className={`w-full h-96 bg-gray-200 ${theme.radius.lg} overflow-hidden ${theme.shadow.lg}`}>
              <iframe
                src={currentOffice.mapEmbed}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={`${currentOffice.name} Office Location`}
              ></iframe>
            </div>
          </SlideIn>
        </div>
      </Container>
    </Section>
  );
}
