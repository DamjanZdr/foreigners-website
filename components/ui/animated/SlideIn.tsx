'use client';

import { motion } from 'motion/react';
import { ReactNode } from 'react';
import { useScrollAnimation } from '@/hooks';

interface SlideInProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
  direction?: 'left' | 'right' | 'up' | 'down';
  distance?: number;
}

export function SlideIn({ 
  children, 
  delay = 0, 
  duration = 0.6, 
  className = '',
  direction = 'left',
  distance = 100
}: SlideInProps) {
  const { ref, isInView } = useScrollAnimation();

  const directions = {
    left: { x: -distance },
    right: { x: distance },
    up: { y: -distance },
    down: { y: distance },
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, ...directions[direction] }}
      animate={isInView ? { opacity: 1, x: 0, y: 0 } : {}}
      transition={{
        duration,
        delay,
        ease: [0.4, 0, 0.2, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default SlideIn;