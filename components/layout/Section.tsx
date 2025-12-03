import { theme } from '@/lib/theme';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export default function Section({ children, className = '', id }: SectionProps) {
  return (
    <section id={id} className={`${theme.spacing.section} ${className}`}>
      {children}
    </section>
  );
}
