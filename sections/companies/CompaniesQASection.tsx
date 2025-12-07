import Container from '@/components/layout/Container';
import Section from '@/components/layout/Section';
import SectionHeading from '@/components/ui/SectionHeading';
import { FadeIn } from '@/components/ui/animated';
import { companiesContent } from '@/lib/content/companies';
import { theme } from '@/lib/theme';

export default function CompaniesQASection() {
  return (
    <Section>
      <Container>
        <SectionHeading
          title="Frequently Asked Questions"
          subtitle="Everything you need to know about our corporate services"
          align="center"
        />

        <div className="max-w-3xl mx-auto space-y-6">
          {companiesContent.faq.map((item, index) => (
            <FadeIn key={index} delay={index * 0.05}>
              <div className={`${theme.radius.lg} bg-white p-6 ${theme.shadow.md}`}>
                <h3 className={`${theme.fontSize.lg} ${theme.fontWeight.semibold} text-gray-900 mb-3`}>
                  {item.question}
                </h3>
                <div className="text-gray-600 whitespace-pre-line">
                  {item.answer}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </Container>
    </Section>
  );
}
