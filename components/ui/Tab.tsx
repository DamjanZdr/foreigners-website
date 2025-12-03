import { theme } from '@/lib/theme';

interface TabProps {
  label: string;
  active: boolean;
  onClick: () => void;
}

export default function Tab({ label, active, onClick }: TabProps) {
  return (
    <button
      onClick={onClick}
      className={`px-8 py-3 ${theme.radius.full} ${theme.fontWeight.semibold} ${theme.transition.all} ${
        active
          ? `bg-primary text-white ${theme.shadow.lg}`
          : `bg-transparent border-2 border-dashed border-primary text-primary hover:bg-primary-light`
      }`}
    >
      {label}
    </button>
  );
}
