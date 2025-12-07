'use client';

import Container from '@/components/layout/Container';
import Section from '@/components/layout/Section';
import SectionHeading from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/buttons';
import { FadeIn, GlassBlob } from '@/components/ui/animated';
import { companiesContent } from '@/lib/content/companies';
import { theme } from '@/lib/theme';

export default function CompaniesHeroSection() {
  return (
    <Section className="relative bg-gradient-to-br from-gray-50 via-white to-red-50/30 overflow-hidden pt-24 pb-16">
      {/* Glass Blobs */}
      <GlassBlob color="#fdeee7" size={480} top="8%" left="-8%" delay={0} duration={27} blur={12} opacity={0.43} />
      <GlassBlob color="#fce4d6" size={420} top="15%" right="-5%" delay={1.5} duration={31} blur={10} opacity={0.41} />
      <GlassBlob color="#fdd5c4" size={350} bottom="10%" right="5%" delay={3} duration={25} blur={8} opacity={0.39} />
      <GlassBlob color="#fcc9b3" size={300} bottom="20%" left="8%" delay={2} duration={28} blur={8} opacity={0.37} />
      
      {/* Additional accent blobs */}
      <GlassBlob color="#fbd4c0" size={220} top="50%" left="30%" delay={4} duration={24} blur={7} opacity={0.34} />
      <GlassBlob color="#fdeee7" size={180} bottom="35%" right="28%" delay={3.5} duration={26} blur={6} opacity={0.32} />
      
      {/* Gradient fade to white at bottom */}
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-white via-white/80 to-transparent pointer-events-none z-[5]" />
      
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
