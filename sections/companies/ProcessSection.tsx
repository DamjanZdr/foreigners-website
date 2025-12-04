import Container from '@/components/layout/Container';
import Section from '@/components/layout/Section';
import SectionHeading from '@/components/ui/SectionHeading';
import { FadeIn } from '@/components/ui/animated';
import { companiesContent } from '@/lib/content/companies';
import { theme } from '@/lib/theme';

export default function ProcessSection() {
  return (
    <Section>
      <Container>
        <SectionHeading
          title={companiesContent.process.title}
          subtitle={companiesContent.process.subtitle}
          centered
        />

        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {companiesContent.process.steps.map((step, index) => (
              <FadeIn key={index} delay={index * 0.1}>
                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className={`w-12 h-12 ${theme.radius.full} bg-primary text-white flex items-center justify-center ${theme.fontSize.xl} ${theme.fontWeight.bold}`}>
                      {step.number}
                    </div>
                  </div>
                  <div className="flex-1 pb-8 border-b border-gray-200 last:border-0">
                    <h3 className={`${theme.fontSize.xl} ${theme.fontWeight.semibold} mb-2`}>
                      {step.title}
                    </h3>
                    <p className="text-gray-600">
                      {step.description}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
