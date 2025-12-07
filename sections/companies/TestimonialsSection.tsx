import Container from '@/components/layout/Container';
import Section from '@/components/layout/Section';
import SectionHeading from '@/components/ui/SectionHeading';
import { Card } from '@/components/ui/cards';
import { FadeIn } from '@/components/ui/animated';
import { companiesContent } from '@/lib/content/companies';
import { theme } from '@/lib/theme';

export default function TestimonialsSection() {
  return (
    <Section className="bg-gray-50">
      <Container>
        <SectionHeading
          title="What Business Leaders Say"
          subtitle="Trusted by companies across Poland"
          align="center"
        />

        <div className="grid md:grid-cols-3 gap-8">
          {companiesContent.testimonials.map((testimonial, index) => (
            <FadeIn key={index} delay={index * 0.1}>
              <Card className="h-full">
                <div className="mb-4">
                  <span className={`${theme.fontSize['3xl']} text-primary`}>"</span>
                </div>
                <p className="text-gray-700 mb-6 italic">
                  {testimonial.quote}
                </p>
                <div className="pt-4 border-t border-gray-200">
                  <p className={`${theme.fontWeight.semibold} text-gray-900`}>
                    {testimonial.author}
                  </p>
                  <p className={`${theme.fontSize.sm} text-gray-600`}>
                    {testimonial.position}
                  </p>
                  <p className={`${theme.fontSize.sm} text-primary`}>
                    {testimonial.company}
                  </p>
                </div>
              </Card>
            </FadeIn>
          ))}
        </div>
      </Container>
    </Section>
  );
}
