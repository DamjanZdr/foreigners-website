'use client';

import Section from '@/components/layout/Section';
import Container from '@/components/layout/Container';
import { Button } from '@/components/ui/buttons';
import { FadeIn, SlideIn, GlassBlob } from '@/components/ui/animated';
import { theme } from '@/lib/theme';
import LeadForm from '@/components/forms/LeadForm';

interface ServiceHeroSectionProps {
  title: string;
  subtitle: string;
  description: string;
  ctaButton: string;
  formTitle: string;
  formSource: string;
}

export default function ServiceHeroSection({ 
  title, 
  subtitle, 
  description, 
  ctaButton,
  formTitle,
  formSource
}: ServiceHeroSectionProps) {
  const scrollToServices = () => {
    const element = document.getElementById('services-section');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Section className="relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-red-50/30">
      {/* Glass Blobs */}
      <GlassBlob color="#DC2626" size={500} top="10%" left="-12%" delay={0} duration={28} blur={32} opacity={0.48} />
      <GlassBlob color="#EF4444" size={400} top="5%" right="8%" delay={1.5} duration={32} blur={28} opacity={0.42} />
      <GlassBlob color="#F87171" size={350} bottom="5%" right="-10%" delay={3} duration={26} blur={26} opacity={0.4} />
      <GlassBlob color="#FCA5A5" size={300} bottom="15%" left="12%" delay={2} duration={30} blur={24} opacity={0.36} />

      {/* Gradient fade to white at bottom */}
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-white via-white/80 to-transparent pointer-events-none z-[5]" />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-6 lg:pr-8">
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
            <LeadForm title={formTitle} source={formSource} />
          </SlideIn>
        </div>
      </Container>
    </Section>
  );
}
