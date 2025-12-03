'use client';

import Section from '@/components/layout/Section';
import Container from '@/components/layout/Container';
import { Button } from '@/components/ui/buttons';
import { FadeIn, SlideIn, FloatingBlob } from '@/components/ui/animated';
import { theme } from '@/lib/theme';
import LeadForm from '@/components/forms/LeadForm';

interface ServiceHeroSectionProps {
  title: string;
  subtitle: string;
  description: string;
  ctaButton: string;
}

export default function ServiceHeroSection({ title, subtitle, description, ctaButton }: ServiceHeroSectionProps) {
  const scrollToServices = () => {
    const element = document.getElementById('services-section');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Section className="relative overflow-hidden">
      {/* Floating Blobs */}
      <FloatingBlob color={theme.colors.primary} size={180} top="25%" left="-5%" delay={0} />
      <FloatingBlob color="#FF4500" size={140} bottom="10%" right="-5%" delay={2} duration={25} />

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Text Content */}
          <div className="space-y-6">
            <FadeIn direction="up" delay={0.1}>
              <h1 className={`${theme.fontSize['4xl']} md:${theme.fontSize['5xl']} ${theme.fontWeight.bold} text-gray-900`}>
                {title}
              </h1>
            </FadeIn>
            
            <FadeIn direction="up" delay={0.2}>
              <h2 className={`text-primary ${theme.fontSize.xl} md:${theme.fontSize['2xl']} ${theme.fontWeight.semibold}`}>
                {subtitle}
              </h2>
            </FadeIn>
            
            <FadeIn direction="up" delay={0.3}>
              <p className={`${theme.fontSize.lg} text-gray-600 leading-relaxed`}>
                {description}
              </p>
            </FadeIn>

            <FadeIn direction="up" delay={0.4}>
              <Button variant="secondary" size="lg" onClick={scrollToServices}>
                {ctaButton}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </Button>
            </FadeIn>
          </div>

          {/* Right Column - Lead Form */}
          <SlideIn direction="left" delay={0.2}>
            <LeadForm />
          </SlideIn>
        </div>
      </Container>
    </Section>
  );
}
