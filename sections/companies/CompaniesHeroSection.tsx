'use client';

import Container from '@/components/layout/Container';
import Section from '@/components/layout/Section';
import SectionHeading from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/buttons';
import { FadeIn, FloatingBlob } from '@/components/ui/animated';
import { companiesContent } from '@/lib/content/companies';
import { theme } from '@/lib/theme';

export default function CompaniesHeroSection() {
  return (
    <Section className="relative bg-gradient-to-br from-gray-50 to-white overflow-hidden pt-24 pb-16">
      <FloatingBlob color="bg-primary/5" size="xl" top="10%" left="5%" />
      <FloatingBlob color="bg-primary/5" size="lg" top="60%" right="10%" delay={2} />
      
      <Container>
        <div className="text-center max-w-4xl mx-auto">
          <FadeIn>
            <h1 className={`${theme.fontSize['5xl']} md:${theme.fontSize['6xl']} ${theme.fontWeight.bold} text-gray-900 mb-4`}>
              {companiesContent.hero.title}
            </h1>
          </FadeIn>
          
          <FadeIn delay={0.1}>
            <p className={`${theme.fontSize['2xl']} md:${theme.fontSize['3xl']} ${theme.fontWeight.semibold} text-primary mb-6`}>
              {companiesContent.hero.subtitle}
            </p>
          </FadeIn>
          
          <FadeIn delay={0.2}>
            <p className={`${theme.fontSize.lg} text-gray-600 mb-8 max-w-3xl mx-auto`}>
              {companiesContent.hero.description}
            </p>
          </FadeIn>

          {/* Stats */}
          <FadeIn delay={0.3}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
              {companiesContent.stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className={`${theme.fontSize['3xl']} ${theme.fontWeight.bold} text-primary mb-2`}>
                    {stat.number}
                  </div>
                  <div className={`${theme.fontSize.sm} text-gray-600`}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>

          {/* CTA Button */}
          <FadeIn delay={0.4}>
            <div className="mt-12">
              <Button
                size="lg"
                onClick={() => {
                  const formSection = document.querySelector('#consultation-form');
                  formSection?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Free Consultation
              </Button>
            </div>
          </FadeIn>
        </div>
      </Container>
    </Section>
  );
}
