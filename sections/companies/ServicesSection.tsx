import Container from '@/components/layout/Container';
import Section from '@/components/layout/Section';
import SectionHeading from '@/components/ui/SectionHeading';
import { Card } from '@/components/ui/cards';
import { FadeIn } from '@/components/ui/animated';
import { companiesContent } from '@/lib/content/companies';
import { theme } from '@/lib/theme';

export default function ServicesSection() {
  return (
    <Section className="bg-gray-50">
      <Container>
        <SectionHeading
          title={companiesContent.services.title}
          subtitle={companiesContent.services.subtitle}
          centered
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {companiesContent.services.items.map((service, index) => (
            <FadeIn key={index} delay={index * 0.1}>
              <Card className="h-full">
                <h3 className={`${theme.fontSize.xl} ${theme.fontWeight.semibold} mb-3`}>
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-primary mt-1"></span>
                      <span className={`${theme.fontSize.sm} text-gray-600`}>{feature}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </FadeIn>
          ))}
        </div>
      </Container>
    </Section>
  );
}
