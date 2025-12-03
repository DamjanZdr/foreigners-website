import Section from '@/components/layout/Section';
import Container from '@/components/layout/Container';
import { FadeIn } from '@/components/ui/animated';
import { theme } from '@/lib/theme';

interface TrustSectionProps {
  heading: string;
  subheading: string;
  description: string;
  stats: {
    period: string;
    count: string;
    text: string;
  };
}

export default function TrustSection({ heading, subheading, description, stats }: TrustSectionProps) {
  return (
    <Section>
      <Container>
        <div className="space-y-8">
          {/* Heading */}
          <FadeIn direction="up" delay={0.1}>
            <h2 className={`${theme.fontSize['3xl']} md:${theme.fontSize['4xl']} ${theme.fontWeight.bold} text-gray-900 text-center max-w-3xl mx-auto`}>
              {heading} <span className="text-primary">-</span> {subheading}
            </h2>
          </FadeIn>

          {/* Description */}
          <FadeIn direction="up" delay={0.2}>
            <p className={`${theme.fontSize.lg} text-gray-600 leading-relaxed text-center max-w-4xl mx-auto`}>
              {description}
            </p>
          </FadeIn>
        </div>
      </Container>

      {/* Stats Banner */}
      <div className="bg-primary mt-16">
        <Container>
          <FadeIn direction="up" delay={0.3}>
            <div className="py-12 text-center">
              <p className={`${theme.fontSize['2xl']} md:${theme.fontSize['3xl']} ${theme.fontWeight.bold} text-white`}>
                In the past {stats.period}, <span className={`${theme.fontSize['3xl']} md:${theme.fontSize['4xl']}`}>{stats.count}</span> {stats.text}
              </p>
            </div>
          </FadeIn>
        </Container>
      </div>
    </Section>
  );
}
