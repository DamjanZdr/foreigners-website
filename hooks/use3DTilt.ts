'use client';

import { useState, useRef, MouseEvent } from 'react';
import { useMotionValue, useSpring } from 'motion/react';
import { theme } from '@/lib/theme';

export function use3DTilt() {
  const ref = useRef<HTMLDivElement>(null);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { damping: 20, stiffness: 300 };
  const rotateX = useSpring(x, springConfig);
  const rotateY = useSpring(y, springConfig);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(yPct * theme.animation.tilt.max);
    y.set(xPct * -theme.animation.tilt.max);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return {
    ref,
    rotateX,
    rotateY,
    handleMouseMove,
    handleMouseLeave,
    style: {
      transformStyle: 'preserve-3d' as const,
      transform: `perspective(${theme.animation.tilt.perspective}px)`,
    },
  };
}

export default use3DTilt;