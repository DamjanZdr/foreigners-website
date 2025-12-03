'use client';

import { motion } from 'motion/react';
import { useAnimatedGradient } from '@/hooks';
import { theme } from '@/lib/theme';

interface AnimatedGradientProps {
  className?: string;
}

export function AnimatedGradient({ className = '' }: AnimatedGradientProps) {
  const position = useAnimatedGradient();

  return (
    <motion.div
      className={`absolute inset-0 -z-10 ${className}`}
      style={{
        background: `linear-gradient(135deg, 
          rgba(171, 22, 4, 0.05) ${position}%, 
          rgba(255, 69, 0, 0.08) ${position + 25}%, 
          rgba(171, 22, 4, 0.05) ${position + 50}%)`,
        backgroundSize: '200% 200%',
      }}
    />
  );
}

export default AnimatedGradient;