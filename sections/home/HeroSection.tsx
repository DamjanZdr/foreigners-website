'use client';

import Section from '@/components/layout/Section';
import Container from '@/components/layout/Container';
import { Button } from '@/components/ui/buttons';
import { FadeIn, SlideIn, ScaleIn, AnimatedGradient, GlassBlob } from '@/components/ui/animated';
import { theme } from '@/lib/theme';
import { heroContent } from '@/lib/content';

export default function HeroSection() {
  return (
    <Section className="relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-red-50/30">
      {/* Glass Blobs - Apple-inspired glassmorphism effect */}
      <GlassBlob color="#DC2626" size={550} top="12%" left="-12%" delay={0} duration={25} blur={35} opacity={0.5} />
      <GlassBlob color="#EF4444" size={450} top="3%" left="8%" delay={2} duration={30} blur={30} opacity={0.45} />
      <GlassBlob color="#F87171" size={380} top="30%" right="3%" delay={1} duration={28} blur={28} opacity={0.42} />
      <GlassBlob color="#DC2626" size={480} bottom="3%" right="-10%" delay={4} duration={22} blur={32} opacity={0.48} />
      <GlassBlob color="#FCA5A5" size={320} bottom="22%" left="10%" delay={3} duration={26} blur={25} opacity={0.38} />
      
      {/* Additional subtle accent blobs */}
      <GlassBlob color="#FF6B6B" size={280} top="52%" left="32%" delay={5} duration={24} blur={24} opacity={0.35} />
      <GlassBlob color="#EF4444" size={350} top="10%" right="22%" delay={2.5} duration={27} blur={28} opacity={0.4} />

      {/* Gradient fade to white at bottom */}
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-white via-white/80 to-transparent pointer-events-none z-[5]" />

      <Container className="relative z-10">
        <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-6">
            <FadeIn direction="up" delay={0.1}>
              <h1 className={`${theme.fontSize['4xl']} md:${theme.fontSize['5xl']} lg:${theme.fontSize['6xl']} ${theme.fontWeight.bold} text-gray-900 leading-tight`}>
                {heroContent.title.line1}<br />
                {heroContent.title.line2}
              </h1>
            </FadeIn>
            
            <FadeIn direction="up" delay={0.2}>
              <h2 className={`text-primary ${theme.fontSize.xl} md:${theme.fontSize['2xl']} ${theme.fontWeight.semibold}`}>
                {heroContent.subtitle}
              </h2>
            </FadeIn>
            
            <FadeIn direction="up" delay={0.3}>
              <p className={`${theme.fontSize.lg} text-gray-600 leading-relaxed`}>
                {heroContent.description}
              </p>
            </FadeIn>

            {/* CTA Buttons */}
            <FadeIn direction="up" delay={0.4}>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button 
                  variant="primary" 
                  size="lg"
                  onClick={() => {
                    const consultationSection = document.querySelector('#consultation');
                    consultationSection?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  {heroContent.buttons.primary}
                </Button>
                <Button variant="secondary" size="lg">
                  {heroContent.buttons.secondary}
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </Button>
              </div>
            </FadeIn>

            {/* Social Proof */}
            <FadeIn direction="up" delay={0.5}>
              <div className="flex items-center gap-4 pt-6">
                <div className="flex -space-x-2">
                  <div className={`w-10 h-10 ${theme.radius.full} bg-gray-300 border-2 border-white flex items-center justify-center ${theme.fontSize.sm} ${theme.fontWeight.semibold} text-gray-700`}>
                    JD
                  </div>
                  <div className={`w-10 h-10 ${theme.radius.full} bg-gray-400 border-2 border-white flex items-center justify-center ${theme.fontSize.sm} ${theme.fontWeight.semibold} text-gray-700`}>
                    MK
                  </div>
                  <div className={`w-10 h-10 ${theme.radius.full} bg-gray-500 border-2 border-white flex items-center justify-center ${theme.fontSize.sm} ${theme.fontWeight.semibold} text-white`}>
                    AS
                  </div>
                </div>
                <p className={`${theme.fontSize.sm} text-gray-600`}>
                  <span className={`${theme.fontWeight.bold} text-gray-900`}>{heroContent.socialProof.count}</span> {heroContent.socialProof.text}
                </p>
              </div>
            </FadeIn>
          </div>

          {/* Right Column - Floating Card */}
          <SlideIn direction="right" delay={0.3} duration={0.8}>
            <div className="flex justify-center lg:justify-end">
              <div className="relative w-full max-w-md">
                {/* Glass layers behind the card for depth */}
                <div className="absolute inset-0 bg-gradient-to-br from-red-100/40 to-red-50/20 rounded-xl blur-3xl transform scale-110" />
                <div className="absolute inset-0 bg-gradient-to-tl from-red-50/30 to-transparent rounded-xl blur-2xl transform scale-105 translate-x-4 translate-y-4" />
                
                <ScaleIn delay={0.5}>
                  <div className={`relative bg-white/80 backdrop-blur-xl ${theme.radius.xl} ${theme.shadow['2xl']} p-8 border border-white/20 transform hover:scale-105 ${theme.transition.transform}`}>
                    {/* Card Header */}
                    <div className="flex items-center gap-4 mb-6">
                      <div className={`w-16 h-16 ${theme.radius.lg} bg-primary flex items-center justify-center`}>
                        <span className={`text-white ${theme.fontSize['2xl']} ${theme.fontWeight.bold}`}>ID</span>
                      </div>
                      <div className="flex-1">
                        <div className={`h-3 bg-gray-200 ${theme.radius.full} w-3/4 mb-2`}></div>
                        <div className={`h-3 bg-gray-200 ${theme.radius.full} w-1/2`}></div>
                      </div>
                    </div>

                    {/* Card Body - Form Fields */}
                    <div className="space-y-4 mb-6">
                      <div className={`h-12 bg-gray-100 ${theme.radius.md}`}></div>
                      <div className={`h-12 bg-gray-100 ${theme.radius.md}`}></div>
                      <div className={`h-12 bg-gray-100 ${theme.radius.md}`}></div>
                      <div className={`h-12 bg-gray-100 ${theme.radius.md}`}></div>
                    </div>

                    {/* Card Footer */}
                    <div className="flex items-center justify-between">
                      <div className={`h-12 bg-primary-light ${theme.radius.md} flex-1 mr-4`}></div>
                      <div className={`w-12 h-12 ${theme.radius.full} bg-primary flex items-center justify-center`}>
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </ScaleIn>
              </div>
            </div>
          </SlideIn>
        </div>
      </Container>
    </Section>
  );
}
