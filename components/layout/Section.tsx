import { theme } from '@/lib/theme';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
}

export default function Section({ children, className = '' }: SectionProps) {
  return (
    <section className={`relative ${theme.spacing.section} ${className}`}>
      {/* Gradient fade to white at top */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-white to-transparent pointer-events-none z-10" />
      
      {/* Content */}
      <div className="relative z-0">
        {children}
      </div>
      
      {/* Gradient fade to white at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent pointer-events-none z-10" />
    </section>
  );
}
